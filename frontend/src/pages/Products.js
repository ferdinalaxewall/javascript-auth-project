import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/AuthSlice'
import ProductList from '../components/ProductList'
import Layout from './Layout'

const Products = () => {
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
        <ProductList />
    </Layout>
  )
}

export default Products