'use strict';

const MongoClient = require("mongodb").MongoClient;

let recipes = [
  {
  recipeName: "Chocolate Chip Cookies",
  yield: "24 servings",
  ingredients: [{
    quantity: "1 cup",
    ingredientName: "butter, softened"
  },
  {
    quantity: "1 cup",
    ingredientName: "white sugar"
  },
  {
    quantity: "1 cup",
    ingredientName: "packed brown sugar"
  },
  {
    quantity: "2",
    ingredientName: "eggs"
  },
  {
    quantity: "2 teaspoons",
    ingredientName: "vanilla extract"
  },
  {
    quantity: "1 teaspoon",
    ingredientName: "baking soda"
  },
  {
    quantity: "2 teaspoons",
    ingredientName: "hot water"
  },
  {
    ingredientName: "salt"
  },
  {
    quantity: "3 cups",
    ingredientName: "all-purpose flour"
  },
  {
    quantity: "2 cups",
    ingredientName: "semisweet chocolate chips"
  },
  {
    quantity: "1 cup",
    ingredientName: "chopped walnuts"
  }
  ],
  directions: [
    "Preheat oven to 350 degrees F (175 degrees C).",
    "Cream together the butter, white sugar, and brown sugar until smooth.",
    "Beat in the eggs one at a time, then stir in the vanilla.",
    "Dissolve baking soda in hot water. Add to batter along with salt.",
    "Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.",
    "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."
  ]
},
  {
  recipeName: "Vanilla Cake",
  yield: "16 servings",
  ingredients: [{
    quantity: "3/4 cup",
    ingredientName: "unsalted butter"
  },
  {
    quantity: "1 1/2 cup",
    ingredientName: "white sugar"
  },
  {
    quantity: "3",
    ingredientName: "large eggs, room temperature"
  },
  {
    quantity: "1 1/2 teaspoons",
    ingredientName: "vanilla extract"
  },
  {
    quantity: "2 1/2 teaspoon",
    ingredientName: "baking powder"
  },
  {
    quantity: "1/2 teaspoon",
    ingredientName: "salt"
  },
  {
    quantity: "2 1/3 cups",
    ingredientName: "cake flour"
  },
  {
    quantity: "3/4 cup",
    ingredientName: "2% milk"
  }
  ],
  directions: [
    "Preheat oven to 350°. Line bottoms of 2 greased 9-in. round baking pans with parchment; grease parchment.",
    "In a large bowl, cream butter and sugar until light and fluffy, 5-7 minutes.",
    "Add eggs, 1 at a time, beating well after each addition.",
    "Beat in vanilla.",
    "In another bowl, mix the flour, baking powder and salt; add to creamed mixture alternately with milk, beating well after each addition.",
    "Pour into prepared pans, dividing batter evenly.",
    "Bake at 350° until a toothpick inserted in center comes out clean, 25-30 minutes.",
    "Cool in pans 10 minutes before removing to wire racks; remove parchment.",
    "Cool completely."
  ]
  },
  {
  recipeName: "Vanilla Buttercream Frosting",
  yield: "16 servings",
  ingredients: [{
    quantity: "1 cup",
    ingredientName: "unsalted butter, softened"
  },
  {
    quantity: "2 1/2 cups",
    ingredientName: "confectioners' sugar"
  },
  {
    quantity: "3 teaspoons",
    ingredientName: "vanilla extract"
  }
  ],
  directions: [
  "For frosting, in a small bowl, beat butter and vanilla until blended.",
  "Gradually beat in confectioners' sugar until smooth.",
  "Spread frosting between layers and over top and sides of cake.",
  "Decorate with sprinkles or nonpareils if desired."
  ]
  },
  {
  recipeName: "Simple Beef Stew",
  yield: "8 servings",
  ingredients: [{
    quantity: "3 tablespoons",
    ingredientName: "vegetable oil"
  },
  {
    quantity: "2 pounds",
    ingredientName: "room temperature beef stew meat"
  },
  {
    quantity: "1/2 cup",
    ingredientName: "all-purpose flour"
  },
  {
    quantity: "1",
    ingredientName: "yellow onion, roughly chopped"
  },
  {
    quantity: "1/2 teaspoon",
    ingredientName: "minced garlic"
  },
  {
    quantity: "1 carton (32 ounce)",
    ingredientName: "low-sodium beef broth"
  },
  {
    quantity: "1 can (15 ounce)",
    ingredientName: "crushed tomatoes"
  },
  {
    quantity: "3",
    ingredientName: "yellow potatoes, cubed"
  },
  {
    quantity: "3 stalks",
    ingredientName: "celery, chopped"
  },
  {
    quantity: "1 cup",
    ingredientName: "baby carrots"
  },
  {
    quantity: "1 teaspoon",
    ingredientName: "Creole seasoning"
  },
  {
    quantity: "1 teaspoon",
    ingredientName: "dried basil"
  }
  ],
  directions: [
    "Heat oil in a large pot over medium-high heat.",
    "Add meat, flour, onion, and garlic; cook and stir until browned, 10 to 15 minutes.",
    "Add broth, tomatoes, potatoes, celery, and carrots, then stir in Creole seasoning and basil.",
    "Bring to a simmer.",
    "Reduce heat to maintain simmer and cook, uncovered, until potatoes are soft, meat is tender, and gravy is thick, about 1 hour."
  ]
  },
  {
    recipeName: "Garlic-Butter Steak",
    yield: "2 servings",
    ingredients: [{
      quantity: "2 tablespoons",
      ingredientName: "butter, softened, divided"
    },
    {
      quantity: "1 teaspoon",
      ingredientName: "minced fresh parsley"
    },
    {
      quantity: "1/2 teaspoon",
      ingredientName: "minced garlic"
    },
    {
      quantity: "1/4 teaspoon",
      ingredientName: "reduced-sodium soy sauce"
    },
    {
      quantity: "3/4 lbs",
      ingredientName: "beef flat iron steak or boneless top sirloin steak"
    },
    {
      quantity: "1/8 teaspoon",
      ingredientName: "salt"
    },
    {
      quantity: "1/8 teaspoon",
      ingredientName: "pepper"
    }

    ],
    directions: [
      "Mix 1 tablespoon butter with parsley, garlic and soy sauce.",
      "Sprinkle steak with salt and pepper.",
      "In a large skillet, heat remaining butter over medium heat.",
      "Add steak; cook until meat reaches desired doneness (for medium-rare, a thermometer should read 135 degrees; medium, 140 degrees; medium-well, 145 degrees), 4-7 minutes per side.",
      "Serve with garlic butter."
    ]
    }
];

