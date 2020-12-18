import React, { useState } from 'react';
import { useFirebase } from './FirebaseProvider';
import { useSession } from './SessionProvider';

const NewTweet = () => {
    const [tweet, setTweet] = useState('');
    const [isDisabled, setDisabled] = useState(false);

    const user = useSession();
    const { client } = useFirebase();

    const handleChange = (event) => setTweet(event.target.value.slice(0, 140));

    const handleSubmit = (event) => {
        setDisabled(true);
        setTweet('');

        const db = client.firestore();

        db.collection('tweets')
            .add({
                owner: user.uid,
                ownerName: user.displayName,
                ownerPhoto: user.photoURL,
                text: tweet,
                likedBy: [],
                timestamp: client.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => setDisabled(false));

        event.preventDefault();
    };

    return (
        <div className="newtweet">
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    className="form-control"
                    disabled={isDisabled || user === null}
                    placeholder="What's happening?"
                    value={tweet}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Tweet"
                    disabled={isDisabled || user === null || tweet.length < 1}
                    className="submit_tweet btn btn-primary"
                />
                <span className="tweet_count">{tweet.length} / 140</span>
            </form>
        </div>
    );
};

export default NewTweet;
