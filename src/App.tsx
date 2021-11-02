import React, { useEffect } from 'react'
import Post from './components/Post'
import { useAppdispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './redux/actions/userActions'

const App: React.FC = () => {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)
  const dispatch = useAppdispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  console.log(users);

  return (
    <div>
      {/* {isLoading && <h1> Loading... </h1>}
      {error && <p> {error} </p>}
      {JSON.stringify(users, null, 10)} */}
      <Post/>
    </div>
  )
}

export default App
