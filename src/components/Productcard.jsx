
const ProductCard = ({ products }) => {
  return (
    <>
      
    <div className="w-60 m-auto mt-7   rounded-2xl bg-white p-2 shadow-xl border border-gray-300">
      
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg bg-gray-200 ">
        
        
        {/* Discount Badge */}
        <span className="absolute left-2 top-2 rounded-full bg-orange-600 px-1 py-0.5 text-xs  font-bold text-white">
          {products.offer?.badge}%
        </span>

        {/* Wishlist */}
        <button className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm">
          ♡
        </button>

        <img
          src={`/${products.image}`}
          alt={products.name}
          className="h-47 w-full object-cover"
        />
      </div>

      {/* Express Delivery */}
      <div className="mt-2">
        <span className="inline-flex items-center rounded bg-teal-200 px-2 py-0.5 text-[9px] font-bold text-teal-900">
         ⚡{products.delivery}
        </span>
      </div>

      {/* Product Info */}
      <div className="mt-1">
        <h3 className=" text-[14px] font-bold text-gray-800">
          {products.name}
        </h3>

        <p className="truncate text-[11px] text-gray-500">
          {products.description}
        </p>
      </div>

      {/* Rating */}
      <div className="mt-1 flex items-center gap-1">
        <span className="rounded bg-orange-100 px-1.5 py-0.5 text-[9px] font-bold text-orange-600">
           {products.rating}★
        </span>

        <span className="text-[10px] text-gray-500">
           ({products.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-[17px] font-extrabold text-blue-700">
           ₹{products.price}
        </span>

        <span className="text-[10px] text-gray-500 line-through">
           ₹{products.originalPrice}
        </span>

        <span className="text-[9px] font-bold text-orange-600">
        {products.offer?.discount}%
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-2 flex gap-1">
        <button className="flex-1 rounded-md bg-blue-100 py-1.5 text-[10px] font-semibold text-gray-600  hover:bg-blue-100">
          🛒Add
        </button>

        <button className="flex-1 rounded-md bg-blue-700 py-1.5 text-[10px] font-bold text-white
         hover:bg-blue-800">
         Buy Now
        </button>
      </div>

    </div> 
    </>
  )
}

export default ProductCard;