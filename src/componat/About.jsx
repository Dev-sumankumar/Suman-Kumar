import React, {useState} from 'react'

export default function About() {
    const [style,setStyle] = useState({
        color:"black",
        backgroundColor:"white",
    })

    const handleStyle = () =>{
        if(style.color === "white"){
            setStyle({
                color:"black",
                backgroundColor:"white",
            })
        }
        else{
            setStyle({
                
                color:"white",
                backgroundColor:"black",
            })
        }
    }




  return (
    <div>
         <div className="p-5" >
      <div className="card" style={style}>
        <h5 className="card-header">About Us</h5>
        <div className="card-body">
          <h5 className="card-title">TextUtils</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident recusandae molestiae ratione magni perferendis. Voluptatum qui necessitatibus ad adipisci, ut fugiat, harum, quia impedit enim repellendus quo quaerat corporis. Voluptates!
            Omnis consectetur facere, aut tempore commodi quis deserunt, enim autem perspiciatis facilis sequi qui recusandae quisquam cum ipsam libero! Rem perspiciatis distinctio nobis ut, recusandae praesentium quae natus excepturi quas?
            Culpa mollitia obcaecati expedita id voluptatibus nam doloribus, excepturi, nemo architecto iste odit. Enim dolorem sunt earum iste cumque voluptate omnis quam, repellendus provident perspiciatis fugit amet odio culpa animi.
            Illo amet a dolorum cumque quibusdam facilis! Ex quo harum exercitationem quam blanditiis doloribus possimus maiores ullam, fugit animi molestiae rem aspernatur quod eveniet explicabo facilis! Dolorum modi fugiat a?
            Vel fugiat blanditiis excepturi, tempore quis, libero itaque tempora, molestias doloribus odit natus assumenda ipsa sapiente! Dolorem debitis reiciendis pariatur explicabo possimus numquam eum perspiciatis omnis rem, veniam rerum aut.
            Velit placeat, facilis impedit vero atque expedita tenetur quia aspernatur quae dolor officiis est. Id expedita, consequatur iste quae inventore, similique maiores beatae, quia itaque corporis doloremque reprehenderit suscipit porro.
         

          </p>
          <button className="btn btn-primary" onClick={handleStyle}>
            Enable Dark Mode
          </button>
        </div>
      </div>
    </div>
      
    </div>
  )
}
