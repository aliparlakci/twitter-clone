import React from 'react';
import { useFirebase } from './FirebaseProvider';
import { useSession } from './SessionProvider';

const LoginButton = () => {
    const firebase = useFirebase();
    const user = useSession();

    return (
        <div className="login">
            {user === null && (
                <button
                    type="button"
                    className="btn btn-primary"
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
        </div>
    );
};

export default LoginButton;
