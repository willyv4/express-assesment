### What is a JWT?

A JWT (JSON Web Token) is a compact and self-contained token used for authentication and authorization in web applications and APIs. It consists of a header, payload, and signature. The header contains the token's type and cryptographic algorithm, the payload includes claims about the entity (e.g., user), and the signature ensures the token's integrity. JWTs allow secure transmission of information and eliminate the need for server-side storage, making them scalable and efficient for distributed systems.

-

### What is the signature portion of the JWT? What does it do?

The signature portion of a JWT is a cryptographic component that ensures the integrity of the token. It is created by combining the encoded header, encoded payload, and a secret key, using a specific algorithm specified in the header. The signature is used to verify that the token has not been tampered with during transmission. When the server receives a JWT, it can compute the signature using the same algorithm and secret key, and compare it with the signature included in the JWT. If they match, the server can trust the authenticity and integrity of the token.

-

### If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, if a JWT is intercepted, the attacker can decode and view the contents of the payload. JWTs are encoded, not encrypted, using Base64Url format, making them easily readable. Therefore, sensitive information should be encrypted separately before being included in a JWT to ensure confidentiality.

-

### How can you implement authentication with a JWT? Describe how it works at a high level.

Authentication with JWT (JSON Web Token) involves generating a token on the server and sending it to the client upon successful login. The token contains encoded user identity information and is signed with a secret key. The client stores the token and includes it in subsequent requests to protected routes. The server verifies the token's signature, extracts the user's identity, and grants access if the token is valid. This eliminates server-side session management and enables stateless authentication, suitable for distributed systems.

-

### Compare and contrast unit, integration and end-to-end tests.

Unit tests, integration tests, and end-to-end tests are distinct types of software tests. Unit tests focus on testing individual components in isolation, verifying their functionality and ensuring they meet their intended purpose. Integration tests, on the other hand, validate the interaction and behavior between multiple components, testing the data flow and communication between them. Lastly, end-to-end tests cover the entire application or system, simulating real user interactions to validate the system's overall functionality and performance.

Unit tests are fast and isolate dependencies using mocks or test doubles. Integration tests involve real or simulated dependencies, making them slower than unit tests. End-to-end tests encompass the entire system and involve all dependencies, resulting in slower test execution. A comprehensive testing strategy often includes a combination of these tests to achieve thorough coverage and ensure software reliability. Unit tests focus on individual components, integration tests cover component interaction, and end-to-end tests validate the overall system functionality.

-

### What is a mock? What are some things you would mock?

A mock is a simulated object used in testing to imitate the behavior of real dependencies or collaborators. It allows developers to control and isolate the component being tested. Examples of things commonly mocked include external services, databases, and complex operations.

-

### What is continuous integration?

Continuous Integration (CI) is a software development practice that involves regularly merging code changes into a shared repository to ensure smooth integration and identify issues early in the development process.

-

### What is an environment variable and what are they used for?

An environment variable is a runtime value that is external to a program and used to provide configuration or runtime information. It allows applications to access dynamic settings without hard-coding them into the codebase, providing flexibility and portability.

Used for things like Configuration (API KEYS, DB connection), Security (Tokens passwords), Deployment.

-

### What is TDD? What are some benefits and drawbacks?

TDD, or Test-Driven Development, is an approach to software development where tests are written before writing the actual implementation code. The TDD process involves writing a test for a specific functionality, implementing the minimal code needed to pass the test, and then refactoring the code as necessary.

TDD improves code quality through thorough validation using tests as a safety net. It enables faster debugging by catching issues early in development, increasing productivity. TDD also promotes better software design by emphasizing interfaces and desired behavior, resulting in modular and maintainable code.

However, TDD has drawbacks. It involves a learning curve and mindset shift, requiring developers to adopt new techniques. Initially, it may slow down development due to writing tests before code. Nonetheless, TDD saves time in the long run by reducing debugging and maintenance efforts. Overemphasizing test coverage is a risk, where quantity overrides quality, leading to inadequate validation of critical code parts.

-

### What is the value of using JSONSchema for validation?

The value of using JSONSchema for validation lies in its ability to define and enforce the structure, data types, and constraints of JSON data. JSONSchema provides a standardized way to describe the expected format and rules of JSON objects, ensuring data integrity and reducing the risk of errors and vulnerabilities.

-

### What are some ways to decide which code to test?

When deciding which code to test, there are several approaches you can consider. One way is to prioritize testing the critical or high-risk components of the codebase. These are the parts that have the potential to cause major issues if they fail. Another approach is to focus on testing the code that undergoes frequent changes, as it's more prone to introducing bugs and regressions. Additionally, it's important to test the code that directly interacts with users, such as the main functionality and user flows, to ensure a smooth user experience. Ultimately, it's about finding the right balance between comprehensive testing and resource constraints.

-

### What does `RETURNING` do in SQL? When would you use it?

In SQL, the `RETURNING` clause allows you to retrieve the modified data from an `INSERT`, `UPDATE`, or `DELETE` statement. It eliminates the need for an extra query by returning the values of specific columns that were affected by the statement, making it useful for immediate access or further processing of the modified data.

-

### What are some differences between Web Sockets and HTTP?

Web Sockets and HTTP are both protocols used in web communication, but they have key differences. HTTP follows a request-response model where a client sends a request to a server, and the server responds with the requested data. It operates over a stateless connection, meaning each request is independent and doesn't retain any information about previous requests. On the other hand, Web Sockets provide full-duplex communication, allowing real-time, bidirectional data exchange between a client and server over a single, long-lived connection. Unlike HTTP, Web Sockets enable server-initiated communication, allowing both the client and server to send data to each other without the need for repeated requests. This makes Web Sockets well-suited for applications requiring real-time updates, such as chat applications, live feeds, and collaborative tools.

-

### Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?

I'm a fan of Express, especially its middleware functionality. Overall, I find JavaScript more appealing than Python, and NPM more convenient to work with than pip and virtual environments. In my experience, testing with Jest is much simpler and more intuitive compared to Python's unit testing. What I particularly love about Express is how it streamlines route management with its straightforward app.use approach, resulting in cleaner and more organized code.

On the other hand, Flask has its own appeal. I found Flask to be more approachable and easier to grasp, particularly for developers who are new to web development or Python. The simplicity and elegance of Flask's design, combined with Python's clean syntax, contribute to a pleasant development experience. Additionally, Flask's lightweight nature makes it well-suited for smaller projects.
