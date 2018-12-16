import Home from '@m/views/Home'
import Todo from '@m/views/Todo'
import Login from '@m/views/Login'
import Error404 from '@m/views/ErrorPages/Error404'
import Error401 from '@m/views/ErrorPages/Error401'

export default [
  { path: '/', exact: true, component: Home },
  { path: '/topic', component: Home },
  { path: '/todo', component: Todo },
  { path: '/login', component: Login },
  { path: '/404', component: Error404 },
  { path: '/401', component: Error401 },
]
