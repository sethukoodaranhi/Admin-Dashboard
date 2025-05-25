
import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { usersList } from '../../service/apiService'
import { useDispatch } from 'react-redux'
import { SetUserLists } from '../../redux/reducers/slices/usersSlice'
import UsersList from '../../components/UsersList/UsersList'
function Users() {
  const dispatch = useDispatch()
  const { data, isLoading } = useQuery({
    queryKey: ['users-list'],
    queryFn: usersList,
  })

  useEffect(() => {
    console.log("====users====", data)
    dispatch(SetUserLists(data?.data));
  }, [data])

  return (
    <>
      <UsersList
        isLoading={isLoading}
        data={data?.data} />
    </>
  )
}

export default Users