import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from './Layout'

const NotFound = () => {
    const [counter, setCounter] = useState(3);
    const navigate = useNavigate()

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        counter === 0 && navigate("/dashboard");
    }, [counter, navigate]);

  return (
    <Layout>
      <h1 className="title">Page Not Found</h1>
      <h2 className="subtitle">
        You will be redirected to Dashboard Page in {counter} 
      </h2>
    </Layout>
  )
}

export default NotFound