# Project Title

This project is a template for a NestJS backend with session-based, token-based, and OAuth authentication, and authorization using DDD architecture.

## Tech Stack

- NestJS
- TypeScript
- Prisma
- PostgreSQL

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Create a `.env` file with the following environment variables:
    - `DATABASE_URL`: The URL of your PostgreSQL database.
4. Run the application with `npm run start`.

## Authentication

This project uses NestJS's built-in `@nestjs/passport` module to handle authentication. It supports session-based, token-based, and OAuth authentication strategies.

### Session-based Authentication

Session-based authentication is implemented using NestJS's built-in `@nestjs/session` module. The `SessionSerializer` class is responsible for serializing and deserializing user sessions.

### Token-based Authentication

Token-based authentication is implemented using JSON Web Tokens (JWTs). The `JwtStrategy` class is responsible for verifying JWTs.

### OAuth Authentication

OAuth authentication is implemented using NestJS's built-in `@nestjs/passport` module. The `OAuth2Strategy` class is responsible for handling OAuth authentication.

## Authorization

This project uses NestJS's built-in `@nestjs/authorization` module to handle authorization. It supports role-based and resource-based authorization.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.