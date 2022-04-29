import HomeFriendRecommendation from './HomeFriendRecommendation';

function SpecificUserRecs(props) {

    function GetRelevantUserRestaurants(user, restaurantList) {
        let userRestaurantDict = [];
        for (var restaurant of restaurantList) {
            if (restaurant.creator == user.name){
                userRestaurantDict.push(restaurant);
            }
        }
        return userRestaurantDict;
      }
      
    let userRestaurants = GetRelevantUserRestaurants(props.user, props.restaurants);
    console.log(userRestaurants);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 mr-4 ml-4 mb-14 lg:mr-24 lg:ml-24">
            {userRestaurants?.map((restaurant) => (
                <HomeFriendRecommendation
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    city={restaurant.city}
                    creator={restaurant.creator}
                    creator_id={restaurant.creator_id}
                />
            ))}
        </div>
    );
}

export default SpecificUserRecs;