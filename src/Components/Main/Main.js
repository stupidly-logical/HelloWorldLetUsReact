import React, { Component } from 'react';
import './Main.css';
import logo from '../../logo.svg';

class Main extends Component {

    render() {
        return (
            <div className="Main">
                <div className="container">
                    <div className="page-header">
                        <h1>Hello World! <small>Let Us React</small></h1>
                        <h2><small>18<sup>th</sup> September 2018</small></h2>
                    </div>
                    <div className="container text-center">
                        <p>
                            Download and run this project:
                        </p>
                        <kbd>$ git clone https://github.com/stupidly-logical/HelloWorldLetUsReact.git</kbd><br/>
                        <kbd>$ cd HelloWorldLetUsReact</kbd><br/>
                        <kbd>$ npm start</kbd>
                    </div>
                    <footer className="footer">
                        <div className="container text-center">
                            <span>
                                Created by&nbsp;
                                <a className="btn-link" href="https://stupidly-logical.firebaseapp.com" target="_blank" rel="noopener noreferrer">
                                    <strong>
                                        Yash Krishan Verma
                                    </strong>
                                </a>
                                &nbsp;with&nbsp;
                                <a href="https://getbootstrap.com/docs/3.3/" target="_blank" rel="noopener noreferrer">
                                    Bootstrap
                                </a>
                            </span>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Main;
