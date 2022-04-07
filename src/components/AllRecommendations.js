import HomeFriendRecommendation from './HomeFriendRecommendation';

function AllRecommendations(props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 mr-4 ml-4 mb-14">
            {props.restaurants.map((restaurant) => (
                <HomeFriendRecommendation
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    city={restaurant.city}
                />
            ))}
        </div>
    );
}

export default AllRecommendations;