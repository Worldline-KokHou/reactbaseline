import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { IpAddressService } from '@services'
import CounterWidget from './views/counter/counter.widget'

function App () {
  console.log('App')

  const [ip, setIp] = useState('')

  useEffect(() => {
    IpAddressService.getIp()
      .then((o) => o.data.ip)
      .then(setIp)
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <CounterWidget/>
        <div>Your IP: {ip || 'Loading...'}</div>
      </header>
    </div>
  )
}

export default App
