import React, {Component} from 'react';

class LoginForm extends Component {

    handleLogin(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.onSignIn(username, password)
    }

    render() {
        return (
            <form onSubmit={this.handleLogin.bind(this)}>
                <h3>Sign in</h3>
                <input type="text" ref="username" placeholder="enter you username"/>
                <input type="password" ref="password" placeholder="enter password"/>
                <input type="submit" value="Login"/>
            </form>
        )
    }

}

class App extends Component {

    constructor(props) {
        super(props);
    }

    players() {
        let players = [];
        let streams = $.parseJSON(this.props.context['streams']);
        streams.forEach((stream) => {
            let src = "/streams/" + stream.id;
            players.push(
                <div key={stream.id} className="player">
                    <p>{stream.name}</p>
                    <iframe src={src} name="frame" scrolling="no" frameBorder="no" align="center" height="225px"
                            width="400px"/>
                </div>
            )
        });
        return players;
    }


    render() {
        return (
            <div className="main-app">
                <div className="main-body">
                    <p>
                        Fantasy Ticker (coming soon)
                    </p>
                    {this.players()}
                </div>
            </div>
        );
    }
}

export default App;
