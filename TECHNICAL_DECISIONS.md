# Technical Decisions

## Purpose

This document describes the main architectural and technical decisions adopted during the implementation of this automation project.

The goal was not only to automate scenarios but also to create a maintainable and scalable automation framework.

---

# Challenge Understanding

The challenge required:

- End-to-End automation
- API automation
- Good development practices
- Code organization
- Maintainability

Instead of implementing only the minimum required scenarios, the solution was designed to provide a reusable automation foundation.

---

# Scenario Selection

Scenarios were selected based on business risk instead of quantity.

Frontend:

- Login
- User Registration
- Invalid Login

API:

Authentication

- Valid Login
- Invalid Login

Users

- Create User
- Duplicate User
- Delete User

Products

- Create Product
- Duplicate Product
- Missing Authentication
- Delete Product

---

# Automation Strategy

The automation strategy was based on business risk.

Instead of maximizing the number of scenarios, priority was given to critical user journeys and core API operations.

Covered domains:

- Authentication
- Users
- Products

---

# Layered Architecture

The project follows a layered architecture.

```
Tests
 │
 ├── Actions
 │
 ├── E2E
 │
 ├── Selectors
 │
 ├── Services
 │
 ├── Support
 │
 └── Utils
```

Each layer has a single responsibility.

---

# Why Cypress?

Cypress was selected because it provides:

- Fast execution
- Native browser interaction
- Built-in assertions
- API testing support
- Easy debugging

---

# Why JavaScript?

JavaScript was selected because:

- Native Cypress support
- Low setup complexity
- Fast development cycle
- Good readability

---

# Why Services?

API communication is centralized inside Services.

Benefits:

- Reusability
- Easier maintenance
- Reduced code duplication

---

# Why Actions and Selectors?

Frontend interactions were separated into Actions and Selectors.

Benefits:

- Cleaner test scenarios
- Easier selector maintenance
- Better readability

---

# Why Data Factory?

Dynamic test data avoids collisions between executions.

The Faker library generates unique users and products.

Benefits:

- Independent executions
- Reduced flaky tests
- Better scalability

---

# Why No Page Objects?

Considering the scope of the challenge, introducing Page Objects would increase complexity without providing significant benefits.

Actions and Selectors provide enough abstraction while keeping the project lightweight.

---

# Test Independence

Each test is self-contained.

Tests do not depend on execution order.

This approach enables:

- Parallel execution
- Better stability
- Easier maintenance

---


# Scalability

The project structure allows new domains to be added without architectural changes.

Future modules can reuse:

- Services
- Actions
- Selectors
- Data Factory
- API Client

---

# Future Improvements

Possible future evolutions include:

- GitHub Actions CI/CD
- Parallel execution
- Mochawesome Reports
- Contract Testing
- Cross-browser execution
- Docker support

---

# Final Considerations

The focus of this implementation was to deliver a maintainable automation framework rather than isolated automated scripts.

The project emphasizes:

- Readability
- Maintainability
- Reusability
- Scalability
- Engineering best practices