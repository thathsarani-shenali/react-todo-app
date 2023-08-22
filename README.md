# react-todo-app

A simple Todo List application built using React that allows users to manage their tasks. The app provides functionality to list all todo items, create and remove todo items, and mark items as completed.

### Functionality
1. List all Todo items: Upon loading the app, users can see a list of all the todo items they have created. Completed items are marked as checked.
2. Create todo items: Users can add new todo items by clicking the "Add New" button. Clicking on the "Add New" button triggers a modal to appear, where users can enter the title of the new task. The title field must not be empty.
3. Remove Todo items: They can also delete items using the delete button associated with each task.
4. Mark as Completed: Users can mark a todo item as completed by clicking the radio button associated with each task.

### Getting Started
Clone the repository to your local machine.
Navigate to the project directory and install the dependencies using the following command:

**npm install**

Start the development server using the following command:

**npm start**

Open your web browser and navigate to http://localhost:3000 to access the app.

### Technologies Used
React
React Bootstrap
Axios (for API requests)

### API Integration
The app integrates with a RESTful API to manage the todo items. It uses Axios to send API requests for creating, deleting, and updating todo items.

API Base URL: https://crudapi.co.uk/api/v1

#### Endpoints:
GET /task: Get a list of all todo items.
POST /task: Create a new todo item.
DELETE /task/{taskId}: Delete a todo item.
PUT /task/{taskId}: Update the status of a todo item.
