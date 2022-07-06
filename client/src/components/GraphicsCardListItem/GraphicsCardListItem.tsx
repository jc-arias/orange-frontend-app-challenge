import React, { FC } from 'react'
import './GraphicsCardListItem.css'
import GraphicsCardService from '../../services/graphics-cards'
import GraphicsCardImage from './GraphicsCardImage/GraphicsCardImage'
import GraphicsCardInfo from './GraphicsCardInfo/GraphicsCardInfo'
import { useDispatch } from 'react-redux'
import { changeState } from '../../store/reducers/state-slice'

export interface GraphicsCardListItemProps {
  item: any
}

const GraphicsCardListItem: FC<GraphicsCardListItemProps> = ({ item }) => {
  const dispatch = useDispatch()
  const { model, manufacturer, price, image } = item

  const fetchItem = (item: any) => {
    const item$ = GraphicsCardService.getExtendedInfo(item.id)
    item$.subscribe({
      next: (result: any) => dispatch(changeState({ name: 'Detail', params: { item: result } }))
    })
  }

  return (
    <>
      <div className={'graphic-card-item'} onClick={() => fetchItem(item)}>
        <GraphicsCardImage image={image} />
        <GraphicsCardInfo
          manufacturer={manufacturer}
          model={model}
          price={price}
        />
      </div>
    </>
  )
}

export default GraphicsCardListItem
