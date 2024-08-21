import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import './Smartphones.css'


const Smarthphones = () => {

  const allproducts = useSelector((store)=>store.Product?.product)
  console.log("voici all products",allproducts)
   const smartphones = allproducts.filter((data) => data?.Category === "Smartphones");
   console.log(smartphones)



  return (

<div>

    <div className='content1'>
      <h1> Liste Smartphones</h1>

      {/* <div className='search-container'>
      <input type="text" placeholder="Search Smartphones" name="search"/>
      <button class="button-33" role="button">Search</button>
      </div> */}

      <div className='boxphone'>
    {smartphones?.map((el)=><Card data={el}/>)}
      </div>
      
    </div>

    </div>

  )
}

export default Smarthphones
