import profileIcon from "../assets/icons8-profile-100.png";
import search from "../assets/icons8-search-100.png";
import heart from "../assets/icons8-heart-100.png";
import cart from "../assets/icons8-shopping-cart-100.png";
import arrow from "../assets/icons8-arrow-down-100.png";


const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-blue-100 bg-white shadow-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-5 px-4">

        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md shadow-blue-600">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 8h14l1 12H4L5 8Z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
          </div>
         
          <span className="text-2xl font-extrabold text-rose-600">
            LAV<span className="text-gray-900">IRS</span>
          </span>
        </a>

        {/* Search Bar */}
        <div className="ml-7 mr-7 flex min-w-0 max-w-3xl flex-1 items-center overflow-visible rounded-full border border-gray-200 bg-gray-50 focus-within:border-blue-500">

          <div className="flex ml-1  min-w-0 flex-1 items-center gap-3 px-4">
            <img src={search} className="h-5 w-5 object-contain"/> 
            

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent py-3 text-sm outline-none "
            />
          </div>

          {/* Categories Dropdown */}
          <div className="group relative shrink-0 border-l border-gray-200 " >

            <button
              type="button"
              className="flex ml-3 items-center gap-4 rounded-r-full px-4 py-4 text-sm font-medium text-gray-700 transition-colors duration-200  hover:text-blue-600"
            >
              All Categories

              <img src={arrow}  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
               
             
            </button>

            {/* Category List */}
            <div className="invisible absolute right-0 top-full z-50 mt-2 w-52 translate-y-2 rounded-xl border border-gray-300 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

              <button type="button" className="w-full rounded-lg  px-4 py-3 text-left text-sm  text-gray-700 transition-colors hover:text-blue-600 hover:bg-blue-50">
                Men
              </button>

              <button type="button" className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600">
                Women
              </button>

              <button type="button" className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600">
                Bags
              </button>

              <button type="button" className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600">
                Wallets
              </button>

              <div className="my-2 border-t border-gray-200"></div>

              <button type="button" className="w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50">
                View All Categories →
              </button>

            </div>
          </div>
        </div>

        {/* Wishlist */}
        <button type="button" aria-label="Wishlist" className="group relative ml-2 mr-2 gap-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-500">
          <img src={ heart} className="h-5 w-5 object-contain transition-transform duration-200 group-hover:scale-110" >
            
          </img>

          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            
          </span>
        </button>

        {/* Cart */}
        <button type="button" aria-label="Shopping cart" className="group gap-3 relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
          <img src={cart} className="h-5 w-5 transition-transform duration-200  object-contain group-hover:scale-110" >
          </img>

          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
            
          </span>
        </button>

        {/* Account Dropdown */}
        <div className="group relative ml-2 shrink-0">

          <button
            type="button"
            aria-label="My Account"
            className="flex h-11 w-11  items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:border-gray-600 hover:bg-green-100 "
          >
            <img src={profileIcon} className="h-5 w-5  transition-transform duration-200  object-contain group-hover:scale-110" >
             
            </img>
          </button>

          {/* Account List */}
          <div className="invisible absolute right-0 top-full z-50 mt-3 w-56 translate-y-2 rounded-xl border border-blue-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

            <div className="border-b border-gray-100 px-4 py-3">
              <p className="text-sm font-semibold text-gray-900">
                My Account
              </p>
              
            </div>

            <button type="button" className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600">
              My Profile
            </button>

            <button type="button" className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600">
              My Orders
            </button>

            <button type="button" className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600">
              Wishlist
            </button>

            <div className="my-1 border-t border-gray-100"></div>

            <button type="button" className="w-full rounded-lg px-4 py-3 text-left text-sm text-red-800 transition-colors hover:bg-red-200">
              Logout
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
