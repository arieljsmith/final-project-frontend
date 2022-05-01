import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function HomeFriendRecommendation(props) {

    let restaurantImageUrl;

    if (!props.image) {
        restaurantImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAMFBMVEUUFBQVFRUlJCQgHx8aGRksKiocGxsREREjIiIoJiYtKysYGBgbGxspKCgwLi4sKyvyzVj+AAABiElEQVR4nO3W246bMBQFUF/wDfDk//+2Jppp1L60D1XSUdZ6QGAfS3jrGBECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/rbX255onvMd30PeybzX9OniMr3juM3E80vq99K2k2kLZUqtpCy33uOLL7Rg9r4xSXsPtSHmuS21H7SGcKdSej1Ud+npc42eIa8mr9/EU6Qzn3FKYW4k9nXu71Z6OjzP1ttfU18ytjhHKOWq+5Sus+FHLXIUp5xH2OmYrZ3+PfkulzHimlsdtK6s/4p7SbR3DOFdTtbLaqrc4akljhdPuYY227sYR07hqwryWlLdorXW82voQ5dTG6q2WYwnxuId1zOuSVh7b3EY4Yl6N9Qgr7jGUVXjMcFtLXr2Pp0g1XF/tbZ/7ee5ztF72vF1htTn3bfXcnGXc77/CmldYM441cU3O+5JX7+PJ2s/L5+PnfYutPZ4ehdf4kVfbvcUJ/BfS+uK9+h2+j7/4pQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeLkfFQsJq3lFqIMAAAAASUVORK5CYII=";
    } else {
        restaurantImageUrl = props.image;
    }

    // //====================
    // // USER IMAGE STUFF
    // //====================
    const [isUsersLoading, setIsUsersLoading] = useState(true);
    const [loadedUsers, setLoadedUsers] = useState([]);

    // const location = useLocation()
  
    // Keeps this fetch request from looping infinitely
    useEffect(() => {
        fetch('https://undefined-rest-api.herokuapp.com/api/users/?format=json'
        ).then(response => {
            return response.json();
        }).then(data => {
            setIsUsersLoading(false);
            setLoadedUsers(data);
        });
    }, []);

    // ===================
    // STORE IN LOCALSTORAGE
    // ===================

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(loadedUsers))
    }, [loadedUsers]);

    // ===================
    // END STORE IN LOCALSTORAGE
    // ===================

    // ===================
    // GET SPECIFIC USER
    // ===================

    let creator_id = props.creator_id
  
    function GetSpecificUser(userList) {
      for (var user of userList) {
          if (user.id == creator_id) {
              return user
          }
      }
    }; 
  
    let locallySavedUsers = localStorage.getItem("users");
    let parsedLocSavedUsers = JSON.parse(locallySavedUsers);

    let creator = GetSpecificUser(parsedLocSavedUsers);

    console.log(creator)

    // ===================
    // END GET SPECIFIC USER
    // ===================

    // ===================

    let userImageUrl;
    // console.log (userImageUrl);

    if (!creator.image) {
        userImageUrl = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
    } else {
        userImageUrl = creator.image;
    }

    console.log(userImageUrl);
  
    // Displays a temporary loading screen while fetch request is running
    if (isUsersLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    //====================
    // END USER IMAGE STUFF
    //====================

    return (
        <div className="relative max-w-2xl m-2 overflow-hidden bg-white rounded-lg shadow-md recco-roboto-text">
            {/* <button className="absolute right-0 w-auto px-3.5 py-2 mt-2 mr-2 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-white text-amber-500 rounded-full lg:w-auto hover:bg-amber-500 hover:text-white focus:outline-none focus:bg-amber-500 focus:text-white">*</button> */}
            <img className="object-cover w-full h-32" src={restaurantImageUrl} alt="Article" />

            <div className="p-6">
                <div>
                    <p className="block mt-2 text-2xl font-semibold text-gray-800">{props.name}</p>
                    <a href={'/location?city=' + props.city} className="text-sm text-gray-600 hover:underline">{props.city}</a>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={userImageUrl} alt="Avatar" />
                            <div>
                                <p className="mx-3 text-[10px] text-gray-400">Recommended by</p>
                                <Link className="mx-3"
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