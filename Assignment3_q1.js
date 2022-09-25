// Question 1 of Assignment 3 (Javascript)

class RestaurantManager{
    restaurantList = [
        {
            id: 1,
            Name: "KFC",
            address: "Shastri Nagar",
            city: "Delhi"
        },
        {
            id: 2,
            Name: "Domino",
            address: "Laxmi colony",
            city: "Benglore"
        },
        {
            id: 3,
            Name: "Sharma Restaurant",
            address: "Ghanta ghar",
            city: "Kolkata"
        }
    ]

    printAllRestaurantNames() {
        return this.restaurantList.map(restaurant => restaurant.Name)
    }
    
    filterRestaurantByCity(cityName) {
        return this.restaurantList.filter(ct => ct.city == cityName)
        
    }
}

const restaurantObject = new RestaurantManager();
list = restaurantObject.printAllRestaurantNames();
console.log(list);

const resttObject = new RestaurantManager();
var list2 = resttObject.filterRestaurantByCity("Kolkata");
console.log(list2);