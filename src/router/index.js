import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import Favorites from '@/pages/Favorites'
import PhotosPage from '@/pages/PhotosPage'

const routes = [
  { path: '/', component: MainPage},
  {path: '/favorites', component: Favorites},
  {path: '/photos/:id', component: PhotosPage}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
