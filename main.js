const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    }
},
addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
        name : this.dishName,
        price: this.dishPrice
    };
    this.courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName) {
    let dishes = this.courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
},
generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and it costs ${totalPrice.name}`; 
};

menu.addDishToCourse(appetizer, chips, 4.50);
menu.addDishToCourse(appetizer, guac, 5);
menu.addDishToCourse(appetizer, flatbread, 8);
menu.addDishToCourse(main, steak, 15);
menu.addDishToCourse(main, pasta, 15);
menu.addDishToCourse(main, burrito, 12);
menu.addDishToCourse(dessert, candy, 3);
menu.addDishToCourse(dessert, shake, 5);
menu.addDishToCourse(dessert, latte,5);

menu.generateRandomMeal(meal);
console.log(meal);
