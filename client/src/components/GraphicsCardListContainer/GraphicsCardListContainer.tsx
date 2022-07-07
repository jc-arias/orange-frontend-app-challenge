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
  const [page, setPage] = useState(0)

  const fetchData = (filter: String, reset: boolean) => {
    setSpinner(true)
    const subscription$ = GraphicsCardsService.get(filter, page)
    subscription$.subscribe({
      next: (result: any) => {
        setData(filter.length || reset ? result : data.concat(result))
      },
      complete: () => setSpinner(false)
    })
  }

  useEffect(() => {
    fetchData('', false)
  }, [])

  useEffect(() => {
    if (!filter.length) {
      setData([])
      fetchData('', true)
    } else {
      fetchData(filter, false)
    }
  }, [filter])

  const onScroll = (event: any) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target
    if (scrollTop + clientHeight === scrollHeight && !filter.length) {
      setPage(page + 1)
      fetchData('', false)
    }
  }

  return (
    <>
      <Spinner display={ spinner } />
      <SearchBar filter={ (filter: any) => setFilter(filter) } />
      <div onScroll={onScroll} className={'list-container center'}>
        {data?.length && data.map((item) => {
          return <GraphicsCardListItem item={item} />
        })}
      </div>
    </>
  )
}

export default GraphicsCardListContainer
