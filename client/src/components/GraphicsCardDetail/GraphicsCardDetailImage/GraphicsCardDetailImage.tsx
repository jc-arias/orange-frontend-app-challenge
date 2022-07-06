import React from 'react'

const GraphicsCardDetailImage = (props: any) => {
  const { image } = props
  return (
        <img className={'image'} src={image} alt={'Img'} />
  )
}

export default GraphicsCardDetailImage
