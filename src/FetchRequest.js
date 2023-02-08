import { useEffect, useState } from "react";

const FetchRequest = () => {
    const [data, setData] = useState([]);

    // Post API Call
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('"https://jsonplaceholder.typicode.com/users"', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_AUTH_TOKEN'
                },
                body: JSON.stringify({
                    name: "manoj", city: "Hyderabad"
                })
            });
            const json = await result.json();
            setData(json);
        }
        fetchData();
    }, [])

    // Get API Call
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonData = await response.json();
            setData(jsonData);
        }
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
}

export default FetchRequest;