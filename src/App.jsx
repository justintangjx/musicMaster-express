import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App-title">Trying my hand at spotify clone </div>
                <div><input placeholder="artist's name" />
                <button>button</button></div>
                <div className="Profile"><div>Artist Picture</div>
                <div>Artist Name</div>
                </div>
                <div className="Gallery"> GALLERY </div>
            </div>
        )
    }
}

export default App;

