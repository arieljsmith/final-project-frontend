function NavBar() {
    return (
        <nav className="bg-rose-600 shadow">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <a className="text-2xl font-bold text-white lg:text-3xl hover:text-gray-200" href="#">Restaurant Recommendations</a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button type="button" className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className="hidden -mx-4 lg:flex lg:items-center">
                        <a href="#" className="block mx-4 mt-2 text-sm text-white capitalize lg:mt-0 hover:text-gray-200">My Profile</a>
                        <a href="#" className="block mx-4 mt-2 text-sm text-white capitalize lg:mt-0 hover:text-gray-200">Add Recommendation</a>
                        <a href="#" className="block mx-4 mt-2 text-sm text-white capitalize lg:mt-0 hover:text-gray-200">Add Friend</a>
                        <a href="#" className="block mx-4 mt-2 text-sm text-white capitalize lg:mt-0 hover:text-gray-200">Sign Out</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
    
    export default NavBar;