import toast from "react-hot-toast";

const AddProduct = ({product, index}) => {
  const {title, images,  description, price, category, rating}=product;


    const handlePost = (e) => {
        e.preventDefault()
        const form = e.target
        const productName = form.productName.value
        const image = form.image.value
        const description = form.description.value
        const price = form.price.value
        const category = form.category.value
        const rating = form.rating.value
        const date = new Date()
        const productData = {
          productName,
          image,
          description,
          price,
          category,
          rating,
          date,
        }
        console.log(productData)
        fetch(`${import.meta.env.VITE_API_URL}/product`,{
            method: "POST",
            headers:{"Content-type": "application/json"},
            body:JSON.stringify(productData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data?.insertedId){
                toast.success('Item Data added Successfully!')
            }
        })
    }
    return (
        <>
        <div className='w-5/6 mx-auto min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-5xl text-blue-800 font-bold capitalize text-center'>
          Product- <span className="bg-red-500">{index+1}</span>
        </h2>

        <form onSubmit={handlePost}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='productName'>
                productName
              </label>
              <input
                id='productName'
                name='productName'
                type='text'
                defaultValue={title}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='image'
              >
                image URL
              </label>
              <input
                id='image'
                autoComplete='image'
                name='image'
                defaultValue={images[0]}
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>

          </div>
         
          {/* Description */}
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='long_description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              defaultValue={description}
            ></textarea>
          </div>
          <div>
            <input type="text"
            id="category" 
            name="category"
            defaultValue={category}
            />
          </div>
          <div>
            <input type="text" 
            name="price"
            defaultValue={price}
            />
          </div>
          <div>
            <input type="text" 
            name="rating"
            defaultValue={rating}
            />
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
        </>
        
    );
};

export default AddProduct;