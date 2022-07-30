import React from 'react'

function Recipe({setLetters}) {

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
  let num = 0

  return (
    <div className='recipe__num-container'>
      {
        letters.map(item=>{
          return (
            <div className="recipe__numBox" key={num++} onClick={()=>setLetters(item)}>
              <h3>{item}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Recipe