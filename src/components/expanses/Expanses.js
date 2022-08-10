import React, {useEffect, useState} from 'react';
import {Header} from "../Header";
import {useParams} from "react-router-dom";
import ExpansesForm from "./expansesForm/ExpansesForm";
import {ErrorAlert} from "../ErrorAlert";
const Expanses = () => {
    const params = useParams();
    const [bills, setBills] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetchingBills = async () => {
            setLoading(true);
            const response = await fetch("http://localhost:8080/openbills");
            const responseData = await response.json();
            if(!response.ok){
                throw new Error("Something is wrong");
            }
            const loadedBills = [];
            for(const key in responseData){
                loadedBills.push({
                    name: responseData[key].billName,
                    time: responseData[key].time,
                    amount: responseData[key].amount,
                    payer: responseData[key].payer
                })
            }
            setBills(loadedBills);
            setLoading(false);
        }
        fetchingBills().catch(err=>{
            setLoading(false);
            setError(err.message);
        });
    },[]);
    if(loading) {
        return (
            <div className={"overview page"}>
                <Header caption="Your flats" logout={true}/>
                <div className={"content"}>
                    <p>Loading flats...</p>
                </div>
            </div>
        );
    }
    if(error!=null){
        return (
            <div className={"overview page"}>
                <Header caption="Your flats" logout={true}/>
                <div className={"content"}>
                    <ErrorAlert errorMsg={error}/>
                </div>
            </div>
        );
    }
    const fertigBills = bills.map((info)=>(
        <ExpansesForm name={info.name}
                      time={info.time}
                      amount={info.amount}
                      payer={info.payer}
        />
    ));
    return (
        <div className={"overview page"}>
            <Header caption={params.flatID}
                    back={true}
                    settings={true}/>

            <div className={"content"}>
                {fertigBills}
            </div>
        </div>
    );
}
export default Expanses;
