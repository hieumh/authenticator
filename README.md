# Project Template: NestJS Backend with SQL and Prisma

## Overview

This repository serves as a template for setting up a backend project using NestJS with a SQL database and Prisma. The project includes a basic structure, authentication, and authorization mechanisms, as well as integrations with Prisma for database operations.

## Tech Stack

- **NestJS:** A progressive Node.js framework for building efficient and scalable server-side applications.
- **SQL Database:** Choose a SQL database of your preference (e.g., PostgreSQL, MySQL).
- **Prisma:** A modern database toolkit that simplifies database access and management.

## Features

- **User Authentication and Authorization:** Implement user authentication and authorization using NestJS Passport and JWT.
- **Database Integration with Prisma:** Utilize Prisma for type-safe database access, migrations, and schema management.
- **Scalable Project Structure:** Follow a modular and scalable project structure for easy maintenance and future expansion.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-nestjs-sql-prisma-template.git
   cd your-nestjs-sql-prisma-template
   ```

### API Documentation:

Access the API documentation at http://localhost:3000/api/docs for detailed information about available endpoints.
Project Structure

### Install Dependencies:

```
bash
npm install
```

### Set Up Database:

Configure your SQL database connection in the prisma/schema.prisma file.
Run Prisma migrations to create the database schema:

```
npx prisma migrate dev
```

### Start the Development Server:

npm run start:dev

### API Documentation:

Access the API documentation at http://localhost:3000/api/docs for detailed information about available endpoints.

## Project Structure

```
/src
|-- auth
| |-- auth.controller.ts
| |-- auth.guard.ts
| |-- auth.service.ts
| |-- jwt.strategy.ts
| |-- local-auth.guard.ts
|-- user
| |-- user.controller.ts
| |-- user.entity.ts
| |-- user.module.ts
| |-- user.service.ts
|-- app.controller.ts
|-- app.module.ts
```

## Configuration

Environment Variables:
Set the necessary environment variables in a .env file for configuration settings such as database connection details, JWT secret, etc.

