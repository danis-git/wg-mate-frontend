import React from "react";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import {AuthenticationService} from "../../../api/AuthenticationService";
import {useNavigate} from "react-router-dom";
import {UserService} from "../../../api/UserService";
import {ErrorAlert} from "../../ErrorAlert";
import {UserMapper} from "../../../model/mapper/user.mapper";

function LoginForm() {

    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");

    async function handleLogin(event) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        try {
            const res = await AuthenticationService.login(
                data.get("email"),
                data.get("password")
            );
            setUserService(res);

            navigate("../", {replace: true});
        } catch (e) {
            setErrorMessage("Example Error");
            console.log(e);
        }
    }

    function setUserService(response) {
        UserService.setUser(new UserMapper().fromJson(response.data));
    }

    return (
        <div className={"login form"}>
            <Box component="form"
                 onSubmit={handleLogin.bind(this)}>
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                />

                <TextField
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                />

                <button className={"primary button"}
                        type={"submit"}>
                    Login
                </button>
            </Box>

            <ErrorAlert errorMsg={errorMessage}/>

        </div>
    );

}

export default LoginForm;



