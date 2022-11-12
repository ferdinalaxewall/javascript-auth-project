import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormAddProduct = () => {
    
    const [name, setName] = useState(""); 
    const [price, setPrice] = useState(""); 
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/products", {
                name : name,
                price : price
            });
            navigate("/products")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data)
            }
        }
    }

  return (
    <div>
        <h1 className="title">Products </h1>
        <h2 className="subtitle">Add New Product</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={saveProduct}>
                        <p className="has-text-centered">{msg}</p>

                        <div className="field">
                            <label className="label">Product Name</label>
                            <div className="control">
                                <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g. Product 1' />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Price</label>
                            <div className="control">
                                <input type="number" className="input" value={price} onChange={(e) => setPrice(e.target.value)}  placeholder='e.g. 400' />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <div className="control">
                                <button type='submit' className="button is-success">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddProduct