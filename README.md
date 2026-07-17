![Cypress](https://img.shields.io/badge/Cypress-15.x-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

# QA Serverest Cypress

Automated testing project developed with **Cypress** and **JavaScript** for the **ServeRest** application.

The project covers **End-to-End** and **API** testing following QA Engineering best practices, with emphasis on maintainability, scalability, readability and code reuse.

---

# Overview

This project was created as a technical challenge with the objective of building a scalable automation framework instead of only implementing automated scenarios.

The solution was designed following a layered architecture, separating responsibilities between UI interactions, API communication, selectors and reusable utilities.

The implemented scenarios prioritize **business risk** over quantity, covering the application's main critical flows.

---

# Quick Start

Clone the repository

```bash
git clone https://github.com/elk92/qa-serverest-cypress
```

Install dependencies

```bash
npm install
```

Run quality validation

```bash
npm run quality
```

---

# Technologies

- Cypress
- JavaScript (ES6+)
- Faker
- ESLint
- Git
- GitHub

---

# Architecture

The project follows a layered architecture to improve readability, maintenance and scalability.

```
                Test Scenarios
                       │
         ┌─────────────┴─────────────┐
         │                           │
    Frontend                    API Tests
         │                           │
     Actions                    Services
         │                           │
     Selectors                 API Client
                │
           Data Factory
```

### Actions

Encapsulate user interactions.

### Selectors

Centralize page locators.

### Services

Centralize API communication.

### Utils

Reusable shared components.

- API Client
- Constants
- Data Factory

---

# Project Structure

```text
cypress
│
├── actions
├── selectors
├── services
├── utils
├── fixtures
├── support
│   └── e2e.js
│
└── e2e
    ├── frontend
    └── api
```

---

# Test Coverage

## Frontend (E2E)

| Scenario | Status |
|----------|--------|
| Login with valid credentials | ✅ |
| User registration | ✅ |
| Invalid login | ✅ |

---

## API

### Authentication

| Scenario | Status |
|----------|--------|
| Successful login | ✅ |
| Invalid credentials | ✅ |

### Users

| Scenario | Status |
|----------|--------|
| Create user | ✅ |
| Duplicate email | ✅ |
| Delete user | ✅ |

### Products

| Scenario | Status |
|----------|--------|
| Create product | ✅ |
| Duplicate product | ✅ |
| Missing authentication | ✅ |
| Delete product | ✅ |

---

# Running the Project

Install dependencies

```bash
npm install
```

Open Cypress

```bash
npm run cy:open
```

Run all tests

```bash
npm run test:all
```

Run API tests

```bash
npm run test:api
```

Run Frontend tests

```bash
npm run test:frontend
```

Run ESLint

```bash
npm run lint
```

Run complete quality validation

```bash
npm run quality
```

---

# Design Decisions

The automation framework was built using the following engineering principles:

- Layered architecture
- Separation of responsibilities
- Reusable Services
- Centralized Selectors
- Dynamic test data generation
- Independent test scenarios
- API abstraction through API Client
- Maintainable project structure
- Risk-based test selection

---

# Future Improvements

The following improvements were intentionally left outside the challenge scope.

- GitHub Actions (CI/CD)
- Mochawesome reports
- Cross-browser execution
- Parallel execution
- Contract Testing
- Performance Testing
- Dockerized execution

---

# Author

**Elcio Santos Filho**

Senior QA Engineer