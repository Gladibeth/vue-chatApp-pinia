import useProfileStore from '@/store/profile.js'

const login = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: 'Gladibeth'
      })
    }, 2500)
  })
}

export const main = async () => {
  const profileStore = useProfileStore()
  const user = await login()
  console.log(user)
  profileStore.username = user.username
  profileStore.status = 'active'
}
