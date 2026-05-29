# employee-management-system
Backend: - Spring Boot - Spring Security - JWT - MySQL - Redis - Eureka - API Gateway  Frontend: - Angular 20 - Bootstrap  ## Features  - JWT Authentication - Employee CRUD - Pagination - Sorting - Filtering - Bulk Upload - Redis Cache - Docker Support
# Employee Management System - Microservices Architecture

## Overview

Employee Management System is a Full Stack Microservices-based application developed using Spring Boot, Spring Cloud, Angular, JWT Authentication, API Gateway, Eureka Discovery, Redis, Docker, and MySQL.

This project demonstrates enterprise-level backend architecture with secure authentication, service communication, centralized routing, analytics APIs, file upload service, and Angular frontend integration.

---

# Project Architecture

## Microservices Included

* API Gateway Service
* Eureka Discovery Server
* Auth Service
* Employee Service
* Analytics Service
* File Service
* Angular Frontend

---

# Architecture Flow

```text
Angular Frontend
        |
        v
API Gateway (8080)
        |
---------------------------------------------------
|          |            |             |            |
v          v            v             v            v
Auth     Employee    Analytics     File       Eureka
Service   Service      Service     Service     Server
```

---

# Tech Stack

## Backend

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Cloud Gateway
* Eureka Discovery Server
* Spring Data JPA
* Hibernate
* MySQL
* Redis Cache
* Maven

## Frontend

* Angular 21
* TypeScript
* Bootstrap
* RxJS
* Angular Router
* Reactive Forms

## DevOps & Tools

* Docker
* Docker Compose
* Swagger / OpenAPI
* Git & GitHub
* Postman
* Eclipse IDE
* VS Code

---

# Features

## Authentication

* User Registration
* Login Authentication
* JWT Token Generation
* Role-based Authentication
* Secure APIs

## Employee Management

* Add Employee
* View Employee List
* Update Employee
* Delete Employee
* Search Employees

## Analytics Service

* Total Employees Count
* IT Department Count
* HR Department Count
* Non-IT Department Count

## File Service

* Upload Files
* Download Files
* File Storage APIs

## API Gateway

* Centralized Routing
* Authentication Validation
* Request Forwarding
* CORS Configuration

## Eureka Discovery

* Dynamic Service Registration
* Service Discovery
* Load Balancing Support

---

# Microservices Ports

| Service           | Port |
| ----------------- | ---- |
| API Gateway       | 8080 |
| Eureka Server     | 8761 |
| Auth Service      | 8081 |
| Employee Service  | 8082 |
| Analytics Service | 8083 |
| File Service      | 8084 |
| Angular Frontend  | 4200 |

---

# API Endpoints

## Auth Service

### Register User

```http
POST /auth/register
```

### Login User

```http
POST /auth/login
```

---

## Employee Service

### Get All Employees

```http
GET /employees
```

### Add Employee

```http
POST /employees
```

### Update Employee

```http
PUT /employees/{id}
```

### Delete Employee

```http
DELETE /employees/{id}
```

---

## Analytics Service

### Total Employees

```http
GET /analytics/totalEmployees
```

### Total IT Employees

```http
GET /analytics/totalIT
```

### Total HR Employees

```http
GET /analytics/totalHR
```

### Total Non-IT Employees

```http
GET /analytics/totalNonIT
```

---

## File Service

### Upload File

```http
POST /files/upload
```

# Eureka Dashboard

```text
http://localhost:8761
```

---

# Angular Frontend

```text
http://localhost:4200
```

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/deepikapaturde/employee-management-system.git
```

---

# Backend Setup

## Step 1

Start Eureka Server

```bash
Run EurekaServerApplication
```

## Step 2

Start Auth Service

```bash
Run AuthServiceApplication
```

## Step 3

Start Employee Service

```bash
Run EmployeeServiceApplication
```

## Step 4

Start Analytics Service

```bash
Run AnalyticsServiceApplication
```

## Step 5

Start File Service

```bash
Run FileServiceApplication
```

## Step 6

Start API Gateway

```bash
Run ApiGatewayApplication
```

---

# Frontend Setup

## Install Dependencies

```bash
npm install
```

## Run Angular Application

```bash
ng serve
```

---

# Docker Setup

## Build Docker Containers

```bash
docker-compose up --build
```

---

# Redis Setup

## Start Redis

```bash
docker run -d -p 6379:6379 redis
```

---

# Screenshots

## Login Page

(Add Screenshot Here)

## Dashboard

(Add Screenshot Here)

## Employee List

(Add Screenshot Here)

## Swagger UI

(Add Screenshot Here)

## Eureka Dashboard

(Add Screenshot Here)

---

# Future Enhancements

* Kafka Integration
* CI/CD Pipeline
* Kubernetes Deployment
* Role Based Access Control
* Email Notifications
* Monitoring & Logging
* Unit Testing
* Performance Optimization

---

# GitHub Repository

Repository Link:

https://github.com/deepikapaturde/employee-management-system

---

# Author

Deepika Paturde

Senior Software Engineer | Java Full Stack Developer

---

# Conclusion

This project demonstrates enterprise-level microservices architecture using Spring Boot and Angular with secure authentication, API Gateway routing, service discovery, analytics APIs, Docker support, and scalable backend services.
