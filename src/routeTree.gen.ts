/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const PastLazyImport = createFileRoute('/past')()
const OrderLazyImport = createFileRoute('/order')()
const ContactLazyImport = createFileRoute('/contact')()

// Create/Update Routes

const PastLazyRoute = PastLazyImport.update({
  path: '/past',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/past.lazy').then((d) => d.Route))

const OrderLazyRoute = OrderLazyImport.update({
  path: '/order',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/order.lazy').then((d) => d.Route))

const ContactLazyRoute = ContactLazyImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/order': {
      id: '/order'
      path: '/order'
      fullPath: '/order'
      preLoaderRoute: typeof OrderLazyImport
      parentRoute: typeof rootRoute
    }
    '/past': {
      id: '/past'
      path: '/past'
      fullPath: '/past'
      preLoaderRoute: typeof PastLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/contact': typeof ContactLazyRoute
  '/order': typeof OrderLazyRoute
  '/past': typeof PastLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/contact': typeof ContactLazyRoute
  '/order': typeof OrderLazyRoute
  '/past': typeof PastLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/contact': typeof ContactLazyRoute
  '/order': typeof OrderLazyRoute
  '/past': typeof PastLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/contact' | '/order' | '/past'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/contact' | '/order' | '/past'
  id: '__root__' | '/' | '/contact' | '/order' | '/past'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ContactLazyRoute: typeof ContactLazyRoute
  OrderLazyRoute: typeof OrderLazyRoute
  PastLazyRoute: typeof PastLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ContactLazyRoute: ContactLazyRoute,
  OrderLazyRoute: OrderLazyRoute,
  PastLazyRoute: PastLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/contact",
        "/order",
        "/past"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/contact": {
      "filePath": "contact.lazy.jsx"
    },
    "/order": {
      "filePath": "order.lazy.jsx"
    },
    "/past": {
      "filePath": "past.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
