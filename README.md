 
---

# Library Management System

## Project Name & Description
A backend API for managing a library system, allowing users to borrow and return books, track overdue items, manage member data, and handle authentication. Built to streamline library processes and provide easy access to borrowing history, overdue items, and member management.

## Live URL
- **Live Server**: [Library Management System API](https://my-api.com)

## Technology Stack & Packages
- **Backend**: Node.js, Express.js, TypeScript, Prisma, PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Date Handling**: date-fns (for handling dates, overdue checks)
- **Environment Management**: dotenv
- **Validation**: Joi (optional if used for input validation)

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Setup environment variables**:
   - Create a `.env` file with necessary environment variables (e.g., `DATABASE_URL`, `JWT_SECRET`).
4. **Run database migrations**:
   ```bash
   npx prisma migrate dev
   ```
5. **Start the server**:
   ```bash
   npm run dev
   ```

## Key Features & Functionality
- **Authentication**:
  - User login and token management
  - Role-based access control (Super Admin, Admin, Librarian, Member)

- **Member Management**:
  - Create, update, and delete members
  - List all members or retrieve individual member details

- **Book Management**:
  - Add, update, and delete book entries
  - Retrieve a list of books or single book details

- **Borrowing & Returning**:
  - Borrow a book and track borrow date and return date
  - View overdue books (books that exceed the 14-day borrowing period)
  - Return a book and update inventory

- **Overdue Borrow List**:
  - Automatically track overdue books based on borrow date exceeding 14 days
  - Retrieve a list of overdue books with borrower details and overdue days

## API Endpoints

### Auth
- **POST** `/auth/login` - Log in a user
- **POST** `/auth/refresh-token` - Refresh user session token

### Book
- **POST** `/books/` - Create a new book
- **GET** `/books/` - Retrieve all books
- **GET** `/books/:bookId` - Retrieve a single book by ID
- **PUT** `/books/:bookId` - Update book details
- **DELETE** `/books/:bookId` - Delete a book

### Borrow Records
- **POST** `/borrow-records/` - Borrow a book
- **GET** `/borrow-records/overdue` - Get a list of overdue borrowed books
- **POST** `/return/` - Return a borrowed book

### Member
- **POST** `/members/create-member` - Register a new library member
- **POST** `/members/create-librarian` - Register a new librarian
- **GET** `/members/` - Retrieve all members
- **GET** `/members/:memberId` - Retrieve a member by ID
- **PUT** `/members/:memberId` - Update member information
- **DELETE** `/members/:memberId` - Delete a member

## Important Links
- **Server GitHub Repository**: [Library Management Backend](https://github.com/yourusername/library-management-system)
- **Live API Server**: [Library API Server](https://your-live-url.com)

## Known Issues/Bugs
- **Issue 1**: Token refresh may sometimes fail under heavy load.
- **Issue 2**: Date handling inconsistencies on different time zones (using UTC may help).
- **Bug Fixes in Progress**: Improvements to input validation and error handling.

## Overview
This project is a backend system built to manage library operations, including user management, book inventory, and borrowing records. It is built with Node.js and TypeScript, providing RESTful APIs for client-side applications to interact with the library data. The system includes roles for administrators and members, with appropriate permissions and security using JWT.

## Features Recap
- Role-based access control with authentication
- Book inventory management with overdue tracking
- Member creation and management
- Borrowing and return tracking with real-time overdue notifications

**Thank you for using the Library Management System!**

--- 
 
