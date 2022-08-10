import React from "react";
import BackIcon from "../assets/back.png";
import logoutIcon from "../assets/logOut.png";
import settingsIcon from "../assets/settings.png";
import {Link} from "react-router-dom";

export function Header(props) {

    let useBack = props.back;
    let useSettings = props.settings;
    let useLogout = props.logout;

    return (
        <div className={"header"}>

            {useBack &&
                <div className="back">
                    <Link to={'/'} className={"link"}>
                        <img className={"icon"}
                             src={BackIcon}
                             alt="BackIcon"/>
                        Back
                    </Link>
                </div>
            }

            <div className="inOneLine">
                <h1>{props.caption}</h1>

                {useLogout &&
                    <div className="logout">
                        <Link to={'/'} className={"link"}>
                            logout
                            <img className={"icon"}
                                 src={logoutIcon}
                                 alt="logout"/>
                        </Link>
                    </div>
                }
                {useSettings &&
                    <div className="settings">
                        <Link to={'/settings'} className={"link"}>
                            <img className={"icon"}
                                 src={settingsIcon}
                                 alt="settings"/>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}