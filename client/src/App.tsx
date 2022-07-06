import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import GraphicsCardDetail from './components/GraphicsCardDetail/GraphicsCardDetail'
import GraphicsCardListContainer from './components/GraphicsCardListContainer/GraphicsCardListContainer'
import store from './store/store'

function App () {
  const getComponent = () => {
    const { route } = store.getState()
    switch (route.current.name) {
      case 'List':
        return GraphicsCardListContainer
      case 'Detail':
        return GraphicsCardDetail
      default:
        return null
    }
  }

  const { route } = store.getState()
  const Component = getComponent() as React.ElementType
  return (
    <Component
      { ...route.current.params }
    />
  )
}

const mapStateToProps = (state: any) => ({
  navState: state.route
})
export default connect(mapStateToProps, null)(App)
