import { useState, useEffect } from 'react'
import './App.css'

function App() {

  
  
  function addCardElements(card) {
    const value = card.dataset.value
    const suit = card.dataset.suit

    const valueAsNumber = parseInt(value)
    if(isNaN(valueAsNumber)) {
         card.append(createPip())
    } else {
        // for loop and add each one 
        for(let i = 0; i < valueAsNumber; i++) {
            const pip = document.createElement('div');
            pip.classList.add('pip')
            card.append(pip);
        }
    }

    card.append(createCornerNumber('top', value));
    card.append(createCornerNumber('bottom', value));
}


function createCornerNumber(position: string, value: string | null ) {
    const corner = document.createElement('div')
    corner.textContent = value
    corner.classList.add('corner-number');
    corner.classList.add(position)
    return corner
    
}


function createPip() {
  const pip = document.createElement('div')
  pip.classList.add('pip')
  
    return pip
  }

  useEffect(() => {
    const cards = document.querySelectorAll('.card')
    cards.forEach(addCardElements)
    
  })
  
  return (
    <>
    {/* <div className="card" data-suit="spade" data-value="1"></div>  */}
    <div className="card" data-suit="spade" data-value="2"></div>
    <div className="card" data-suit="spade" data-value="3"></div>
    <div className="card" data-suit="spade" data-value="4"></div>
    <div className="card" data-suit="spade" data-value="5"></div>
    <div className="card" data-suit="spade" data-value="6"></div>
    <div className="card" data-suit="spade" data-value="7"></div>
    <div className="card" data-suit="spade" data-value="8"></div>
    <div className="card" data-suit="spade" data-value="9"></div>
    <div className="card" data-suit="spade" data-value="10"></div>
    
    <div className="card" data-suit="spade" data-value="A"></div>
    <div className="card" data-suit="spade" data-value="J"></div>
    <div className="card" data-suit="spade" data-value="Q"></div>
    <div className="card" data-suit="spade" data-value="K"></div>

    </>
  )
}

export default App
