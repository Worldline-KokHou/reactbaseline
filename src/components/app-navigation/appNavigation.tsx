import React from 'react'
import AppNavLink from '../app-nav-link/AppNavLink'
import { ROUTES } from '@constants'

const AppNavigation = () => {
  const navStyle: React.CSSProperties = {
    borderRight: 'solid 1px blue',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }
  const childNavStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1rem'
  }

  return (
    <nav style={navStyle}>
      <h1>App Navigation</h1>

      <AppNavLink to={ROUTES.HOME()} exact>
        DASHBOARD
      </AppNavLink>
      <AppNavLink to={ROUTES.USER()}>USER</AppNavLink>
      <AppNavLink to={ROUTES.ALERT_MANAGEMENT()}>ALERT_MANAGEMENT</AppNavLink>
      <AppNavLink to={ROUTES.CONTENT_MANAGEMENT()}>CONTENT_MANAGEMENT</AppNavLink>
      <div style={childNavStyle}>
        <AppNavLink to={ROUTES.CONTENT_UPLOAD()}>CONTENT_UPLOAD</AppNavLink>
        <AppNavLink to={ROUTES.MANAGE_CREDENTIAL_POLICIES()}>MANAGE_CREDENTIAL_POLICIES</AppNavLink>
        <AppNavLink to={ROUTES.MANAGE_LOCATIONS()}>MANAGE_LOCATIONS</AppNavLink>
        <AppNavLink to={ROUTES.MANAGE_PROMOTIONS()}>MANAGE_PROMOTIONS</AppNavLink>
      </div>
      <AppNavLink to={ROUTES.CUSTOMER_MANAGEMENT()}>CUSTOMER_MANAGEMENT</AppNavLink>
      <AppNavLink to={ROUTES.REPORTS_AND_LOGS()}>REPORTS_AND_LOGS</AppNavLink>
      <AppNavLink to={ROUTES.TASK_LIST()}>TASK_LIST</AppNavLink>
    </nav>
  )
}

export default AppNavigation
