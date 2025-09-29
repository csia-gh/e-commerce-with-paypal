# E-Commerce Platform with PayPal Integration

Full-stack e-commerce application with shopping cart, user authentication, and secure PayPal payment processing.

## 🚀 Tech Stack

**Frontend:**
- React
- Redux (state management)
- React Router
- Axios
- Bootstrap / React-Bootstrap

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- PayPal REST API
- bcrypt (password hashing)

## ✨ Features

### Customer Features
- Browse products with search and filter
- Product details with images and reviews
- Shopping cart management
- User registration and authentication
- User profile with order history
- Secure checkout with PayPal integration
- Order tracking
- Product reviews and ratings

### Admin Features
- Product management (CRUD operations)
- User management
- Order management and status updates
- Dashboard with overview statistics

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- PayPal Developer Account

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PAYPAL_CLIENT_ID=your_paypal_client_id
```

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/csia-gh/e-commerce-with-paypal.git
cd e-commerce-with-paypal
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install
cd ..
```

4. **Seed database (optional)**
```bash
npm run data:import
```

5. **Run the application**
```bash
# Run frontend and backend concurrently
npm run dev

# Or run separately:
npm run server  # Backend only (port 5000)
npm run client  # Frontend only (port 3000)
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
e-commerce-with-paypal/
├── backend/
│   ├── controllers/     # Request handlers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── redux/       # Redux store and slices
│   │   ├── screens/     # Page components
│   │   └── App.js       # Main app component
│   └── public/
└── README.md
```

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Secure payment processing through PayPal
- Input validation and sanitization

## 🚧 Current Status

This project is approximately 75% complete. Upcoming improvements include:
- Backend refactoring to NestJS
- UI redesign with modern component library
- Additional payment methods
- Enhanced admin dashboard
- Product recommendation system

## 📝 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Users
- `POST /api/users/login` - User login
- `POST /api/users/register` - User registration
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/pay` - Update order to paid
- `GET /api/orders/myorders` - Get logged in user orders
