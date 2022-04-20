import { Link } from "react-router-dom";

function HomeFriendRecommendation(props) {
    return (
        <div className="relative max-w-2xl m-2 overflow-hidden bg-white rounded-lg shadow-md">
            <button className="absolute right-0 w-auto px-3.5 py-2 mt-2 mr-2 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-white text-amber-500 rounded-full lg:w-auto hover:bg-amber-500 hover:text-white focus:outline-none focus:bg-amber-500 focus:text-white">*</button>
            <img className="object-cover w-full h-32" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />

            <div className="p-6">
                <div>
                    <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline">{props.name}</a>
                    <p className="text-sm text-gray-600">{props.city}</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                            <div>
                                <p className="mx-3 text-[10px] text-gray-400">Recommended by</p>
                                <Link 
                                    to={{
                                    pathname: `/user/${props.creator_id}`
                                    }}
                                >
                                    {props.creator}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div>
        //     <h3>{props.name}</h3>
        //     <p>{props.city}</p>
        // </div>
    );
}
    
export default HomeFriendRecommendation;