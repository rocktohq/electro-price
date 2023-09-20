import { NavLink, useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
export default function Products() {

  const { products } = useLoaderData();

  return (
    <>
      <nav className="rounded-md p-5 shadow-md bg-blue-100 mb-10 text-xl">
        <span className="hover:text-primary"><NavLink to="/">Home</NavLink></span> /
        <span className="hover:text-primary"><NavLink to="/products"> Products</NavLink></span>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {
          products.map(product => <Product key={product.id} product={product}></Product>)
        }
      </div>
    </>
  )
}
