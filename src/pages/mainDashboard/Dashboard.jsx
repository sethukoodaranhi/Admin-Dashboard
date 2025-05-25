import React from 'react'
import CardTiles from '../../components/Common/CardTiles'
import Tiles from '../../components/Dashboard/Tiles'
import Graph from '../../components/Dashboard/Graph'
import { Icon } from '@iconify/react'
function Dashboard() {

  const user = localStorage.getItem('name')
  return (
    <>
      <Tiles />
      <Graph />
    </>
  )
}

export default Dashboard