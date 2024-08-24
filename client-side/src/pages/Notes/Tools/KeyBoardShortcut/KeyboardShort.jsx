const KeyboardShort = () => {
    const codes = [
       { topic:"Common Keyboard",
       types:[ 
        {
            first:"To show a virtual window",
            second:"window + Ctrl + D"
        }
    ]
       },

       { topic:"VS Code",
       types:[ 
        {
            first:"1st",
            second:"2nd"
        }
    ]
       }
    ]
    return (
        <div className="topic-border code">
            {
                codes.map((topic, index) =><div key={index}>
                    <h2 id={topic.topic} className="sidebarHeading to_jump">{topic.topic}</h2>
                    {
                        topic.types.map((type, ind) =><div key={ind}>
        <h4>{type.first} <span className="text-yellow-500">Press :</span> <kbd className="text-cyan-500">{type.second}</kbd></h4>
                        </div>)
                    }
                </div>)
            }
        </div>
    );
};

export default KeyboardShort;