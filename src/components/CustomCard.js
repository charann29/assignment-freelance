import React from 'react'
import './CustomCard.css'
const CustomCard = ({data,headerName}) => {
  return (
    <div className='customCard'>
        <div className='top'>
                <p>{headerName}</p>
        </div>
        <div className='bottom'>
    
                   
                    
                        {
                           data.map((da,index)=><FlastList key={index} data={da}></FlastList>)                            
                        }

                  

                    
        </div>
    </div>
  )
}

export default CustomCard


const FlastList = ({data})=>{

    return (
        <div className='flatist'>
            {
                Object.keys(data).map((key,index)=>
                <a href={data[key]} key={index}>
                    <button>
                        {key}
                    </button>
                </a>
            )
            }
        </div>
    )

}