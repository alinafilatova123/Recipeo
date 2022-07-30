import React from 'react'
import './mealItem.css'
import { useNavigate } from 'react-router-dom'

function MealItem({data}) {
  
  let navigate = useNavigate()

  return (
    <>

      {
        (!data) ? 'Meals Not Found'

        : data.map(item=>{
          return(
            <div className="item__card" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
              <img src={item.strMealThumb} alt="" />
              <h3>{item.strMeal}</h3>
          </div>
          )
        })
      }

    </>
  )
}

export default MealItem