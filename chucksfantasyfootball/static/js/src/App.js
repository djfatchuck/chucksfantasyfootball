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
        this.state = {
            loggedin: false,
            overlay: false,
        }
    }

    signIn(username, password) {
        if (username === "djfatchuck" && password === "djfatchuck") {
            this.setState({
                loggedin: true
            })
        }
    }

    players() {
        let players = [];
        let streams = $.parseJSON(this.props.context['streams']);
        streams.forEach((stream) => {
            let src = "/streams/" + stream.id;
            players.push(
                <div key={stream.id} className="player">
                    <p>{stream.title}</p>
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
                {(this.state.overlay) ?
                    <div className="overlay">Fantasy Ticker (coming soon)</div> : null}
                <header className="main-header">
                    <h1 className="main-title">Fat Chuck's Fantasy Football</h1>
                </header>
                {(this.state.loggedin) ?
                    <div className="main-body">
                        <p>
                            Fantasy Ticker (coming soon)
                        </p>
                        {this.players()}
                    </div> :
                    <LoginForm
                        onSignIn={this.signIn.bind(this)}
                    />
                }
            </div>
        );
    }
}

export default App;
