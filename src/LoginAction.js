import React from 'react';
import { useFirebase } from './FirebaseProvider';
import { useSession } from './SessionProvider';

const LoginAction = () => {
    const firebase = useFirebase();
    const user = useSession();

    return (
        <div className="login">
            {user === null && (
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={firebase.signIn}
                >
                    Login
                </button>
            )}
            {user !== null && (
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={firebase.signOut}
                >
                    {user.displayName} | Logout
                </button>
            )}
            {user !== null && (
                <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="pp"
                />
            )}
        </div>
    );
};

export default LoginAction;
