import React, {useEffect, useState} from 'react';
import './Overview.css';
import OverviewForm from "./overviewForm/OverviewForm";
import OverviewCreate from "./overviewForm/OverviewCreate";
import {Header} from "../Header";
import {ErrorAlert} from "../ErrorAlert";
import axios from "axios";
import {UserService} from "../../api/UserService";

const Overview = () => {

    const [flat, setFlat] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const userID = UserService.user.userId;
    useEffect(() => {

        const fetching = async () => {
            setLoading(true);
            const response = await axios.get(`http://localhost:8080/flat/${userID}`);
            const responseData = response.data;
            const loadedFlats = [];

            for (const key in responseData) {
                const name = responseData[key].name;
                const area = responseData[key].area;
                const owner = responseData[key].owner;
                const coOwner = [];
                const temp = responseData[key].coOwner;
                const count = responseData[key].residentCount;

                for (const key in temp) {
                    coOwner.push(temp[key]);
                }
                loadedFlats.push({
                    id: key,
                    flatName: name,
                    name1: owner,
                    name2: coOwner[0],
                    name3: coOwner[1],
                    area: area,
                    count: count,
                    members: coOwner
                })
            }
            setFlat(loadedFlats);
            setLoading(false);

        }

        fetching().catch(err => {
            setLoading(false);
            setError(err.message);
        });
    }, []);

    if (loading) {
        return (
            <div className={"overview page"}>
                <Header caption="Your flats" logout={true}/>
                <div className={"content"}>
                    <p>Loading flats...</p>
                </div>
            </div>
        );
    }

    if (error != null) {
        return (
            <div className={"overview page"}>
                <Header caption="Your flats" logout={true}/>
                <div className={"content"}>
                    <ErrorAlert errorMsg={error}/>
                </div>
            </div>
        );
    }

    const finishedFlats = flat.map((info) => (
        <OverviewForm flatName={info.flatName}
                      name1={info.name1}
                      name2={info.name2}
                      name3={info.name3}
                      area={info.area}
                      count={info.count}
                      id={info.id}
                      members={info.members}
        />
    ));

    return (
        <div className={"overview page"}>
            <Header caption="Your flats" logout={true}/>

            <div className={"content"}>
                {finishedFlats}
                <OverviewCreate/>
            </div>
        </div>
    );
}
export default Overview;
