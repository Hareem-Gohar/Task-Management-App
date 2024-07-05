# Task Management App

A simple React-based task management app where you can add, complete, and delete tasks. It includes tabs to view active and completed tasks.

## Features

- **Add Tasks**: Add new tasks to your list.
- **Complete Tasks**: Mark tasks as done and move them to the "Completed" tab.
- **Delete Tasks**: Remove tasks from the list.
- **Tab Navigation**: Switch between "Tasks" and "Completed" views.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Hareem-Gohar/Task-Management-App.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd task-management-app
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` in your browser to see the app.

## File Structure

- **`src/`**: Contains React components and styles.
  - **`TaskBox.js`**: Main component with task input and tabs.
  - **`TaskInput.js`**: Form for adding tasks.
  - **`TaskList.js`**: Displays tasks and handles completion/deletion.
  - **`TaskItem.js`**: Represents individual tasks.
  - **`Tabs.js`**: Manages tab navigation.
  - **`Button.js`**: Reusable button component.
  - **`Header.js`**: App header.
- **`index.css`**: Global styles.

## Local Storage

Tasks are saved in `localStorage` to keep your data even after refreshing the page.
