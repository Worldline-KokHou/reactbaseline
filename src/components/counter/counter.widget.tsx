import React, { memo } from 'react'
import { AppButton } from '@components'
import { counterActions } from '../../store/slices/counter.slice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'

console.log('CounterWidget.tsx')

const CounterWidget = () => {
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div style={{ border: 'red solid 1px' }}>
      <div>Counter: {counter}</div>
      <AppButton
        label="Plus One"
        onClick={() => {
          dispatch(counterActions.increment())
        }}
      />
      <AppButton
        label="Minus One"
        onClick={() => {
          dispatch(counterActions.decrement())
        }}
      />
      <AppButton
        label="Double"
        onClick={() => {
          dispatch(counterActions.incrementByAmount(counter))
        }}
      />
      <AppButton
        label="reset"
        onClick={() => {
          dispatch(counterActions.reset())
        }}
      />
    </div>
  )
}

export default memo(CounterWidget)
