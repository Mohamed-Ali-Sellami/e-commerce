import React from 'react'
import './Banniere.css'
import image from './images/Banniere.png'
const Banniere = () => {
  return (
    <div>
      
      <div class="content"> 
    <div class="text1">
      <h1 class="title"> Iphone 15 Pro Max </h1>
      <p> 2024 new high quality men's business Smartphone multi-function <br/> automatic waterproof mechanical stainless steel smartphone </p>
      <button type="button" class="btn btn-light">Shop Now</button>
    </div>

    <div class="image1">
    <img src={image} alt="Example" />
    </div>

   </div>

</div>



  )
}

export default Banniere
