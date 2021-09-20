import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

const AppNavLink = (props: NavLinkProps) => {
  const appStyle: React.CSSProperties = {
    marginLeft: '.5rem',
    marginRight: '.5rem',
    color: 'black',
    textDecoration: 'unset',
    padding: '.25rem 0'
  }
  const appActiveStyle: React.CSSProperties = {
    fontWeight: 'bolder',
    color: 'red'
  }

  const { style, activeStyle, ...rest } = props
  return (
    <NavLink style={style || appStyle} activeStyle={activeStyle || appActiveStyle} {...rest}>
      {props.children}
    </NavLink>
  )
}

export default AppNavLink
