# Google-Keep-Clone-Backend-Swagger-API
# Notes API

The Notes API is a RESTful web service that allows users to create, retrieve, update, and delete notes. It provides endpoints to perform CRUD operations on notes, as well as search for notes based on specific criteria.

## Endpoints

The following endpoints are available in the Notes API:

### Create a Note

- **Endpoint:** `/api/notes`
- **Method:** POST
- **Description:** Creates a new note with the provided details.
- **Request Body:**
  - `image`: (optional) The image file associated with the note.
  - `title`: (required) The title of the note.
  - `content`: (required) The content of the note.
  - `list`: (optional) An array of strings representing list items.
  - `tags`: (optional) An array of strings representing tags.
- **Response:**
  - Status 201 (Created): Returns the created note in the response body.
  - Status 500 (Internal Server Error): Returns an error message if an error occurs during the note creation process.

### Get All Notes

- **Endpoint:** `/api/notes`
- **Method:** GET
- **Description:** Retrieves all existing notes.
- **Response:**
  - Status 200 (OK): Returns an array of all notes in the response body.
  - Status 500 (Internal Server Error): Returns an error message if an error occurs during the retrieval process.

### Get a Note by ID

- **Endpoint:** `/api/notes/{id}`
- **Method:** GET
- **Description:** Retrieves a note with the specified ID.
- **Path Parameter:**
  - `id`: The ID of the note to retrieve.
- **Response:**
  - Status 200 (OK): Returns the requested note in the response body.
  - Status 404 (Not Found): Returns an error message if the note with the specified ID is not found.
  - Status 500 (Internal Server Error): Returns an error message if an error occurs during the retrieval process.

### Update a Note

- **Endpoint:** `/api/notes/{id}`
- **Method:** PUT
- **Description:** Updates a note with the specified ID.
- **Path Parameter:**
  - `id`: The ID of the note to update.
- **Request Body:**
  - `title`: (required) The updated title of the note.
  - `content`: (required) The updated content of the note.
  - `list`: (optional) An array of strings representing updated list items.
  - `tags`: (optional) An array of strings representing updated tags.
- **Response:**
  - Status 200 (OK): Returns the updated note in the response body.
  - Status 404 (Not Found): Returns an error message if the note with the specified ID is not found.
  - Status 500 (Internal Server Error): Returns an error message if an error occurs during the update process.

### Delete a Note

- **Endpoint:** `/api/notes/{id}`
- **Method:** DELETE
- **Description:** Deletes a note with the specified ID.
- **Path Parameter:**
  - `id`: The ID of the note to delete.
- **Response:**
  - Status 204 (No Content): Returns no content if the note is successfully deleted.
  - Status 404 (Not Found): Returns an error message if the note with the specified ID is not found.
  - Status 500 (Internal Server Error): Returns an error message if an error occurs during the deletion process.

### Search for Notes

- **Endpoint:** `/api/notes/search`
- **Method:** GET
- **Description:** Searches for notes based on

 a provided query.
- **Query Parameter:**
  - `query`: The search query string.
- **Response:**
  - Status 200 (OK): Returns an array of notes that match the search query in the response body.
  - Status 500 (Internal Server Error): Returns an error message if an error occurs during the search process.

## Swagger Documentation

The API endpoints and their details are documented using Swagger. Swagger is a tool that helps in designing, building, documenting, and consuming RESTful web services. The Swagger documentation provides a comprehensive overview of the API's capabilities, request and response details, and parameter descriptions.

You can access the Swagger documentation for the Notes API by navigating to the base URL of the API in your browser. For example, if the API is hosted at `https://example.com/api/notes`, you can access the Swagger documentation at `https://example.com/api-docs`.

## Code Quality Analysis with SonarCloud

SonarCloud is used to analyze the code quality and identify potential issues or vulnerabilities in the application's codebase. It provides insights into code smells, bugs, vulnerabilities, and code coverage, helping developers improve the quality of their code.

The codebase of the Notes API has been analyzed using SonarCloud to ensure that it follows best practices and meets the defined quality standards. The analysis helps in identifying areas that need improvement, making the codebase more robust and maintainable.

## Getting Started

To get started with the Notes API, follow these steps:

1. Clone the repository to your local machine.
2. Set up the required environment variables (such as database connection details, file storage configuration, etc.).
3. Install the dependencies by running `npm install`.
4. Start the API server by running `npm start`.
5. Access the API endpoints using the provided base URL (e.g., `http://localhost:5000/api/notes`).

Make sure to refer to the API documentation for more details on how to interact with the endpoints and the expected request/response formats.

## Conclusion

The Notes API provides a flexible and scalable solution for managing notes. With its comprehensive set of endpoints, you can easily create, retrieve, update, and delete notes, as well as perform search operations to find specific notes. The Swagger documentation and code quality analysis with SonarCloud ensure that the API is well-documented, follows best practices, and maintains a high level of code quality.

Feel free to explore the API, integrate it into your applications, and contribute to its further development and enhancement. If you encounter any issues or have suggestions for improvement, please submit them through the appropriate channels to help make the Notes API even better.
