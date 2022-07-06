import React from 'react'

const GraphicsCardDetailSpecs = (props: any) => {
  const { manufacturer, model, price, memory, tdp, clock } = props.item

  return (
      <div className={'specs'}>
        <span className={'model'}> {manufacturer} {model} </span>
        <div className={ 'format' }>
            <span className={ 'name' }>Memory:</span><span> {memory} GB</span><br/>
            <span className={ 'name' }>TDP:</span><span> {tdp} W</span><br/>
            <span className={ 'name' }>Clock:</span><span> {clock} MHz</span><br/>
            <span className={ 'name' }>Price:</span><span> {price}€</span>
        </div>
      </div>
  )
}

export default GraphicsCardDetailSpecs
