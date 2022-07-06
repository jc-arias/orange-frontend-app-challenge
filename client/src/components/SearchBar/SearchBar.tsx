import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props: any) => {
  const { filter } = props
  const [input, setInput] = useState('')
  let timeout: any = null

  const handleChange = (e: any) => {
    e.preventDefault()
    setInput(e.target.value)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      filter(e.target.value)
    }, 1000)
  }
  return (
    <input
      type='search'
      className={ 'search-bar center-horizontal' }
      placeholder={ 'Search...' }
      onChange={ handleChange }
      value={ input }
    />
  )
}

export default SearchBar
