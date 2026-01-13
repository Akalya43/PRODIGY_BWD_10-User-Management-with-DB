**User Management REST API With DB**
The task involved extending a User Management REST API from in-memory storage to a MongoDB Atlas database to persist user data.All CRUD operations are implemented with proper HTTP status codes and tested using Postman.

**Features**
1)Create a new user
2)Retrieve all users
3)Retrieve a user by ID
4)Update user details
5)Delete a user
6)Proper HTTP status codes

**Technologies Used**
1)Node.js
2)Express.js
3)MongoDB Atlas
4)Mongoose
5)Postman
6)dotenv

📂**Project Structure**
internship-task-2/
│── config/
│   └── db.js
│── models/
│   └── User.js
│── index.js
│── .env
│── package.json

**Run the application**
**1)Install dependencies**
    npm install express
    npm install mongoose
**2)Start the server**
    npm index.js
**3)Server URL**
   http://localhost:4000
   http://localhost:4000/users - for CRUD opertion

**HTTP Status Codes**
200 – OK
201 – Created
400 – Bad Request
404 – Not Found
500 – Internal Server Error

**Testing**
API endpoints tested using Postman
Verified correct request and response handling
Confirmed data is stored in MongoDB Atlas


  




