import React from 'react';
import AddIcon from "../../../assets/plus-grey.png";
import {Link} from "react-router-dom";

const OverviewCreate = () =>{
    return(
        <div className={"flats"}>
            <Link to={'/new-flat'} className={"link"}>
                <button className={"flat dashed"}>
                    <br/>
                    <span className={"addPlus"}>
                        <img className={"icon plus"}
                             src={AddIcon}
                             alt="AddIcon"/>
                    </span>
                    <br/>
                    <span className={"addFlat"}>Add flat</span>
                </button>
            </Link>
        </div>
    );
}
export default OverviewCreate;
