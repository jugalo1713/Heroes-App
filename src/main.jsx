import { AppRouter } from './router/AppRouter';
import { render } from 'preact'
import { RouterProvider } from "react-router-dom";
import './styles.css'
import { AuthProvider } from './auth/context/AuthProvider';

const router = AppRouter();
render(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    , document.getElementById('app'))
