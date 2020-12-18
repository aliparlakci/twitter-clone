import React, { useEffect, useState } from 'react';
import { useFirebase } from './FirebaseProvider';
import Tweet from './Tweet';

const Tweets = () => {
    const { client } = useFirebase();
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const db = client.firestore();

        const unsubscribe = db
            .collection('tweets')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                const docs = [];

                snapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });

                setTweets(docs);
            });

        return unsubscribe;
    }, [client]);

    return (
        <div className="tweets">
            {tweets.map((tweet, index) => (
                <Tweet id={index} data={tweet} />
            ))}
        </div>
    );
};

export default Tweets;
