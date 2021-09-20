import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { IAppRouteProps, routers } from './appRouter'
import AppNavigation from './components/app-navigation/appNavigation'
import { ROUTES } from '@constants'

console.log('APP.tsx')
function App() {
  function flatten(input: IAppRouteProps): IAppRouteProps[] {
    const { children, ...rest } = input

    if (children && children.length) {
      return [rest, ...children.flatMap(flatten)]
    } else {
      return [rest]
    }
  }

  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex'
        }}
      >
        <AppNavigation />
        <main>
          <Suspense fallback={<h1>Loading Apps...</h1>}>
            <Switch>
              {routers.flatMap(flatten).map((value, index) => {
                const { children, ...rest } = value
                return <Route key={index} {...rest} />
              })}
              <Redirect to={ROUTES.HOME()} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
