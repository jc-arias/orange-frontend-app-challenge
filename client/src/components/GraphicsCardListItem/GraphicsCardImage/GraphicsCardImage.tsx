import React from 'react'

const GraphicsCardImage = (props: any) => {
  const { image } = props
  return (
    <div className={'graphic-card-img '}>
      <img src={image} alt={'Img'} />
    </div>
  )
}

export default GraphicsCardImage
