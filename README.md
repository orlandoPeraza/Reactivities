# Reactivities

Reactivities is a full-stack web application inspired by social event platforms.  
Users can create, browse, join, and manage activities, interact with other users, and view detailed profiles.

This project was built as a learning and portfolio project to demonstrate modern full-stack development using **.NET**, **React**, and best practices such as **Clean Architecture**, **CQRS**, and **JWT authentication**.

---

## 🚀 Features

- User registration and authentication (JWT)
- Create, edit, delete, and cancel activities
- Join or leave activities
- User profiles with profile image support
- Follow / unfollow users
- Photo upload and profile image selection
- Client-side and server-side validation
- Optimistic UI updates for a smoother user experience

---

## 🧱 Tech Stack

### Backend
- **.NET 8**
- **ASP.NET Core Web API**
- **Entity Framework Core** (Code First)
- **CQRS + MediatR**
- **AutoMapper**
- **JWT Authentication**
- **SQLite / SQL Server** (depending on environment)

### Frontend
- **React**
- **TypeScript**
- **React Query (TanStack Query)**
- **Material UI (MUI)**
- **React Router**
- **React Dropzone**

---

## 🏗 Architecture

The backend follows **Clean Architecture** principles:

- Domain layer for core entities and logic
- Application layer using CQRS
- Infrastructure layer for data access and external services
- API layer as the entry point

This structure ensures:
- Separation of concerns
- Testability
- Maintainability
- Scalability

---

## ⚙️ Getting Started

### Prerequisites
- .NET 8 SDK
- Node.js (v18+ recommended)
- npm or yarn

---

### Backend Setup

```bash
cd API
dotnet restore
dotnet ef database update
dotnet run
