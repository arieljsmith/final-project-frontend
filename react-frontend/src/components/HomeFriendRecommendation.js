function HomeFriendRecommendation() {
    return (
        <div className="max-w-2xl m-2 overflow-hidden bg-white rounded-lg shadow-md">
            <img className="object-cover w-full h-32" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />

            <div className="p-6">
                <div>
                    <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline">Restaurant</a>
                    <p className="mt-2 text-sm text-gray-600">City, ST</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                            <a href="#" className="mx-2 font-semibold text-gray-700">Jone Doe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default HomeFriendRecommendation;