import React from 'react'
import './Section2.css'

import apple from './images/Apple-logo.svg'
import samsung from './images/Samsung-logo.svg'
import xiaomi from './images/xiaomi-logo.svg'
import sony from './images/Sony-logo.svg'
import honor from './images/Honor-logo.png'
import huawei from './images/huawei-logo.svg'
 import videobg from './images/videosection2.mp4'
import Card1 from './images/card1.png'
import Card2 from './images/card2.png'
import Card3 from './images/card3.png'


function Section2() {
    return(
    
    
    <div class="container2" >
    
    <div class="brands">
    <img src={apple}/>
    <img src={samsung}/>
    <img src={xiaomi}/>
    <img src={sony}/>
    <img src={huawei}/>
    <img src={honor}/>
    

    </div>

    {/* <div class="video-background" >

<video autoPlay muted loop  controls className="video-background__video">
   <source src={videobg}  type="video/mp4"/>  
</video>   
</div>  */}

<div className='cardbox'>

<div className="container3" >
 
 <h1 className="tile3"> Product on sale on this Month</h1>
 <div className="cards" >
 <div className="card">
     <p className='sold'>-40%</p>
     <img src={Card1}/>
     <h3>Samsung S24 plus</h3>
     <p>Ce texte décrit la première carte.</p>
     <p> A partir de 3000 TND</p>
     <button className="button-s3">Plus Details </button>
 </div>
 <div className="card">
     <p className='sold'>-50%</p>
     <img src={Card2}/>
     <h3>Smartwatch Mibro</h3>
     <p>Ce texte décrit la deuxième carte.</p>
     <p> A partir de 399 TND</p>
     <button className="button-s3">Plus Details</button>
 </div>
 <div className="card">
     <p className='sold'>-30%</p>
     <img src={Card3}/>
     <h3>Mouse Razer</h3>
     <p>Ce texte décrit la troisième carte.</p>
     <p> A partir de 299 TND</p>
     <button className="button-s3">Plus Details </button>
 </div>
 
 </div>

</div>


</div>




   

    
    
    </div> 
    
    
    
    
    
    )
    ;}

    

export default Section2