//cd C:\Users\alian\Documents\School\CS5220\Lab3\
let dbUsername = "cs5220stu26";
let dbPassword = "7A09YLTuc0Ia";
let dbUrl = `mongodb://${dbUsername}:${dbPassword}@cs3.calstatela.edu:4042/${dbUsername}`;

async function run() {

  let client = await MongoClient.connect(dbUrl, { useUnifiedTopology: true });
  let db = client.db("cs5220stu26");

  await db.dropCollection("recipes");
  await db.collection("recipes").insertMany(recipes);
  await db.collection("recipes").createIndex({recipeName: "text",ingredientName: "text"}, {default_language: "english"});

  let collection =  await db.collection("recipes");

  console.log("Get recipes made with beef and potato: ");
  let result1 = await collection.find({ingredients : { $elemMatch: {ingredientName: {$regex:"beef",$regex:"potato",$options:"i"}}}}).project({_id:true,recipeName:true}).toArray();
  console.log(result1)


  console.log("Get recipes with the word Steak in the name: ");
  const query = { $text: { $search: "Steak" } };
  // Return only the `title` of each matched document
  const projection = {
    _id: true,
    recipeName: true,
  };

  const result2 = await collection.find(query).project(projection).toArray();

  console.log(result2)


  await client.close();
}

run();
