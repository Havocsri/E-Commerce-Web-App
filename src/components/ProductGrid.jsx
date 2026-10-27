 import { useEffect, useState } from "react"
import ProductCard from "./Productcard"



const ProductGrid = () => {
  
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => { return res.json() })
       
      .then((data) => setProducts(data))
         
      .catch((error) => console.log(error));
}, [])
    

  return (
      <>
      <div className="grid grid-cols-4" > 
        {products.map((item) => (
          
          <ProductCard key={item.id} products={item}  />
        
        ))}
      </div>
       </>
  )
}

export default ProductGrid
