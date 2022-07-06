import React, { FC, useState, useEffect } from 'react'

import GraphicsCardListItem from '../GraphicsCardListItem/GraphicsCardListItem'
import SearchBar from '../SearchBar/SearchBar'
import './GraphicsCardListContainer.css'
import GraphicsCardsService from '../../services/graphics-cards'

import Spinner from '../Spinner/Spinner'

interface GraphicsCardListContainerProps { }

const GraphicsCardListContainer: FC<GraphicsCardListContainerProps> = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  const [spinner, setSpinner] = useState(false)

  const fetchData = (params: any) => {
    setSpinner(true)
    const subscription$ = GraphicsCardsService.get(params)
    subscription$.subscribe({
      next: (result: any) => setData(result),
      complete: () => setSpinner(false)
    })
  }

  useEffect(() => {
    fetchData('')
  }, [])

  useEffect(() => {
    (!filter.length) ? fetchData('') : fetchData(filter)
  }, [filter])

  return (
    <>
      <Spinner display={ spinner } />
      <SearchBar filter={ (filter: any) => setFilter(filter) } />
      <div className={'list-container center'}>
        {data?.length && data.map((item) => {
          return <GraphicsCardListItem item={item} />
        })}
      </div>
    </>
  )
}

export default GraphicsCardListContainer
