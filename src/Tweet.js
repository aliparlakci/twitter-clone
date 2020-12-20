import React from 'react';
import { useFirebase } from './FirebaseProvider';
import { useSession } from './SessionProvider';

const Tweet = ({ data }) => {
    const user = useSession();
    const { client } = useFirebase();

    const deleteTweet = () =>
        client.firestore().collection('tweets').doc(data.id).delete();

    return (
        <div className="tweet_container">
            <img src={data.ownerPhoto} alt={data.owner} className="pp" />
            <div className="tweet_text">
                <span className="tweet_owner">{data.ownerName}</span>
                <span>{data.text}</span>
                <div className="buttons">
                    {user !== null && user.uid === data.owner && (
                        <button
                            className="btn btn-link delete"
                            onClick={deleteTweet}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tweet;
