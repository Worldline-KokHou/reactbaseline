const ENVIRONMENT = Object.freeze({
  baseUrl: () => process.env.REACT_APP_BASE_URL,
  isProduction: () => process.env.NODE_ENV === 'production'
})

if (!ENVIRONMENT.isProduction()) {
  console.log('Environment Parameters: ', process.env)
}

export default ENVIRONMENT
