const ProductCard = (props) => {
  return (
    <>
    <div className="w-55 m-30  rounded-2xl bg-white p-2 shadow-xl border border-gray-200">
      
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl bg-gray-100">
        
        
        {/* Discount Badge */}
        <span className="absolute left-2 top-2 rounded-full bg-orange-600 px-1 py-0.5 text-xs  font-bold text-white">
          {props.badge}
        </span>

        {/* Wishlist */}
        <button className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm">
          ♡
        </button>

        <img
          src="./images/22_mens_wallet_3.png"
          alt="Over-Ear Wireless Headphones"
          className="h-47 w-full object-cover"
        />
      </div>

      {/* Express Delivery */}
      <div className="mt-2">
        <span className="inline-flex items-center rounded bg-teal-200 px-2 py-0.5 text-[9px] font-bold text-teal-900">
          {props.delivery}
        </span>
      </div>

      {/* Product Info */}
      <div className="mt-1">
        <h3 className=" text-[14px] font-bold text-gray-800">
          {props.info}
        </h3>

        <p className="truncate text-[11px] text-gray-500">
          {props.info1}
        </p>
      </div>

      {/* Rating */}
      <div className="mt-1 flex items-center gap-1">
        <span className="rounded bg-orange-100 px-1.5 py-0.5 text-[9px] font-bold text-orange-600">
          {props.rating}
        </span>

        <span className="text-[9px] text-gray-500">
          {props.reviews}
        </span>
      </div>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-17px font-extrabold text-blue-700">
          {props.price}
        </span>

        <span className="text-[10px] text-gray-500 line-through">
          {props.originalPrice}
        </span>

        <span className="text-[9px] font-bold text-orange-600">
          {props.discount}
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-2 flex gap-1">
        <button className="flex-1 rounded-md bg-blue-50 py-1.5 text-[10px] font-semibold text-gray-700  hover:bg-blue-100">
          {props.add}
        </button>

        <button className="flex-1 rounded-md bg-blue-700 py-1.5 text-[10px] font-bold text-white
         hover:bg-blue-800">
         {props.buynow}
        </button>
      </div>

    </div>
    </>
  )
}

export default ProductCard;