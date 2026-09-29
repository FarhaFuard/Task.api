# Task Management API

A simple Task Management REST API built using **Node.js** and **Express.js** to demonstrate a well-structured **Monolithic Architecture**.

## Architecture

The application follows a layered structure:

```text
Client
   ↓
Controller Layer
   ↓
Service Layer
   ↓
DAO Layer
   ↓
Data
```

### 1. Controller Layer

Located in:

```text
controllers/
```

The Controller layer handles HTTP requests and responses.

Example:

* Receiving API requests
* Reading request parameters
* Returning HTTP responses
* Handling HTTP status codes

### 2. Service Layer

Located in:

```text
services/
```

The Service layer contains the application's business logic and validation.

For example, it checks that a task has a valid title before creating it.

### 3. DAO Layer

Located in:

```text
dao/
```

The DAO (Data Access Object) layer handles data access and storage.

For this prototype, tasks are stored in an in-memory JavaScript array.

## Project Structure

```text
task-api/
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
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Technologies Used

* Node.js
* Express.js
* JavaScript
* REST API

## Installation

Clone the repository and open the project folder.

Install the required dependencies:

```bash
npm install
```

## Running the Application

Start the server using:

```bash
node app.js
```

The server will run at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/tasks`     | Get all tasks       |
| GET    | `/tasks/:id` | Get a specific task |
| POST   | `/tasks`     | Create a new task   |
| DELETE | `/tasks/:id` | Delete a task       |

## Example: Get All Tasks

```text
GET http://localhost:3000/tasks
```

Example response:

```json
[
  {
    "id": 1,
    "title": "Learn Monolithic Architecture",
    "completed": false
  },
  {
    "id": 2,
    "title": "Build Task API",
    "completed": false
  }
]
```

## Example: Create a Task

```text
POST http://localhost:3000/tasks
```

Request body:

```json
{
  "title": "Study Software Architecture"
}
```

## Example: Delete a Task

```text
DELETE http://localhost:3000/tasks/3
```

## Purpose

This project was developed to demonstrate how a monolithic application can still maintain a clear separation of responsibilities using **Controller, Service, and DAO layers**.

The application is deployed and run as a single application, while the internal code is organized into separate layers for better maintainability and structure.
