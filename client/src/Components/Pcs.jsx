import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import './Pcs.css'


const Pcs = () => {

  const allproducts = useSelector((store)=>store.Product?.product)
  console.log("voici all products",allproducts)
   const pcs = allproducts.filter((data) => data?.Category === "Pcs");
   console.log(pcs)

  return (
    <div className='content1'>

      <h1> Liste Pcs</h1>

    
      <div className='boxpcs'>

      {pcs.map((el)=><Card data={el}/>)}
      
    
      </div>


    </div>
  )
}

export default Pcs