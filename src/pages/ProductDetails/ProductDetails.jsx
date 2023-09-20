import { useLoaderData, NavLink, useLocation } from "react-router-dom";

export default function ProductDetails() {

  const { title, thumbnail, images, rating, price, brand, category, stock } = useLoaderData();
  const location = useLocation();

  return (
    <>
      <nav className="rounded-md p-5 shadow-md bg-blue-100 mb-10 text-xl">
        <span className="hover:text-primary"><NavLink to="/">Home</NavLink></span> /
        <span className="hover:text-primary"><NavLink to="/products"> Products</NavLink></span> /
        <span className="hover:text-primary"><NavLink to={location.pathname}> {title}</NavLink></span>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <figure className="w-full shadow-md p-5 rounded-md">
          <h2 className="text-2xl font-bold">Product Pictures:</h2>
          {
            images.length !== 0 ?
              images.slice(0, 3).map((image, idx) => <img className="h-48 w-full my-5 rounded-md" key={idx} src={image} alt={title} />)
              :
              <img className="h-48 w-full my-5 rounded" src={thumbnail} alt={title} />
          }
        </figure>
        <div className="shadow-md p-5 rounded-md">
          <h2 className="text-2xl font-bold">Product Information:</h2>
          <figure>
            <img className="h-full rounded-md w-full" src={thumbnail} alt={title} />
          </figure>
          <div className="my-5">
            <h2 className="text-xl font-bold">{title}</h2>
            <hr className="my-5" />
            <div className="flex justify-between items-center">
              <p className="font-medium">Price: $<span className='text-xl'>{price}</span></p>
              <p className="font-medium text-end">Rating: <span className='bg-blue-300 rounded px-1 text-white'>{rating}</span></p>
            </div>
            <p className="font-medium">Brand: <span>{brand}</span></p>
            <p className="font-medium">Stock: <span>{stock > 0 ? stock : "Out of stock"}</span></p>
            <p className="font-medium">Category: <span className="text-blue-400">{category.toUpperCase()}</span></p>
          </div>
          <button className="btn btn-primary w-full text-white">Add to Cart</button>
        </div>
      </div>
    </>
  )
}
