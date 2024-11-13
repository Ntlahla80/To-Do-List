


# To-Do List Application

This is a simple To-Do List web application built using **Node.js** and **Express**, with the frontend rendered using **EJS** templates. It allows users to:

- Add tasks
- Mark tasks as complete/incomplete
- Remove tasks
- View progress on tasks

## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **Toggle Tasks**: Tasks can be marked as completed or unchecked.
- **Remove Tasks**: Users can remove tasks from their list.
- **Task Statistics**: Displays the total number of tasks, completed tasks, remaining tasks, and progress.

## Technologies Used

- **Node.js**: JavaScript runtime used for building the backend server.
- **Express.js**: Web framework for building REST APIs and handling HTTP requests.
- **EJS**: Templating engine for rendering dynamic HTML pages.
- **HTML/CSS**: For structuring and styling the frontend of the application.
- **JavaScript**: For client-side functionality.

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (preferably the latest stable version)
- A code editor (e.g., [VSCode](https://code.visualstudio.com/))

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ntlahla80/To-do-List.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd To-do-List
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

   This will start the server on port `3000`.

5. **Visit the application**:

   Open a web browser and go to `http://localhost:3000/` to view the app.

## Folder Structure

```
.
├── views/
│   └── index.ejs            # Main view (UI template)
├── public/
│   └── css/
│       └── styles.css       # Custom styles for the app
├── app.js                   # Main server file (Express setup)
├── package.json             # Project dependencies and metadata
└── README.md                # Project documentation
```

## API Endpoints

- **GET /**  
  - Renders the main to-do list page with the current tasks.
  
- **POST /add**  
  - Adds a new task to the list.

- **POST /toggle/:id**  
  - Toggles the completion status of a task (checked or unchecked).

- **POST /remove/:id**  
  - Removes a task from the list.

## Task Progress Calculation

- The **Task Progress** section displays:
  - Total tasks
  - Completed tasks
  - Remaining tasks
  - Progress as a percentage (calculated based on the number of completed tasks divided by the total number of tasks).

