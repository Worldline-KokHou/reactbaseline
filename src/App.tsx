import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AppButton } from '@components'
import { IpAddressService } from '@services'
import { useAppDispatch, useAppSelector } from './hooks/redux.hook'
import { counterActions } from './store/slices/counter.slice'

function App () {
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const [ip, setIp] = useState('')

  useEffect(() => {
    IpAddressService.getIp()
      .then((o) => o.data.ip)
      .then(setIp)
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <div>Counter: {counter}</div>
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
        <AppButton
          label='Plus One'
          onClick={() => {
            dispatch(counterActions.increment())
          }}
        />
        <AppButton
          label='Minus One'
          onClick={() => {
            dispatch(counterActions.decrement())
          }}
        />
        <AppButton
          label='Double'
          onClick={() => {
            dispatch(counterActions.incrementByAmount(counter))
          }}
        />
        <AppButton
          label='reset'
          onClick={() => {
            dispatch(counterActions.reset())
          }}
        />
        <div>Your IP: {ip || 'Loading...'}</div>
      </header>
    </div>
  )
}

export default App
