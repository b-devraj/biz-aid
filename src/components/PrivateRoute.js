import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// Checking to see if there is a current User
export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
    return (
        <Route {...rest} render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}>
        </Route>
    )
}
