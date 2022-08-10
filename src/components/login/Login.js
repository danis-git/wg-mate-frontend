import React from "react";
import './Login.css';
import LoginForm from "./login-form/LoginForm";
import {Link} from "react-router-dom";
import {Header} from "../Header";

export class Login extends React.Component {

    render() {
        return (
            <div className={"login page"}>

                <Header caption={"WG MATE"}/>

                <div className={"content"}>
                    <h2>Login</h2>
                    <LoginForm></LoginForm>

                    <div className={"separator"}>
                        <div className={"line"}></div>
                        <label>Or</label>
                        <div className={"line"}></div>
                    </div>

                    <Link to="/">
                        <button className={"secondary button"}>
                            Create new Account
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
