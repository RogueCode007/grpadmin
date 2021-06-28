import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
// const Order = () => import('@/views/orders/Order')
// const OrderDetails = () => import('@/views/orders/OrderDetails')
// const Servicemen = () => import('@/views/servicemen/Servicemen')
// const SingleServiceman = () => import('@/views/servicemen/SingleServiceman')
const Agents = () => import('@/views/agents/Agents')
const SingleAgent = () => import('@/views/agents/SingleAgent')
const Devices = () => import('@/views/devices/Devices')
const ManageWallet = () => import('@/views/wallet/ManageWallet')
const Policies = () => import('@/views/policies/Policies')
const BuyHealth = () => import('@/views/policies/BuyHealth')
const Login = () => import('@/views/pages/Login')


Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'policies',
          name: 'Policies',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              name: 'Policies',
              path: '',
              component: Policies
            },
            {
              name: 'Health',
              path: '/policies/health/buy',
              component: BuyHealth
            }
          ]
        },
        
        {
          path: 'agents',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              name: 'Agents',
              path: '',
              component: Agents
            },
            {
              name: 'agent',
              path: '/agents/:id',
              component: SingleAgent
            }
          ]
        },
        {
          path: 'wallet',
          name: 'Wallet',
          component: {render (c) { return c('router-view') }
          },
          children: [
            {
              name: 'managewallet',
              path: '',
              component: ManageWallet
            },
          ]
        },
        {
          path: 'devices',
          name: 'Devices',
          component: Devices
        },
      ]
    },
    {
      path: '/app/login',
      name: 'Login',
      component: Login
    }
  ]
})
