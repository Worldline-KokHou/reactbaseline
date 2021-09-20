import React, { lazy } from 'react'
import { RouteProps } from 'react-router-dom'
import { ROUTES } from '@constants'

export interface IAppRouteProps extends RouteProps {
  children?: IAppRouteProps[]
}

export const routers: IAppRouteProps[] = [
  {
    exact: true,
    path: ROUTES.HOME(),
    component: lazy(() => import('@pages/dashboard/dashboard.page'))
  },
  {
    exact: true,
    path: ROUTES.ALERT_MANAGEMENT(),
    component: lazy(() => import('@pages/alert-management/alertManagement.page'))
  },
  {
    exact: true,
    path: ROUTES.CONTENT_MANAGEMENT(),
    component: lazy(() => import('@pages/content-management/contentManagement.page')),
    children: [
      {
        exact: true,
        path: ROUTES.CONTENT_UPLOAD(),
        component: lazy(() => import('@pages/content-management/contentUpload.page'))
      },
      {
        exact: true,
        path: ROUTES.MANAGE_CREDENTIAL_POLICIES(),
        component: lazy(() => import('@pages/content-management/manageCredentialPolicies.page'))
      },
      {
        exact: true,
        path: ROUTES.MANAGE_LOCATIONS(),
        component: lazy(() => import('@pages/content-management/manageLocations.page'))
      },
      {
        exact: true,
        path: ROUTES.MANAGE_PROMOTIONS(),
        component: lazy(() => import('@pages/content-management/managePromotions.page'))
      }
    ]
  },
  {
    exact: true,
    path: ROUTES.CUSTOMER_MANAGEMENT(),
    component: lazy(() => import('@pages/customer-management/customerManagement.page'))
  },
  {
    exact: true,
    path: ROUTES.REPORTS_AND_LOGS(),
    component: lazy(() => import('@pages/reports-and-logs/reportAndLog.page'))
  },
  {
    exact: true,
    path: ROUTES.TASK_LIST(),
    component: lazy(() => import('@pages/task-list/taskList.page'))
  },
  {
    exact: true,
    path: ROUTES.USER(),
    component: lazy(() => import('@pages/user/userListing.page'))
  },
  {
    exact: true,
    path: ROUTES.USER_DETAIL(':id'),
    component: lazy(() => import('@pages/user/userDetail.page'))
  }
]
