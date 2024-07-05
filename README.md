<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Management App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        h2 {
            color: #555;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }
        li {
            margin: 10px 0;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        a {
            color: #0066cc;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Task Management App</h1>
    <p>A simple task management application built with React. This app allows users to add, complete, and delete tasks, and view tasks in different tabs based on their completion status.</p>
    
    <h2>Features</h2>
    <ul>
        <li><strong>Add Tasks:</strong> Users can input a task title and description, and add it to the task list.</li>
        <li><strong>Complete Tasks:</strong> Users can mark tasks as completed, which will move them to the "Completed" tab and record the completion time.</li>
        <li><strong>Delete Tasks:</strong> Users can delete tasks from either the "Tasks" or "Completed" tab.</li>
        <li><strong>Tab Navigation:</strong> Switch between "Tasks" and "Completed" tabs to view different sets of tasks.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>React:</strong> JavaScript library for building user interfaces.</li>
        <li><strong>React Icons:</strong> Provides icons used in the application.</li>
        <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for styling.</li>
    </ul>

    <h2>Installation</h2>
    <p>To get started with the project, follow these steps:</p>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/your-username/task-management-app.git</code></pre>
        </li>
        <li><strong>Navigate to the project directory:</strong>
            <pre><code>cd task-management-app</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the development server:</strong>
            <pre><code>npm start</code></pre>
            <p>The application will be running at <code>http://localhost:3000</code> by default.</p>
        </li>
    </ol>

    <h2>File Structure</h2>
    <ul>
        <li><strong>src/:</strong> Contains all the React components and styling files.
            <ul>
                <li><strong>TaskBox.js:</strong> Main component that houses the task input, tabs, and task list.</li>
                <li><strong>TaskInput.js:</strong> Component for adding new tasks.</li>
                <li><strong>TaskList.js:</strong> Displays tasks based on the active tab and handles task completion and deletion.</li>
                <li><strong>TaskItem.js:</strong> Represents individual tasks in the list.</li>
                <li><strong>Tabs.js:</strong> Component for tab navigation.</li>
                <li><strong>Button.js:</strong> A reusable button component.</li>
                <li><strong>Header.js:</strong> Displays the main header of the app.</li>
            </ul>
        </li>
        <li><strong>index.css:</strong> Global styles for the application.</li>
    </ul>

    <h2>How It Works</h2>
    <ul>
        <li><strong>Task Input:</strong> Users can input the task title and description, and click the "Add Task" button to add it to the list.</li>
        <li><strong>Task Completion:</strong> Clicking the "Done" icon on a task will mark it as completed, move it to the "Completed" tab, and record the completion date and time.</li>
        <li><strong>Task Deletion:</strong> Clicking the "Delete" icon will remove the task from the respective tab (either "Tasks" or "Completed").</li>
        <li><strong>Tab Navigation:</strong> Use the tabs to switch between viewing active and completed tasks.</li>
    </ul>

    <h2>Local Storage</h2>
    <p>Tasks and completed tasks are saved to <code>localStorage</code>, so the data persists across page reloads.</p>

    <h2>Contributing</h2>
    <p>Feel free to fork the repository and submit pull requests. For any issues or feature requests, please open an issue on the GitHub repository.</p>
</body>
</html>
