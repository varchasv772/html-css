

const restaurantData = {
    
        Agra: [
          {
            id: "Qairo",
            name: "Qairo Kitchen & Bar",
            image:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
            cuisines: "North Indian, Italian, Asian",
            price: "₹1,800 for two",
            distance: "2.5 km",
            rating: 4.4,
          },
          {
            name: "The Salt Cafe Kitchen & Bar",
            image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
            cuisines: "Continental, North Indian",
            price: "₹1,500 for two",
            distance: "3.8 km",
            rating: 4.2
          },
          {
            name: "London Street Cafe",
            image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
            cuisines: "Cafe, Fast Food",
            price: "₹1,200 for two",
            distance: "1.9 km",
            rating: 4.5
          },
          {
            name: "Pinch of Spice",
            image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
            cuisines: "Mughlai, North Indian, Chinese",
            price: "₹1,400 for two",
            distance: "4.1 km",
            rating: 4.6
          },
          {
            name: "Bon Barbecue",
            image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
            cuisines: "Barbecue, North Indian, Chinese",
            price: "₹1,800 for two",
            distance: "3.0 km",
            rating: 4.3
          },
          {
            name: "Mocha Cafe & Bar",
            image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
            cuisines: "Cafe, Continental",
            price: "₹1,300 for two",
            distance: "2.7 km",
            rating: 4.1
          },
          
        ],
        Delhi:  [
            {
              name: "Indian Accent",
              image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
              cuisines: "Modern Indian",
              price: "₹4,000 for two",
              distance: "3.2 km",
              rating: 4.8
            },
            {
              name: "Sita Ram Diwan Chand",
              image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
              cuisines: "North Indian, Street Food",
              price: "₹300 for two",
              distance: "1.4 km",
              rating: 4.5
            },
            {
              name: "Biryani Blues",
              image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
              cuisines: "Hyderabadi, Biryani",
              price: "₹600 for two",
              distance: "2.0 km",
              rating: 4.3
            },
            {
              name: "Diggin Cafe",
              image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
              cuisines: "Cafe, Italian, Continental",
              price: "₹1,500 for two",
              distance: "3.6 km",
              rating: 4.6
            },
            {
              name: "Rajinder Da Dhaba",
              image: "https://images.pexels.com/photos/6089659/pexels-photo-6089659.jpeg",
              cuisines: "North Indian, Tandoori",
              price: "₹800 for two",
              distance: "2.5 km",
              rating: 4.4
            },
            {
              name: "Big Chill Cafe",
              image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
              cuisines: "Italian, Continental, Desserts",
              price: "₹1,700 for two",
              distance: "2.9 km",
              rating: 4.7
            },
            
          ],
        Mumbai: [
            {
              name: "The Bombay Canteen",
              image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
              cuisines: "Modern Indian, Fusion",
              price: "₹2,000 for two",
              distance: "2.2 km",
              rating: 4.7
            },
            {
              name: "Leopold Cafe",
              image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
              cuisines: "Cafe, Continental, Indian",
              price: "₹1,600 for two",
              distance: "3.1 km",
              rating: 4.4
            },
            {
              name: "Trishna",
              image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
              cuisines: "Seafood, South Indian",
              price: "₹2,500 for two",
              distance: "2.8 km",
              rating: 4.6
            },
            {
              name: "Bastian",
              image: "https://images.pexels.com/photos/6089659/pexels-photo-6089659.jpeg",
              cuisines: "Asian, Seafood, Fusion",
              price: "₹3,000 for two",
              distance: "4.0 km",
              rating: 4.5
            },
            {
              name: "Britannia & Co.",
              image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
              cuisines: "Parsi, Iranian, Indian",
              price: "₹1,200 for two",
              distance: "1.9 km",
              rating: 4.3
            },
            {
              name: "Yauatcha",
              image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
              cuisines: "Chinese, Asian, Dim Sum",
              price: "₹3,200 for two",
              distance: "3.6 km",
              rating: 4.6
            },
            
          ],
          Bengaluru : [
            {
              name: "Toit Brewpub",
              image: "https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg",
              cuisines: "Continental, American, Pizza",
              price: "₹2,000 for two",
              distance: "2.9 km",
              rating: 4.6
            },
            {
              name: "Truffles",
              image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
              cuisines: "American, Fast Food, Burgers",
              price: "₹900 for two",
              distance: "2.1 km",
              rating: 4.5
            },
            {
              name: "Brahma Brews",
              image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
              cuisines: "Continental, Barbecue, Asian",
              price: "₹2,200 for two",
              distance: "3.8 km",
              rating: 4.4
            },
            {
              name: "Airlines Hotel",
              image: "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg",
              cuisines: "South Indian, Fast Food",
              price: "₹600 for two",
              distance: "1.6 km",
              rating: 4.3
            },
            {
              name: "The Black Pearl",
              image: "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg",
              cuisines: "Barbecue, North Indian",
              price: "₹1,800 for two",
              distance: "3.3 km",
              rating: 4.5
            },
            {
              name: "Vidyarthi Bhavan",
              image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
              cuisines: "South Indian, Pure Veg",
              price: "₹300 for two",
              distance: "2.0 km",
              rating: 4.7
            },
            
          ],
          
        Chennai:  [
            {
              name: "A2B - Adyar Ananda Bhavan",
              image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
              cuisines: "South Indian, Sweets",
              price: "₹600 for two",
              distance: "1.5 km",
              rating: 4.3
            },
            {
              name: "Kaidi Kitchen",
              image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
              cuisines: "North Indian, Chinese, Continental",
              price: "₹1,400 for two",
              distance: "2.4 km",
              rating: 4.4
            },
            {
              name: "Murugan Idli Shop",
              image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
              cuisines: "South Indian, Vegetarian",
              price: "₹400 for two",
              distance: "1.2 km",
              rating: 4.5
            },
            {
              name: "Pind",
              image: "https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg",
              cuisines: "North Indian, Punjabi",
              price: "₹1,100 for two",
              distance: "2.9 km",
              rating: 4.2
            },
            {
              name: "The Marina",
              image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg",
              cuisines: "Seafood, South Indian",
              price: "₹1,800 for two",
              distance: "3.1 km",
              rating: 4.3
            },
            {
              name: "Amelie's Cafe & Creamery",
              image: "https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg",
              cuisines: "Desserts, Bakery, Continental",
              price: "₹900 for two",
              distance: "2.6 km",
              rating: 4.6
            },
          ],
        Jaipur : [
            {
              name: "The Tattoo Cafe & Lounge",
              image: "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg",
              cuisines: "Cafe, Continental, Fast Food",
              price: "₹900 for two",
              distance: "1.8 km",
              rating: 4.4
            },
            {
              name: "RJ 14",
              image: "https://images.pexels.com/photos/1099681/pexels-photo-1099681.jpeg",
              cuisines: "North Indian, Rajasthani",
              price: "₹1,200 for two",
              distance: "2.9 km",
              rating: 4.5
            },
            {
              name: "Tapri Central",
              image: "https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg",
              cuisines: "Cafe, Street Food, Tea",
              price: "₹800 for two",
              distance: "1.5 km",
              rating: 4.6
            },
            {
              name: "Chokhi Dhani",
              image: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg",
              cuisines: "Rajasthani, Buffet, Traditional",
              price: "₹1,800 for two",
              distance: "5.2 km",
              rating: 4.7
            },
            {
              name: "Masala Chowk",
              image: "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg",
              cuisines: "Street Food, Multi-Cuisine",
              price: "₹500 for two",
              distance: "2.2 km",
              rating: 4.3
            },
            {
              name: "Zolocrust",
              image: "https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg",
              cuisines: "Pizza, Italian, Bakery",
              price: "₹1,500 for two",
              distance: "3.5 km",
              rating: 4.4
            },
          ],
          Kolkata: [
            {
              name: "6 Ballygunge Place",
              image: "https://images.pexels.com/photos/1832016/pexels-photo-1832016.jpeg",
              cuisines: "Bengali, North Indian",
              price: "₹1,300 for two",
              distance: "2.1 km",
              rating: 4.6
            },
            {
              name: "Peter Cat",
              image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg",
              cuisines: "North Indian, Continental",
              price: "₹1,400 for two",
              distance: "1.8 km",
              rating: 4.5
            },
            {
              name: "Oudh 1590",
              image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
              cuisines: "Awadhi, Mughlai",
              price: "₹1,600 for two",
              distance: "2.5 km",
              rating: 4.4
            },
            {
              name: "Arsalan",
              image: "https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg",
              cuisines: "Biryani, North Indian",
              price: "₹800 for two",
              distance: "3.0 km",
              rating: 4.3
            },
            {
              name: "Bohemian",
              image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
              cuisines: "Fusion, Bengali",
              price: "₹1,700 for two",
              distance: "2.3 km",
              rating: 4.5
            },
            {
              name: "Mocambo",
              image: "https://images.pexels.com/photos/3758132/pexels-photo-3758132.jpeg",
              cuisines: "Continental, North Indian",
              price: "₹1,500 for two",
              distance: "2.7 km",
              rating: 4.6
            },
            
          ],
          
        Hyderabad : [
            {
              name: "Paradise Biryani",
              image: "https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg",
              cuisines: "Biryani, North Indian, Mughlai",
              price: "₹1,200 for two",
              distance: "2.0 km",
              rating: 4.5
            },
            {
              name: "Ohri's Jiva Imperia",
              image: "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg",
              cuisines: "North Indian, South Indian",
              price: "₹1,400 for two",
              distance: "2.7 km",
              rating: 4.4
            },
            {
              name: "Bawarchi",
              image: "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg",
              cuisines: "Biryani, Chinese, Tandoori",
              price: "₹1,100 for two",
              distance: "1.9 km",
              rating: 4.3
            },
            {
              name: "Chutneys",
              image: "https://images.pexels.com/photos/1833337/pexels-photo-1833337.jpeg",
              cuisines: "South Indian, Vegetarian",
              price: "₹800 for two",
              distance: "1.5 km",
              rating: 4.6
            },
            {
              name: "AB’s - Absolute Barbecues",
              image: "https://images.pexels.com/photos/1600714/pexels-photo-1600714.jpeg",
              cuisines: "Barbecue, North Indian, Grill",
              price: "₹1,800 for two",
              distance: "3.0 km",
              rating: 4.5
            },
            {
              name: "The Fisherman's Wharf",
              image: "https://images.pexels.com/photos/789327/pexels-photo-789327.jpeg",
              cuisines: "Goan, Seafood, Continental",
              price: "₹2,200 for two",
              distance: "3.6 km",
              rating: 4.4
            },
          ],
        Pune : [
            {
              name: "Vaishali Restaurant",
              image:"https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg",
              cuisines: "South Indian, Fast Food",
              price: "₹700 for two",
              distance: "1.2 km",
              rating: 4.5
            },
            {
              name: "Goodluck Cafe",
              image: "https://images.pexels.com/photos/259763/pexels-photo-259763.jpeg",
              cuisines: "Irani, North Indian, Fast Food",
              price: "₹600 for two",
              distance: "2.0 km",
              rating: 4.4
            },
            {
              name: "Barbeque Nation",
              image: "https://images.pexels.com/photos/2136863/pexels-photo-2136863.jpeg",
              cuisines: "Barbecue, North Indian",
              price: "₹1,800 for two",
              distance: "3.1 km",
              rating: 4.3
            },
            {
              name: "Malaka Spice",
              image: "https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg",
              cuisines: "Asian, Thai, Malaysian",
              price: "₹2,200 for two",
              distance: "2.9 km",
              rating: 4.6
            },
            {
              name: "The Bounty Sizzlers",
              image: "https://images.pexels.com/photos/3758132/pexels-photo-3758132.jpeg",
              cuisines: "Continental, Sizzlers",
              price: "₹1,400 for two",
              distance: "2.5 km",
              rating: 4.2
            },
            {
              name: "German Bakery",
              image: "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg",
              cuisines: "Cafe, Bakery, Continental",
              price: "₹1,000 for two",
              distance: "1.6 km",
              rating: 4.4
            },
            
          ]
            
          
          
          
          
      };

  
  export default restaurantData;
  