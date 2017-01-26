const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const Listing = require('../models').Listing;

//Listing.sync will create the Listing table
Listing.sync({force: true})
//add the following six listings to the database:
.then(() => Listing.bulkCreate([
	{
	  description: 'Spacious room in a Beautiful neighborhood with much to see and do!',
	  zipCode: '10002',
	  images: ['https://a0.muscache.com/im/pictures/6e192b27-5e70-4182-bd95-441a72d32914.jpg'],
	  guestLimit: 4,
	  availability: 1,
	  UserId: 1
	},

	{
	  description: "Cozy modern sunny room available in the city. It's a quiet and safe, neighborhood.",
	  zipCode: '10019',
	  images: ['https://a0.muscache.com/im/pictures/160c1904-3969-41cc-9ed7-702c456208ee.jpg'],
	  guestLimit: 6,
	  availability: 1,
	  UserId: 2
	},
	{
	  description: "One room available in the city! The room is available from Tuesday to Friday.",
	  zipCode: '10029',
	  images: ['https://a0.muscache.com/im/pictures/03d5d817-3e6d-4e81-8531-fcdc41b7b9f5.jpg?aki_policy=x_medium'],
	  guestLimit: 1,
	  availability: 0,
	  UserId: 4
	},	
	{
	  description: "Rest Your Head in a clean and quiet room. The room is available only weekends.",
	  zipCode: '11101',
	  images: ['https://a0.muscache.com/im/pictures/52831120/46cd1b4b_original.jpg'],
	  guestLimit: 1,
	  availability: 1,
	  UserId: 3
	},		
	{
	  description: "My place is close to Empire State Building, Korea Town, Macy's, Penn Station, Herold Square, . You’ll love my place because of Walking distance from everything. My place is good for couples, solo adventurers, and business travelers.",
	  zipCode: '11207',
	  images: ['https://a0.muscache.com/im/pictures/6159e180-1369-4940-92c7-f44cc75be84e.jpg'],
	  guestLimit: 2,
	  availability: 0,
	  UserId: 5
	},

	{
	  description: "The room is a one-room suite with queen-size bed and comfortable seating area. It is located downstairs with an outside entrance and is wheelchair assessable.",
	  zipCode: '10019',
	  images: ['https://a0.muscache.com/im/pictures/75aa2495-309d-4029-b331-fe6d51d8160c.jpg'],
	  guestLimit: 6,
	  availability: 1,
	  UserId: 2
	},


	{
	  description: "One room available, with queen-size bed.The room is available until and including Feb, 31st.",
	  zipCode: '10029',
	  images: ['https://a0.muscache.com/im/pictures/55f146d1-979c-43cd-b790-b6d13a6ddb81.jpg?aki_policy=x_medium'],
	  guestLimit: 1,
	  availability: 0,
	  UserId: 4
	},	
	{
	  description: "Adorable room with view to the park! Located close to Empire State Building, Korea Town, Macy's, Penn Station, Herold Square.",
	  zipCode: '11101',
	  images: ['https://a0.muscache.com/im/pictures/c4fd2915-d3b5-4c36-be24-9bedf551b67f.jpg'],
	  guestLimit: 1,
	  availability: 1,
	  UserId: 3
	},		
	{
	  description: "My room is close to Central Park. You’ll love my place because of Walking distance from everything. The room is good for couples or one person.",
	  zipCode: '11207',
	  images: ['https://a0.muscache.com/im/pictures/4d1ffbdd-dee7-479e-a118-e11207b32240.jpg?aki_policy=x_medium'],
	  guestLimit: 2,
	  availability: 0,
	  UserId: 5
	}
]))

.catch((err) => console.log(err));
