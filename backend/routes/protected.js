// Import required dependencies
const express = require("express");         // Express web framework
const jwt = require("jsonwebtoken");       // JSON Web Token (JWT) library for generating and verifying tokens
const router = express.Router();           // Create a new Express router instance

// Middleware to authenticate JWT token
const authenticate = (req, res, next) => {
  // Extract the token from the Authorization header (assuming it is prefixed with 'Bearer ')
  const token = req.header("Authorization")?.replace("Bearer ", "");
  
  // If no token is provided, respond with a 401 Unauthorized status
  if (!token) return res.status(401).json({ msg: "Access denied" });

  try {
    // Verify the token using the secret key from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Store the decoded user information in the request object for access in the route handler
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // If the token is invalid or expired, respond with a 400 Bad Request status
    res.status(400).json({ msg: "Invalid token" });
  }
};

// Protected Route (only accessible with a valid JWT)
router.get("/data", authenticate, (req, res) => {
  // This route is protected and requires a valid JWT for access.
  // If the JWT is valid, the request will have a 'user' object attached (from the authenticate middleware).
  res.json({ msg: "This is protected data", user: req.user });
});

// Export the router so it can be used in other parts of the application
module.exports = router;