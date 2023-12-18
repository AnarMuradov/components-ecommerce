import React from 'react'
import './style.scss'
import Timer from '../timer'

const FleshSales = () => {
    
  return (
    <section className='flashSales'>
        <div className='flashSales__Container'>
            <div className='flashSales__Head'>
            <div className='flashSales__Head__Title'>Today's</div>  
            <div className='flashSales__Head__Content'>
            <div className='flashSales__Head__Content__Name'>
            <h2>Flash Sales</h2>
            <Timer skidka={"Dec 25, 2023 15:37:25"}/>
            </div>   
            <div className='flashSales__Head__Content__Icon'>
                left right</div> 
            </div>  
            </div>
            <div className='flashSalesProducts'></div>
        </div>
    
    </section>
  )
}

export default FleshSales