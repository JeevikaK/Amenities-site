# Amenities-Booking

<p>Avoid the rush and wait time to enjoy your favorite amentities by booking in advance on the Amenities Booking WebApp</p>
Features

## Features

- User authentication (signup/login)
- Amenity selection
- Date and time slot booking
- Booking confirmation with unique booking ID
- Booking management

## Technologies Used

- Frontend: ReactJS
- Backend: Node.js with EJS templating
- Database: MongoDB

## Prerequisites

Before installation, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/JeevikaK/Amenities-site.git
cd Amenities-site
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
npm install

# Navigate to frontend directory
cd client
npm install
```

3. Create a `.env` file in the root directory and add the following configuration:
```
MONGODB_URI=mongodb://localhost:27017/amenities-db
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

## Running the Application

1. Start MongoDB service:
```bash
# On Windows
net start MongoDB

# On macOS/Linux
sudo service mongod start
```

2. Start the backend server:
```bash
# From the root directory
npm start
```

3. Start the frontend development server:
```bash
# From the client directory
cd client
npm start
```

## Usage

1. Create a new account or login with existing credentials
2. Select an amenity from the available options
3. Choose your preferred date and time slot
4. Confirm your booking
5. Save the booking ID for future reference
