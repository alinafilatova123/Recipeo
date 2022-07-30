import React, { useState } from 'react'
import './recipeInfo.css'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function RecipeInfo() {

  const { MealId } = useParams()

  const[item, setItem] = useState()

  let vId = ''

  if(MealId !== ''){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
    .then(res=>res.json())
    .then(data=>setItem(data.meals[0]))
  }

  if(item){
    const url = item.strYoutube
    const str = url.split('=')
    vId = str[str.length - 1]
  }

  return (
    <>
      <Navbar/>
      {
        (!item) ? ''
        : 
        <div className="recipe__content">
          <img src={item.strMealThumb} alt="" />
          <div className="recipe__inner-content">
            <h1>{item.strMeal}</h1>
            <h2>{item.strArea} Food</h2>
            <h3>{item.strCategory}</h3>
          </div>
          <div className="recipe__details">

            <div className="recipe__info">
              <div className="recipe__ingredients">
                <h2>Ingredients</h2>
                <h4>{item.strIngredient1} : {item.strMeasure1}</h4>
                <h4>{item.strIngredient2} : {item.strMeasure2}</h4>
                <h4>{item.strIngredient3} : {item.strMeasure3}</h4>
                <h4>{item.strIngredient4} : {item.strMeasure4}</h4>
                <h4>{item.strIngredient5} : {item.strMeasure5}</h4>
                <h4>{item.strIngredient6} : {item.strMeasure6}</h4>
                <h4>{item.strIngredient7} : {item.strMeasure7}</h4>
                <h4>{item.strIngredient8} : {item.strMeasure8}</h4>
              </div>

              <div className="recipe__instructions">
                <h2>Instructions</h2>
                <h4>{item.strInstructions}</h4>
              </div>
            </div>
          </div>

            <div className="recipe__video">
              <iframe src={`https://www.youtube.com/embed/${vId}`}></iframe>
            </div>

        </div>
      }
    </>
  )
}

export default RecipeInfo