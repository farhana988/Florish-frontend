# Florish (Node.js + Express + Prisma)

This is the frontend interface of the Plant E-commerce Platform.
The application is built with Nextjs, TypeScript, Tailwind CSS, and communicates with a Node.js/Express backend.

Users can browse plants, manage cart & wishlist, place orders, update profiles, and manage addresses.

- Live Website URL: https://florish-frontend.vercel.app
- Backend API URL: https://florish-backend.onrender.com

## Features

🛒 E-commerce Core

- Browse all plants
- View plant details
- Add/remove wishlist items
- Add/update cart items
- Checkout & order placement

🔐 User System

- Register & Login
- JWT-based authentication
- View & update user profile
- Change password
- Manage shipping addresses

📦 Orders

- Create orders
- View all previous orders
- View order details
- Payment confirmation UI

🌱 Admin Features (if implemented)

- Add/update/delete plants
- Manage users
- Update order status

🛠️ Technology Stack

- Next.js
- Tailwind CSS
- React Hook Form + Zod Validation
- Lucide react

## 🧪 Development & Running Locally

### Clone the Repository

```bash
https://github.com/farhana988/Florish-frontend.git
cd Florish-frontend
```

### Install Dependencies

```bash
npm install
```

### Create a .env.local file and add:

```bash
BASE_URL=your_api_key
JWT_ACCESS_SECRET=your_jwt_secret_here
JWT_REFRESH_SECRET=your_refresh_token_secret
```

### Run the Frontend

```bash
npm run dev
```
