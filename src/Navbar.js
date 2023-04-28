import React from 'react'
import logo from './img/logo.png'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light opacity-1" style={{backgroundImage: 'url("https://media.nationalgeographic.org/assets/photos/120/983/091a0e2f-b93d-481b-9a60-db520c87ec33.jpg")' , height:'500px', position:'sticky', backgroundSize:'cover', backgroundPosition:'top', display:'block'}} >
    
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-center " id="navbarNavAltMarkup">
  <div > <img width="90px" height="32px"  src={logo} /> </div>
    <div className="navbar-nav">
      
   
      <a className="nav-item nav-link active" href="#">Home </a>
      <a className="nav-item nav-link" href="#">Product</a>
      <a className="nav-item nav-link" href="#">About Us</a>
      <a className="nav-item nav-link" href="#">Support</a>
      <a className="nav-item nav-link" href="#">Blog <span className="sr-only">(current)</span> </a>
    </div>
    <div className='d-flex flex-row-reverse '>
    <button type="button" className="btn btn-success " style={{borderRadius:'20px'}}>Buy Now</button> </div>
  </div>
  <div className='d-flex justify-content-center' style={{margin:'10%',color:'white'}}>
  <pre>
    <h1 style={{color:'white'}}>Transforming Agriculture with Technology</h1>
  <pre style={{color:'white'}} >Revolutionizing Agriculture through Innovation: Explore the Latest Trends and Technologies in Agri-
       Tech with Ouranos Robotics'</pre> 
  </pre>
  </div>
  
</nav>

</>
  )
}

export default Navbar