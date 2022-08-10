import React from 'react';

import {Login} from './components/login/Login';
import {Route, Routes} from "react-router-dom";
import {NewFlat} from "./components/new-flat/NewFlat";
import Overview from "./components/overview/Overview";
//import Expanses from "./components/expanses/Expanses";
//import NewExpanses from "./components/new-expanses/NewExpanses";
import {NewTask} from "./components/new-task/NewTask";
import TaskList from "./components/task-list/TaskList";
import {Settings} from "./components/settings/Settings";

import './App.css';
import {UserService} from "./api/UserService";
import {FlatService} from "./api/FlatService";


function App() {
    UserService.initialize();
    FlatService.initialize();
    return (
        <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/new-flat" element={<NewFlat/>}/>
            <Route path="/new-task" element={<NewTask/>}/>
            <Route path="/task-list" element={<TaskList/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
    );
}

export default App;
