

const NavBar = () => {
    return (
      <>
          <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
       <div className="mx-auto flex h-16 max-w-7xl items-center gap-5 px-4">

        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white">
            🛍
          </div>

          <span className="text-2xl font-extrabold tracking-tight text-blue-900">
            LAVIRS
          </span>
        </a>

        {/* Search */}
        <div className="ml-3 flex flex-1 max-w-3xl items-center overflow-hidden rounded-full border border-gray-200 bg-gray-50">

          <div className="flex flex-1 items-center gap-2 px-4">
            <span className="text-xl text-gray-500">⌕</span>

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center border-l border-gray-200 px-4">
            <select className="cursor-pointer bg-transparent py-2.5 pr-1 text-sm font-medium text-gray-700 outline-none">
              <option>All Categories</option>
              <option>Men</option>
              <option>Women</option>
              <option>Bags</option>
              <option>Wallets</option>
            </select>
          </div>

        </div>

        {/* Actions */}
        <div className="ml-9 flex shrink items-center justify-center gap-9">

          {/* Wishlist */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-700 hover:bg-gray-50 hover:border-orange-400 hover:text-orange-700 ">
            ♡
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              3
            </span>
          </button>

          {/* Cart */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-lg text-gray-700 hover:bg-gray-50">
            🛒
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              2
            </span>
          </button>

          {/* Account */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-700 hover:bg-gray-50">
            ♙
          </button>

        </div>

      </div>
    </nav>
 

     </>
  )
}

export default NavBar
