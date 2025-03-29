import { useEffect, useState } from "react";

function useCurrencyInfo(curr_code){

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr_code}.json`

    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[curr_code]))
        
    } , [curr_code]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;

