import React from 'react';
import Navbar from './Navbar';
import Image from './img/Image.png';
 import Image1 from './img/Image (1).png';
import Image2 from './img/Image (2).png';
import Image3 from './img/Image (3).png';
import Image4 from './img/Image (4).png';
import Image5 from './img/Image (5).png'

const style={
//   border:"2px solid black",
  margin:"20px",
//   padding:"20px",
  width:"320px",
  backgroundColor:'#FFFFFF',
  borderRadius:'12px',
  objectFit: 'fill',
  boxShadow: '0px 0px 100px 10px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Outfit'
}


const array=[
  {
      img:Image,
      title:"Organic Farming: How It Can Help Save the Planet",
      desc:"Learn about the benefits of organic farming and how it can help reduce the environmental impact of agriculture."
  },
  {
      img:Image1,
      title:"The Internet of Things and Precision Agriculture: A Match Made in Heaven",
      desc:"Discover how IoT devices are transforming precision agriculture, from soil moisture sensors to drones."
  },
  {
      img:Image2,
      title:"5 Ways to Optimize Your Crop Yields with Automation",
      desc:"Find out how automation can increase productivity on the farm, and learn about the latest tools and technologies."
  },
  {
      img:Image3,
      title:"The Business Case for Sustainable Farming: Why it Makes Financial Sense",
      desc:"Explore the economic benefits of sustainable farming practices, from reduced input costs."
  },
  {
      img:Image4,
      title:"Expert Insights: The coming future of Agri-Tech",
      desc:"Hear from top experts in the field about the latest trends and technologies shaping the future of Agri-tech."
  },
  {
      img:Image5,
      title:"Maximizing Crop Yields with Precision Planting",
      desc:"Discover how precision planting can help farmers maximize their crop yields while reducing waste and costs."
  },

  {
      img:'https://tse1.mm.bing.net/th?id=OIP.ieatCf-CMeeTBmrLW6iymQHaE7&pid=Api&P=0',
      title:"card 8",
      desc:"This is card description"
  },
  {
      img:'https://tse1.mm.bing.net/th?id=OIP.ieatCf-CMeeTBmrLW6iymQHaE7&pid=Api&P=0',
      title:"card 9",
      desc:"This is card description"
  },
  {
      img:'https://tse1.mm.bing.net/th?id=OIP.q92-B6ZX3Nw2ebeSaa3mWwHaGr&pid=Api&P=0',
      title:"card 10",
      desc:"This is card description"
  },
  // {
  //     img:image1,
  //     title:"card 11",
  //     desc:"This is card description"
  // },
  // {
  //     img:image1,
  //     title:"card 12",
  //     desc:"This is card description"
  // }
]
function Cards(Props){
  return(
      <>
      <div className='sample'  >
          <div style={style}>
              <img className="card-img-top" style={{objectFit:'contain'}} src={Props.a} alt='img'/>
              <h3 className='heading'>{Props.b}</h3>
              <p className='description' style={{ color: 'rgba(33, 37, 41, 0.7)'}}>{Props.c}</p>
              <button className='btn' style={{color: '#00C170'}}>Read Full Article</button>
          </div>
      </div>
      </>
  )
}

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gridAutoRows:"minmax(auto,auto)",justifyContent:"around",float:'right'}}>
    {array.map(function(value,index){
        return <Cards key={index} a={value.img} b={value.title} c={value.desc} />
    })}
    </div>
    <div style={{ flexDirection: 'column',justifyContent: 'center',alignItems: 'flex-start',padding: '20px',gap: '20px',boxShadow: '0px 0px 100px 10px rgba(0, 0, 0, 0.1)',
    margin:"20px 20px 20px 20px",width: '350px',height: '397px', borderRadius:'12px',fontSize:'20px',fontFamily: 'Outfit',fontWeight: '400'}} >
        <ul type='none' >
            <h3 style={{fontFamily: 'Roboto Slab'}}>Categories</h3>
            <li style={{borderBottom: '  0.5px solid rgba(33, 37, 41, 0.5) ',}}>Automation</li>
            <li style={{borderBottom: '  0.5px solid rgba(33, 37, 41, 0.5) '}}>IoT</li>
            <li style={{borderBottom: '  0.5px solid rgba(33, 37, 41, 0.5) '}}>Precision Agriculture</li>
            <li style={{borderBottom: '  0.5px solid rgba(33, 37, 41, 0.5) '}}>Sustainable Farming</li>
            <li style={{borderBottom: '  0.5px solid rgba(33, 37, 41, 0.5) '}}>Industry Farming</li>
            <li style={{borderBottom: '  0.5px solid rgba(33, 37, 41, 0.5) '}}>Industry News</li>
            <li style={{borderBottom: '  0.5px solid rgba(33, 37, 41, 0.5) '}}>Case Studies</li>
            <li>Tips & Tricks</li>
        </ul>
      
      
    </div>
    </>
  )
}

export default Home