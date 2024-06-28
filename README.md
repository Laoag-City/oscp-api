# Laoag City One Stop Construction Permit ReST API

Welcome to the Laoag City One Stop Construction Permit (OSCP) REST API! This API allows users to streamline the process of applying for, tracking, and managing construction permits.

Whether you are a contractor, homeowner, or government official, this API provides all the necessary endpoints to handle construction permits efficiently.

Table of Contents
Getting Started
Authentication
Endpoints
Permit Applications
Permit Status
Inspections
Payments
Documents
User Management
Error Handling
Rate Limiting
Changelog
Contributing
License
Getting Started

To get started with the One Stop Construction Permit REST API, follow these steps:

**Not implemented**

Sign Up: Create an account on our platform to get access to the API.

API Key: Once your account is created, generate an API key from the dashboard.

Base URL: Use the following base URL for all API requests:

```sh
https://apis.example.gov.ph/oscp/v1
```

## Authentication is via tokens (JWT)

All API requests must include the API key in the request headers for authentication. The header should be formatted as follows:

```makefile
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### Permit Applications

#### Some are WIP's

```makefile
 
    ### Create a Permit Application

    POST /application
    Request Body: JSON object containing permit details (e.g., project type, address, applicant information)
    Response: JSON object with the created permit application details
    
    ### Get Permit Application

    GET /application/:permit_id
    Response: JSON object with the permit application details

    ### Update a Permit Application

    PUT /permitsap/:permit_id
    Request Body: JSON object with updated permit details
    Response: JSON object with the updated permit application details

    ### Delete a Permit Application

    DELETE /permits/:permit_id
    Response: Status message indicating the deletion status
```

#### Permit Status

```makefile
    ### Get Permit Status

    GET /permits/{permit_id}/status
    Response: JSON object with the current status of the permit
```

#### Inspections

```makefile
    ### Schedule an Inspection

    POST /inspections
    Request Body: JSON object containing inspection details (e.g., permit ID, inspection date)
    Response: JSON object with the scheduled inspection details
    
    ### Get Inspection Details

    GET /inspections/{inspection_id}
    Response: JSON object with the inspection details
```

#### Payments


```makefile
    ### Make a Payment

    POST /payments
    Request Body: JSON object containing payment details (e.g., permit ID, amount)
    Response: JSON object with the payment confirmation

    ### Get Payment Details

    GET /payments/{payment_id}
    Response: JSON object with the payment details
```

#### Documents


```makefile
    ### Upload a Document

    POST /documents
    Request Body: FormData with document file and related metadata
    Response: JSON object with the uploaded document details

    ### Get Document Details

    GET /documents/{document_id}
    Response: JSON object with the document details
```

#### User Management

```makefile
    ### Create a User

    POST /users
    Request Body: JSON object containing user details (e.g., name, email, role)
    Response: JSON object with the created user details

    ### Get User Details

    GET /users/{user_id}
    Response: JSON object with the user details

    ### Update a User

    PUT /users/{user_id}
    Request Body: JSON object with updated user details
    Response: JSON object with the updated user details

    ### Delete a User

    DELETE /users/{user_id}
    Response: Status message indicating the deletion status
```

#### Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. Here are some common status codes:
    200 OK: The request was successful.
    201 Created: The resource was successfully created.
    400 Bad Request: The request was invalid or cannot be served.
    401 Unauthorized: Authentication failed or user does not have permissions.
    404 Not Found: The requested resource could not be found.
    500 Internal Server Error: An error occurred on the server.

**Rate Limiting**
    To ensure fair usage and prevent abuse, the API is rate-limited. The default rate limit is 1000 requests per hour. If the rate limit is exceeded, the API will return a 429 Too Many Requests status code.

**Changelog**

v.0.1: Initial release of the One Stop Construction Permit REST API.

**Contributing**

We welcome contributions to improve the API! Please follow these steps to contribute:

Fork the repository.

- Create a new branch for your feature or bugfix.
- Make your changes and commit them with clear messages.
- Push your changes to your fork.
- Submit a pull request to the main repository.

**License**

This API is licensed under the MIT License. See the LICENSE file for more details.

For any questions or support, please contact our support team at <apps@laoagcity.gov.ph>.
