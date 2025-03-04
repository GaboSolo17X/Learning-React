import React from 'react';
import ReacDOM from 'react-dom/client';
//import { App2} from './FirstApp'
import "./index.css";
import { CounterApp } from './CounterApp';


ReacDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <CounterApp value={10}/>
</React.StrictMode>    

)