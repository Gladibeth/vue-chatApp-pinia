import {defineStore} from 'pinia'

export default defineStore('profile',{
  state:()=>({
    id: 1,
    username: 'Gladibeth Franco',
    status: 'active',
    avatar: '/avatars/avatar.jpg'
  })
})