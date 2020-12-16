import React from 'react';
import HelloWorld from '../components/HelloWorld';


function Home() {
    return(
        <div className="app-home">
            <h1>Homepage</h1>
            <HelloWorld name="Laura"/>
        </div>
    )
}

export default Home;