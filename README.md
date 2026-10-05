# Task Management API

A simple Task Management REST API built using **Node.js, Express.js, and MySQL**.

This project demonstrates a **layered monolithic architecture** with clear separation between:

**Controller → Service → DAO → MySQL**

## Project Structure

```text
23.01.2026_monolithic architecture/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── taskController.js
│
├── services/
│   └── taskService.js
│
├── dao/
│   └── taskDao.js
│
├── app.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

## Architecture Layers

### Controller Layer

Handles HTTP requests and responses.

* Receives requests from the client.
* Calls the appropriate service.
* Sends the response back to the client.
* Does not contain database logic.

### Service Layer

Contains the application's business logic.

* Validates task data.
* Processes requests.
* Communicates with the DAO layer.

### DAO Layer

Handles database operations.

* Executes SQL queries.
* Retrieves tasks from MySQL.
* Creates and deletes tasks.
* Keeps database logic separate from the other layers.

### Database

The application uses **MySQL** to permanently store task data.

## Technologies Used

* Node.js
* Express.js
* MySQL
* MySQL2
* dotenv
* Postman

## Database Setup

Create the database:

```sql
CREATE DATABASE task_db;
```

Select the database:

```sql
USE task_db;
```

Create the tasks table:

```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
```

Optional sample data:

```sql
INSERT INTO tasks (title, completed)
VALUES
('Learn Monolithic Architecture', FALSE),
('Build Task API', FALSE);
```

## Environment Variables

Create a `.env` file in the project root:

```text
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=task_db
```

Do not commit the `.env` file to GitHub.

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Run the Application

Start the server:

```bash
node app.js
```

The API will run at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| GET    | `/tasks/:id` | Get a task by ID  |
| POST   | `/tasks`     | Create a new task |
| DELETE | `/tasks/:id` | Delete a task     |

## Example POST Request

**POST**

```text
http://localhost:3000/tasks
```

Request body:

```json
{
    "title": "Study Software Architecture"
}
```

Example response:

```json
{
    "id": 3,
    "title": "Study Software Architecture",
    "completed": false
}
```

## Example DELETE Request

**DELETE**

```text
http://localhost:3000/tasks/3
```

Example response:

```json
{
    "message": "Task deleted successfully"
}
```

## Purpose

This project was developed to demonstrate the principles of **monolithic architecture** and separation of responsibilities using Controller, Service, and DAO layers.

The application is deployed as a single unit while maintaining clear internal boundaries between its components.
