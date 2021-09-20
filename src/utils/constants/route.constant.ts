const ROUTES = {
  HOME: () => '/',
  COUNTER: () => '/counter',
  USER: () => '/user',
  ALERT_MANAGEMENT: () => '/alerts',
  CONTENT_MANAGEMENT: () => '/contents',
  CONTENT_UPLOAD: () => ROUTES.CONTENT_MANAGEMENT() + '/contents-upload',
  MANAGE_CREDENTIAL_POLICIES: () => ROUTES.CONTENT_MANAGEMENT() + '/credential-policies',
  MANAGE_LOCATIONS: () => ROUTES.CONTENT_MANAGEMENT() + '/locations',
  MANAGE_PROMOTIONS: () => ROUTES.CONTENT_MANAGEMENT() + '/promotions',
  CUSTOMER_MANAGEMENT: () => '/customers',
  REPORTS_AND_LOGS: () => '/reports-and-logs',
  TASK_LIST: () => '/tasks',
  USER_DETAIL: (id: string | number) => `/user/${id.toString()}`
}

export { ROUTES }
