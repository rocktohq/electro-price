import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {

  const { id, title, thumbnail, rating, price, brand } = product;
  const navigate = useNavigate();
  const handleSeeDetails = () => {
    navigate(`/products/${id}`)
  }


  return (
    <div className="p-5 shadow-md rounded-md">
      <figure className="h-48 w-full relative">
        <img className="h-full rounded-md w-full" src={thumbnail} alt={title} />
        <span className='bg-blue-500 text-white font-bold px-2 py-1 rounded-md absolute top-1 right-1'>{brand}</span>
      </figure>
      <div className="card-body p-0 mt-5">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="font-medium">Price: $<span className='text-xl'>{price}</span></p>
          <p className="font-medium text-end">Rating: <span className='bg-blue-300 rounded px-1 text-white'>{rating}</span></p>
        </div>
        <button onClick={handleSeeDetails} className='btn btn-primary text-white rounded mt-5'>See Details</button>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object
}