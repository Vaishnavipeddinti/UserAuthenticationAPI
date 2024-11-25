# User Authentication API

## Overview

This project is a simple user authentication API built with JavaScript (ES Modules). It uses AWS Lambda, API Gateway, and DynamoDB, following an MVC-like structure.

## Features
- Create an account with a username and password
- Login with the same username and password
- AWS integration for scalability and ease of deployment

## Project Structure
- **src**: Contains the application code
    - `controllers`: Request handlers
    - `services`: Business logic
    - `models`: Data interaction with DynamoDB
    - `routes`: Route definitions (not implemented here, integrated in handler)
    - `utils`: Utility functions (can add for validations, etc.)
- **aws**: AWS-specific configurations
- **tests**: Placeholder for test files
- **config**: Configuration files
- **docs**: Documentation

## Getting Started

### Prerequisites
- AWS CLI configured
- Node.js installed

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

3. Deploy the stack using AWS SAM or Serverless framework.

### Endpoints
- `POST /create-account`: Creates a new user
- `POST /login`: Authenticates a user

POST https://{api-id}.execute-api.{region}.amazonaws.com/dev/create-account
Content-Type: application/json
{
    "username": "exampleUser",
    "password": "examplePass",
    "action": "/create-account"
}


POST https://{api-id}.execute-api.{region}.amazonaws.com/dev/login
Content-Type: application/json
{
    "username": "exampleUser",
    "password": "examplePass",
     "action": "/login"
}
