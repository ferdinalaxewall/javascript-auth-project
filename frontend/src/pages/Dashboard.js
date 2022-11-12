import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Welcome from '../components/Welcome'
import { getMe } from '../features/AuthSlice'
import Layout from './Layout'

const Dashboard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  useEffect(() => {
    if(isError){
      navigate("/")
    }
  }, [isError, navigate])

  return (
    <Layout>
        <Welcome />
    </Layout>
  )
}

export default Dashboard