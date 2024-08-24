// import bcrypt from 'bcrypt'
// const bcrypt = require('bcrypt');
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
require('dotenv').config()
const port = process.env.PORT || 5001
const app = express()

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://assign-11-c79bf.web.app',
    'https://assign-11-c79bf.firebaseapp.com',
  ],
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

// verify jwt middleware
const verifyToken = (req, res, next) =>{
  const token = req.cookies?.token
  if(!token) return res.status(401).send({message:'unauthorized'})
      if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
          if(err){
            return console.log(err)
            return res.status(401).send({message:'unauthorized'})
          }
          console.log(decoded)
          req.user = decoded
          next()
        })
      }
}
// p- 18:53
// const uri = "mongodb://localhost:27017";
// const uri = "mongodb://192.168.0.101:27017";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ts8x6gb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
async function run() {
  try {

    // Items
    const itemsCollection = client.db('practiceAll').collection('items')
    const usersCollection = client.db('practiceAll').collection('users')
    const itemwishlistCollection = client.db('practiceAll').collection('itemwishlist')
    const productsCollection = client.db('msrStore').collection('products')


    // jwt genarate
    app.post('/jwt', async(req, res)=>{
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn:'2h'
      })
      // res.send({token})
      res
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        cameSite: process.env.NODE_ENV ==='production'?'none':'scrict'
      }).send({success:true})
    })
    // Clear token on logout
    app.get('/logout', (req, res)=>{
      console.log('hit')
      res
      .clearCookie('token',{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        cameSite: process.env.NODE_ENV ==='production'?'none':'scrict',
        maxAge:0
      })
      .send({success:true})
    })
    // Get all items data from db for Admin
    app.get('/allitems', async (req, res) => {
      const result = await itemsCollection.find().toArray()
      res.send(result)
    })
    // // Get all users data from db for admin 
    // app.get('/users', async (req, res) => {
    //   const result = await usersCollection.find().toArray()
    //   res.send(result)
    // })
        // Get all users data from db for admin 
        app.post('/user', async (req, res) => {
          const {password, email} = req.body
          const query = {pass:password, email:email}
          const result = await usersCollection.findOne(query)
          res.send(result)
        })

    // Get all approve items data from db for user, for admin
    app.get('/approveitems', async (req, res) => {
      const query = {status:'approve'}
      const result = await itemsCollection.find(query).toArray()
      res.send(result)
    })
    // Get all approve items data from db for admin
    app.get('/pendingitems', async (req, res) => {
      const query = {status:'pending'}
      const result = await itemsCollection.find(query).toArray()
      res.send(result)
    })
        // Save a item data in db for creator
        app.post('/product', async (req, res) => {
          const productData = req.body
          const result = await productsCollection.insertOne(productData)
          res.send(result)
        })
        app.post('/item', async (req, res) => {
          const itemData = req.body
          const result = await itemsCollection.insertOne(itemData)
          res.send(result)
        })

        // Save a user data in db for user
        app.post('/signup', async (req, res) => {
          const userData = req.body
          const query = { email: userData.email };
          const existingUser = await usersCollection.findOne(query);
          if (existingUser) {
            return res.send({ message: "user already exists", insertedId: null });
          }
          const result = await usersCollection.insertOne(userData)
          res.send(result)
        })
      // Save a wishitem data in db for user
      app.post('/itemwishlist', async (req, res) => {
        const itemwishlistData = req.body
        const query = { 'itemId': itemwishlistData.itemId, 'user.email': itemwishlistData.user.email}
        const existingItem = await itemwishlistCollection.findOne(query)
        if(existingItem){
          return res.send({message: "item already exists in your wishlist", insertedId: null})
        }
        const result = await itemwishlistCollection.insertOne(itemwishlistData)
        res.send(result)
      })
      //  get My wishItem for user
      app.get('/mywishlist/:email', async(req, res)=>{
        const email = req.params.email;
        const query = {'user.email':email}
        const result = await itemwishlistCollection.find(query).toArray()
        res.send(result)
      })
      // delete My wishlist for user
      app.delete('/mywishlist/:id', async(req, res)=>{
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await itemwishlistCollection.deleteOne(query)
        res.send(result)
      })


    
    // Get specific item from bd for all
    app.get('/item/:id', async (req, res) => {
          // const id = req.params.id
          // const query = { _id: new ObjectId(id) }
          // const result = await itemsCollection.findOne(query)
          const result = await itemsCollection.findOne({_id: new ObjectId(req.params.id)})
          res.send(result)
        })
      // get all items posted by a specific for creator
    app.get('/myposteditems/:email', verifyToken, async (req, res) => {
      // from verify token
      const tokenEmail = req.user.email
      const email = req.params.email
      if(tokenEmail !== email){
        return res.status(403).send({message:'forbidden access'})
      }
      const query = { 'creator.email': email }
      const result = await itemsCollection.find(query).toArray()
      res.send(result)
    })
        app.put('/updateItem/:id', async (req, res) => {
          const id = req.params.id;
          const itemData = req.body;
          const query = { _id: new ObjectId(id) };
          const data = {
            $set:{
              // item_title:req.body.item_title
              ...itemData
            }
          }
          const result = await itemsCollection.updateOne(query, data)
      res.send(result)
        })
        app.patch('/patchItem/:id', async (req, res) => {
          const id = req.params.id;
          const itemData = req.body;
          const query = { _id: new ObjectId(id) };
          const data = {
            $set:{
              // item_title:req.body.item_title
              ...itemData
            }
          }
          const result = await itemsCollection.updateOne(query, data)
      res.send(result)
        })
        app.put('/status/:id', async (req, res) => {
          const id = req.params.id;
          const query = { _id: new ObjectId(id) };
          const data = {
            $set:{
              status:'approve'
            }
          }
          const result = await itemsCollection.updateOne(query, data)
      res.send(result)
        })
        app.delete('/deleteItem/:id', async(req, res)=>{
          const id = req.params.id;
          const query = {_id: new ObjectId(id)}
          const result = await itemsCollection.deleteOne(query);
          res.send(result)
        })

    //
    app.get('/recentitems', async (req, res) => {
      const query = {status:'approve'}
      const result = await itemsCollection.find(query).sort({_id: -1}).limit(6).toArray()
      res.send(result)
    }) 

    // Send a ping to confirm a successful connection
    // await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir)
app.get('/', (req, res) => {
  res.send("Hello from Farwah's Server....")
})

app.listen(port, () => console.log(`Server running on port ${port}`))
