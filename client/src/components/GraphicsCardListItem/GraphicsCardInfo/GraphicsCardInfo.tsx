import React from 'react'

const GraphicsCardInfo = (props: any) => {
  const { manufacturer, model, price } = props
  return (
    <div className={'graphic-card-info'}>
      <span className={'model'}> {manufacturer} {model} </span>
      <span className={'details'}> {'Click for details'} </span>
      <span className={'price'}> {price}€</span>
    </div>
  )
}

export default GraphicsCardInfo
