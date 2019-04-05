conn = new Mongo();
db = conn.getDB("Recipes");
db.Recipes.remove({});

db.Recipes.insert({
    id: 0,
    name: "chicken",
    description: "Yum yum",
    numberOfServings: 4,
    sourceRecipeURL: "http://google.com",
    imageURL: "https://images.pexels.com/photos/247685/pexels-photo-247685.png",
    totalTime: 25,
    rating: 5
});
db.Recipes.insert({
    id: 1,
    name: "Steak",
    description: "Medium Rare",
    numberOfServings: 2,
    sourceRecipeURL: "http://google.com",
    imageURL: "https://static.dezeen.com/uploads/2013/03/dezeen_3D-printed-food-by-Janne-Kytannen_5.jpg",
    totalTime: 15,
    rating: 4
});
db.Recipes.insert({
    id: 2,
    name: "Pasta",
    description: "Italian",
    numberOfServings: 6,
    sourceRecipeURL: "https://umassdining.com/",
    imageURL: "https://umassdining.com/sites/all/themes/umass_dining_new/images/aboutouraward1.jpg",
    totalTime: 10,
    rating: 1
});