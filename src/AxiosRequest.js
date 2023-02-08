import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosRequest = () => {
    const [data, setData] = useState([]);

    // Axios Post API Call
    // const Obj = { firstName: 'Fred', lastName: 'Flintstone' };
    // axios.post('/user', Obj, {
    //     headers: { "Content-type": "application/json" }
    // }).then(response => {
    //     console.log(response);
    // }).catch(error => {
    //     console.log(error);
    // });

    // Axios Get API Call
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {data.map(el => (
                <div key={el.id}>
                    <h3>{el.name}</h3>
                    <p>{el.email}</p>
                </div>
            ))}
        </div>
    );
};


export default AxiosRequest;