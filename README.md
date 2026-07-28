<h1 align="center">
✈️ Flight & Search Service
</h1>

<h3 align="center">
Microservice responsible for Flight, Airport and City Management
</h3>

<p align="center">

<img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/MySQL-Amazon_RDS-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Sequelize-ORM-52B0E7?style=for-the-badge&logo=sequelize">
<img src="https://img.shields.io/badge/REST-API-success?style=for-the-badge">

</p>

---

# 📖 Overview

The **Flight & Search Service** manages all airline-related resources including **Cities, Airports, Airplanes and Flights**.

It provides REST APIs for creating and searching flights while maintaining relationships between airports, cities and aircraft. This service acts as the core business module of the Airline Booking System.

---

# 🚀 Features

- 🏙️ City Management
- 🛫 Airport Management
- ✈️ Flight Management
- 🛩️ Airplane Management
- 🔍 Flight Search
- 🪑 Seat Information
- 🛠 Sequelize ORM
- 🗄 MySQL Database
- ☁️ Amazon RDS Support

---

# 🏗 Architecture

```text
            Client
               │
               ▼
      Flight Service (3000)
               │
      ┌────────┴────────┐
      ▼                 ▼
 Flight APIs      Search APIs
               │
               ▼
      Amazon RDS (MySQL)
```

---

# 📁 Project Structure

```text
FlightAndSearchService
│
├── src
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── migrations
│   ├── seeders
│   ├── models
│   ├── repositories
│   ├── routes
│   ├── services
│   ├── utils
│   └── index.js
│
├── package.json
├── .env
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file.

```env
PORT=3000
```

Database configuration (`config/config.json`)

```json
{
  "development": {
    "username": "admin",
    "password": "YOUR_PASSWORD",
    "database": "Flights_search_DB_DEV",
    "host": "YOUR_RDS_ENDPOINT",
    "dialect": "mysql"
  }
}
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Lovejindal1/FlightAndSearchService.git
```

Move into the project

```bash
cd FlightAndSearchService
```

Install dependencies

```bash
npm install
```

Run database migrations

```bash
npx sequelize-cli db:migrate
```

Run seeders (optional)

```bash
npx sequelize-cli db:seed:all
```

Start the server

```bash
npm start
```

---

# 📡 API Endpoints

## City

Create City

```http
POST /api/v1/city
```

Get All Cities

```http
GET /api/v1/city
```

Get City

```http
GET /api/v1/city/:id
```

Update City

```http
PATCH /api/v1/city/:id
```

Delete City

```http
DELETE /api/v1/city/:id
```

---

## Airport

Create Airport

```http
POST /api/v1/airports
```

---

## Flight

Create Flight

```http
POST /api/v1/flights
```

Get All Flights

```http
GET /api/v1/flights
```

Get Flight

```http
GET /api/v1/flights/:id
```

Update Flight

```http
PATCH /api/v1/flights/:id
```

---

# 🗄 Database Tables

The service maintains the following tables:

- Cities
- Airports
- Airplanes
- Flights

### Relationships

```text
City
 │
 └──────► Airport
              │
              │
              ▼
           Flight
              ▲
              │
         Airplane
```

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MySQL |
| ORM | Sequelize |
| API | REST |
| Deployment | AWS EC2 |
| Database Hosting | Amazon RDS |

---

# 🔗 Used By

This service is consumed by

- API Gateway
- Booking Service

to retrieve flight information and validate flight availability.

---

# 🌍 Part of

This repository is one of the microservices of the **Airline Booking System**.

Main Repository

https://github.com/Lovejindal1/Airline-Booking-System

---

# 👨‍💻 Author

## Love Jindal

Backend Developer

### Connect with me

- GitHub: https://github.com/Lovejindal1
- LinkedIn: https://www.linkedin.com/in/love-kumar-jindal/

---

⭐ If you found this project useful, consider giving it a star.