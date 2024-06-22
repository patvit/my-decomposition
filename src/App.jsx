//import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Widgets from './components/Widgets/Widgets'
import { data } from './data/dataBrowser'

function App() {

  return (
    <>
        <Header data={ data } />
        <Main data={ data } />
        <Widgets data={ data } /> 
    </>
  )
}

export default App