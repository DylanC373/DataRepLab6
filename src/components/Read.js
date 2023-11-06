import { useEffect, useState } from 'react';
import Books from './Books'
import axios from "axios";
function Read() {

    const [data, setData] = useState([]);

    // UseEffect is a react hook that will allow you to sync your component with an external system
    useEffect(() => {
        //Axios will make a http request that has the get method for the following URL 
        axios.get('http://localhost:4000/api/books')
            .then( //This is the call back function when the asynchronous function is ocmpleted this is function that is executed 
                (response) => {
                    //setData will update the value of data with the response that came back from the server 
                    setData(response.data.myBooks)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    return (
        <div>
            <h2>Hello from my read component</h2>
            <Books myBooks={data}>

            </Books>
        </div>
    );
}
export default Read; 