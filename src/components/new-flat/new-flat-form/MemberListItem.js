import DeleteIcon from "../../../assets/plus-red-rotated.png";
import React from "react";

function MemberListItem(props) {
    return <div>
        <img className={"icon"}
             src={DeleteIcon}
             alt="DeleteIcon"/>
        {props.value}
    </div>
}

export default MemberListItem;