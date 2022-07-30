import React, { useEffect, useState } from 'react'
import MealItem from '../MealItem/MealItem'
import RecipeLetters from '../RecipeLetters/RecipeLetters'
import SearchIcon from '@mui/icons-material/Search';
import './meal.css'
import Navbar from '../Navbar/Navbar';

function Meal() {

  const[url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  const[item, setItem] = useState()
  const[show, setShow] = useState(false)
  const[search, setSearch] = useState('')

  useEffect(()=>{

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setItem(data.meals)
      setShow(true)
    })

  },[url])

  function setLetter(letter){
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  }

  function searchRecipe(e){
    if(e.key==='Enter'){
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
  }

  return (
    <>
      <Navbar/>
      <section className="meal__main">
        <div className="meal__heading">
          <h1>Search Your Food Recipe</h1>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero porro voluptatum tempora quis fugiat quam eum delectus, deleniti totam est!
          </h4>
        </div>
        <div className="meal__searchBox">
          <SearchIcon/>
          <input type="search" className='meal__search-bar' onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
        </div>

        <div className="main__letter-container">
          <RecipeLetters setLetters={letter=>setLetter(letter)}/>
        </div>

        <div className="meal__container">
          {
            show? <MealItem data={item}/> : 'Meals Not Found'
          }
        </div>
      </section>
    </>
  )
}

export default Meal