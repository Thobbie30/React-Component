import React from 'react'
import '../styles/Input.css'

const Input = () => {
  return (
    <div class="search-container">  
  <form action="https://www.google.com/search" method="GET" target="_blank">
    <input type="text" placeholder="Search Google..."/>
    <button type="submit">Search</button>
  </form>
</div> 
    
  )
}

export default Input