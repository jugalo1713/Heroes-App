import React from 'react'
import { AuthProvider } from './auth/context/AuthProvider'

export const Root = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    )
}
