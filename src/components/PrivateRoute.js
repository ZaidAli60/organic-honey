// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/Auth';

export default function PrivateRoute({ children }) {
    const { user } = useAuthContext();

    if (!user || !user.email) {
        // Redirect to cart (where Google login happens)
        return <Navigate to="/cart" replace />;
    }
    return children;
}
