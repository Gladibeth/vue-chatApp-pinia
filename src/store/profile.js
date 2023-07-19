import {defineStore} from 'pinia'

export default defineStore('profile',{
  state:()=>({
    id: 1,
    username: '',
    status: null,
    avatar: '/avatars/avatar.jpg'
  })
})