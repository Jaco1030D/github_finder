import React, { useState } from 'react'
import Search from '../Components/Search'
import { UserProps } from '../Types/user'
import User from '../Components/User'
import Erros from '../Components/Erros'
const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)
  const loadUser = async (userName: string) =>{
    setUser(null)
    setError(false)
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()
    if (res.status === 404) {
      setError(true)
      return
    }
    const {avatar_url, login, location, followers, following } = data

    const userData: UserProps ={
      avatar_url,
      login,
      location,
      followers,
      following,
    }
    setUser(userData)
  }
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user}/>}
      {error && <Erros/>}
    </div>
  )
}

export default Home