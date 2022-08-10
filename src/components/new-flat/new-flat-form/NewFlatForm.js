import {TextField} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import {UserService} from "../../../api/UserService";
import {UserMapper} from "../../../model/mapper/user.mapper";
import MemberItem from "./MemberListItem";
import {FlatService} from "../../../api/FlatService";
import {ErrorAlert} from "../../ErrorAlert";
import {SaveButton} from "../../SaveButton";


export default function NewFlatForm() {

    const [memberEmail, setMemberEmail] = React.useState("");
    const [memberList, setMemberList] = React.useState([]);

    const [userErrorMessage, setUserErrorMessage] = React.useState("");
    const [flatErrorMessage, setFlatErrorMessage] = React.useState("");


    async function handleNewFlat(event) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        try {
            const res = await FlatService.createFlat(
                data.get("flatName"),
                data.get("area"),
                memberList
            );

            console.log(res);
        } catch (e) {
            setFlatErrorMessage("Couldn't create Flat");
            console.error(e);
        }
    }

    async function handleNewMember(event) {
        event.preventDefault();

        try {
            const res = await UserService.getUserByEmail(memberEmail);

            let newMember = new UserMapper().fromJson(res.data);
            const newList = memberList.concat(newMember);

            setMemberList(newList);
            setMemberEmail("");
        } catch (e) {
            setUserErrorMessage("User doesn't exist");
        }
    }

    function setEmail(event) {
        setMemberEmail(event.target.value);
    }

    function memberInputButton() {
        return <div className={"input-button-group"}>
            <TextField
                label="Email"
                variant="outlined"
                name="member-email"
                sx={{
                    mb: 0,
                    '& fieldset': {
                        borderRadius: '8px 0 0 8px',
                    },
                }}
                onChange={setEmail.bind(this)}
            />
            <button className={"primary button"}
                    onClick={handleNewMember.bind(this)}
                    type={"button"}>
                <AddIcon fontSize={"large"}></AddIcon>
            </button>
        </div>;
    }

    function printMembers() {
        return memberList.map((item) => (
            <MemberItem key={item.id} value={item.name}/>
        ));
    }

    return (
        <div className={"new-flat form"}>
            <Box component="form" onSubmit={handleNewFlat.bind(this)}>
                <h2>Details</h2>
                <TextField
                    label="Name"
                    variant="outlined"
                    name="flatName"
                />

                <TextField
                    label="Area in m²"
                    variant="outlined"
                    name="area"
                />

                <h2>Members</h2>
                {memberInputButton()}
                <ErrorAlert errorMsg={userErrorMessage}/>

                {printMembers()}

                <SaveButton/>
                <ErrorAlert errorMsg={flatErrorMessage}/>
            </Box>
        </div>
    );
}