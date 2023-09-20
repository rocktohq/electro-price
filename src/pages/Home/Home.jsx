import { NavLink, useLoaderData } from "react-router-dom"
import Product from "../Product/Product";

export default function Home() {

  const { products } = useLoaderData();

  return (
    <main className="">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {
            products.slice(0, 8).map(product => <Product key={product.id} product={product}></Product>)
          }
        </div>
        <div className="text-center mt-10">
          <NavLink to="/products"><button className="btn btn-primary text-white rounded">📲 See All Products</button></NavLink>
        </div>
      </section>
    </main>
  )
}
