import { useEffect, useState } from "react";

function FetchComp(){
    const [state,setState] = useState([]);
    useEffect(() => {
        fetch("https://acb-api.algoritmika.org/api/transaction")
        .then((response)=> response.json())
        .then((data) => setState(data[0]));
    },[]);
    console.log(state)
    return <div>
        <p>{state.from}</p>
        <p>{state.to}</p>
        <p>{state.amount}</p>
    </div>;
}

export default FetchComp