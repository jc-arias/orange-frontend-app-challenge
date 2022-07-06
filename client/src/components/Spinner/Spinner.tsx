import React from 'react'
import SPINNER_PATH from '../../assets/img/spinner.png'

const Spinner = (props: any) => {
  const { display } = props
  if (!display) return null
  return (
    <img className={ 'center spinner' } src={ SPINNER_PATH } alt={ 'spinner' }/>
  )
}

export default Spinner
