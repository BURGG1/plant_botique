import { Navigate } from "react-router-dom";

// Wraps any route that requires the user to be logged in.
// Usage: <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
export default function ProtectedRoute({ children }) {
  const role = localStorage.getItem("role");
  return role ? children : <Navigate to="/login" replace />;
}