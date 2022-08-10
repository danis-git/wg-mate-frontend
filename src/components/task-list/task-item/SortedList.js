import React, {useEffect, useState} from "react";
import "./SortedList.css";

export default function SortedList(props) {

    const test = [];
    //console.log(test);
    const [checkedI,setChecked] = useState({});
    const [uncheckedI,setUnchecked] = useState(props.unCheckedItems);

    let checkedItems = props.checkedItems;
    let uncheckedItems = props.unCheckedItems;
    checkedItems.map((task)=>{
        test.push({
            task
        })
    });

    console.log(test);
    function handleCheck(event) {
        console.log(checkedI);
        const {index, name, checked, key, value} = event.target;

        console.log(event.target);
        console.log(event.target.key);

        if (checked) {
            //console.log("ja");
            const temp = uncheckedI;
            const lol = temp.find(item => Number(item.id) === Number(value));
            //let lol = uncheckedItems.find(item => Number(item.id) === Number(value));

            const i = temp.findIndex(item => Number(item.id) === Number(value));
            temp.splice(i, 1);
            setUnchecked(temp);
            const temp2 = checkedI;
            setChecked(temp2.concat(lol));
            //checkedItems = checkedItems.concat(lol);
        }
    }

    function lol(event) {
        console.log("Not finished");
    }

    return (
        <div>
            Open Tasks
            <div className={"checkedItems"}>
                {uncheckedItems.map((item, index) => (
                    <div key={item.id} className={"item"}>
                        <input
                            value={item.id}
                            type="checkbox"
                            name="checkedItems"
                            onChange={handleCheck.bind(this)}
                        />
                        <span className="itemContent">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>

            Closed Task
            <div>
                {checkedItems.map((item, index) => (
                    <div key={index.id} >
                        <input
                            value={index.id}
                            type="checkbox"
                            name="checkedMembers"
                            onChange={lol.bind(this)}
                        />
                        <span className="checked">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
