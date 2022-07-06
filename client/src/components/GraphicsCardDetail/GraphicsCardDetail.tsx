import React from 'react'
import { connect, useDispatch } from 'react-redux'
import GraphicsCardDetailImage from './GraphicsCardDetailImage/GraphicsCardDetailImage'
import GraphicsCardDetailSpecs from './GraphicsCardDetailSpecs/GraphicsCardDetailSpecs'
import { changeState } from '../../store/reducers/state-slice'
import './GraphicsCardDetail.css'

const GraphicsCardDetail = (props: any) => {
  const dispatch = useDispatch()
  const { item } = props

  return (
    <div className={'graphic-card-detail'}>
      <div className={'inner'}>
        <GraphicsCardDetailImage image={item.image} />
        <GraphicsCardDetailSpecs item={item} />
        <div className={'close'} onClick={() => dispatch(changeState({ name: 'List' }))}>X</div>
      </div>
    </div>
  )
}

export default connect(null, null)(GraphicsCardDetail)
