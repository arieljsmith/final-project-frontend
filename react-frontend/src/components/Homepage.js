import HomeRecommendation from './HomeRecommendation';

function Homepage() {
    return (
        <div>
            {/* BEGIN HERO SECTION */}
            <header>
                <nav className="bg-white shadow dark:bg-gray-800">
                    <div className="container px-6 py-4 mx-auto">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="flex items-center justify-between">
                                <div className="text-xl font-semibold text-gray-700">
                                    <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Restaurant Recommendations</a>
                                </div>

                                {/* Mobile menu button */}
                                <div className="flex lg:hidden">
                                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                            <div className="hidden -mx-4 lg:flex lg:items-center">
                                <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">My Profile</a>
                                <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Add Recommendation</a>
                                <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Add Friend</a>
                                <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Sign Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <div className="w-full bg-center bg-cover h-[32rem]" style={{backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"}}>
                    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Restaurant Recommendations</h1>
                            <p className="mt-3 text-gray-100 m-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum. Velit dignissim sodales ut eu sem.</p>
                            {/* SEARCH BAR START */}
                            <div className="pt-2 relative mx-auto text-gray-600">
                                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-4 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                            </div>
                            {/* SEARCH BAR END */}
                            {/* ADD REC BUTTON START */}
                            <button className="w-auto px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">+</button>
                            {/* ADD REC BUTTON END */}
                        </div>
                    </div>
                </div>
            </header>
            {/* END HERO SECTION */}


            <div className="grid grid-cols-2 md:grid-cols-3 m-4">
                <HomeRecommendation />
                <HomeRecommendation />
                <HomeRecommendation />
                <HomeRecommendation />
                <HomeRecommendation />
                <HomeRecommendation />
            </div>
        </div>

    );
}

export default Homepage;