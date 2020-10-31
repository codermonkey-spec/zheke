
import Home from '@/pages/home'
import Login from '@/pages/login'

import Leaf from '@/pages/leaf'
import Add from '@/pages/add'
import Community from '@/pages/community'
import My from '@/pages/my'

import HomeArticle from '@/pages/home/c-page/article'

const routes = [
  {
    path:'/',
    component:Home,
    exact:true
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/leaf',
    component:Leaf
  },
  {
    path:'/add',
    component:Add
  },
  {
    path:'/community',
    component:Community
  },
  {
    path:'/my',
    component:My
  },
  {
    path:'/article',
    component:HomeArticle
  }
  
]


export default routes

