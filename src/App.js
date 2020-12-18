import React from 'react';
import LoginAction from './LoginAction';
import NewTweet from './NewTweet';

import './styles.css';
import Tweets from './Tweets';

const App = () => {
    return (
        <div className="main">
            <LoginAction />
            <NewTweet />
            <Tweets />
        </div>
    );
};

export default App;
