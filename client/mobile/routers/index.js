import Pages from '@m/views/Pages'
import Login from '@m/views/Login'
import Error404 from '@m/views/ErrorPages/Error404'
import Error401 from '@m/views/ErrorPages/Error401'

import Home from '@m/views/Pages/Home'
import Topic from '@m/views/Pages/Topic'
import Todo from '@m/views/Pages/Todo'

export const independentRoutes = [
  { path: '/', exact: true, component: Pages },
  { path: '/page', component: Pages },
  { path: '/login', component: Login },
  { path: '/404', component: Error404 },
  { path: '/401', component: Error401 },
]

export const mainRoutes = [
  { path: '/', exact: true, component: Home },
  { path: '/page/home', component: Home },
  { path: '/page/topic', component: Topic },
  { path: '/page/todo', component: Todo },
]
