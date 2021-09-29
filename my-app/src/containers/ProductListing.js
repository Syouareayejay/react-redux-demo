import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/action/productActions';
function ProductListing(){
    const products = useSelector(state=> state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch(err => {console.log('error:', err)});
        // dispatch setproduct action with data to reducer
        dispatch(setProducts(response.data)); 
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    return (<div className = 'ui four column equal height grid'>
        <ProductComponent />
        </div>
    );
}
export default ProductListing