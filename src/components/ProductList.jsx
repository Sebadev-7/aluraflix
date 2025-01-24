import { useEffect } from "react"
import { useState } from "react"
import { CardProduct } from "./CardProduct"


export const ProductList = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
     
      const fetchProducts = async () => {

        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
        } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
    fetchProducts();

    }, [])
    


  return (
        <div className="grid grid-cols-2 gap-4 p-4">
          {
            products.map((product) =>(
              <CardProduct 
              key={product.id} 
              image={product.image} 
              title={product.title} 
              price={product.price}
              />
            ))
          }
        </div>
  )
}
