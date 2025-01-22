Project Description:-
Expense Tracker is a simple web application designed to help users track and manage their personal finances by recording their expenses. This application provides users with the ability to add, view, and categorize their expenses efficiently. It supports features such as user authentication, categorization of expenses, and detailed reports on spending patterns. The back-end is built using a RESTful API, which handles user data, expense records, and categories.

Key features of the application include:

User Registration & Authentication: Allows users to register, log in, and authenticate using their credentials.
Expense Management: Users can record their expenses with descriptions, categories, amounts, and dates.
Expense Categories: Expenses can be organized under predefined categories (e.g., Food, Transport, Entertainment, etc.).
View Expenses: Users can view all their expenses, filtered by user and category.
Responsive Design: The user interface is designed to be responsive, offering a seamless experience on both desktop and mobile devices.

Setup Instructions:-
Follow the steps below to set up and run the Expense Tracker project locally on your machine.

1. Clone the Repository

git clone https://github.com/Aelisha30/expense-tracker-aelisha.git
cd expense-tracker-aelisha

2. Install Dependencies
   
Make sure you have Node.js and npm installed on your machine. If not, download and install from Node.js official website.

Install the necessary dependencies for the project:
npm install

3. Configure Database
Make sure you have a MySQL (or compatible) database set up. Create a database called ExpenseTracker (or another name of your choice) and modify the database connection details in the configuration file.

For example, in config/dbConfig.js:

module.exports = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ExpenseTracker'
};

4. Set Up Environment Variables:-
Create a .env file at the root of the project (if not already created), and add the following configuration:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=ExpenseTracker
JWT_SECRET=your_jwt_secret_key

5. Run the Application:-
Once all dependencies are installed and the environment is set up, you can run the application locally:

npm start
By default, the application will run on http://localhost:3000.

Testing the API:-
You can use tools like Postman to test the API endpoints. Here is a quick guide to test the basic endpoints:

User Registration: Use the POST /api/register endpoint to create a new user. Send the username, password, and email in the request body.
User Login: After registration, use POST /api/login with the same credentials to receive a JWT token for authentication.
Create Expense: Use the POST /api/expenses endpoint with user authentication to add a new expense.
Get Expenses: Retrieve all expenses for the authenticated user with the GET /api/expenses/{user_id} endpoint.
Get Categories: Use the GET /api/categories endpoint to get a list of expense categories.

