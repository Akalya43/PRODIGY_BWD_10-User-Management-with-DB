The task involved extending a User Management REST API from in-memory storage to a MongoDB Atlas database to persist user data.
All CRUD operations are implemented with proper HTTP status codes and tested using Postman.

**Features**
Create a new user
Retrieve all users
Retrieve a user by ID
Update user details
Delete a user
Proper HTTP status codes

**Technologies Used**
Node.js
Express.js
MongoDB Atlas
Mongoose
Postman
dotenv

📂 **Project Structure**
User Mangement REST API
│── config/
│   └── db.js
│── models/
│   └── User.js
│── index.js
│── .env
│── package.json

**How to Run**
**1)** **Install dependencies**
     npm install express
     npm install mongoose
**2)** **start server**
     node index.js
**3)** **Server running URL**
     http://localhost:4000
     http://localhost:4000/users - for CRUD operation

**4)** **HTTPStatusCodes**
     200 – OK
     201 – Created
     400 – Bad Request
     404 – Not Found
     500 – Internal Server Error 

**5)** **Testing**
API endpoints tested using Postman
Verified correct request and response handling
Confirmed data is stored in MongoDB Atlas


 




