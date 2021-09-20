import React from 'react'
import CounterWidget from '../../components/counter/counter.widget'

interface ITest {
  name: String
  children?: ITest[]
}

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CounterWidget />
    </div>
  )
}

export default DashboardPage
