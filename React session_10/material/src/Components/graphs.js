import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function Barchart() {
    const [globalData, setGlobalData] = useState({});
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true")
            let Data = await response.json();
            console.log(Data);
            delete Data.sourceUrl
            delete Data.lastUpdatedAtApify
            delete Data.lastUpdatedAtSource
            delete Data.readMe
            setGlobalData(Data);//Imp step

        }
        getData()
    }, [])
    console.log(Object.keys(globalData)[0])
    console.log(globalData[Object.keys(globalData)[0]])
    const data = {

        labels: [Object.keys(globalData)[0], Object.keys(globalData)[1], Object.keys(globalData)[2], Object.keys(globalData)[3], Object.keys(globalData)[4]],
        datasets: [
            {
                label: 'My First dataset',
                // backgroundColor: 'rgba(255,99,132,0.2)',
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    'white',
                    "red"
                ],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBorderColor: 'rgba(255,99,132,1)',
                weight: 4,
                data: [globalData[Object.keys(globalData)[0]], globalData[Object.keys(globalData)[1]], globalData[Object.keys(globalData)[2]], globalData[Object.keys(globalData)[3]], globalData[Object.keys(globalData)[4]]]
            }
        ]
    };
    return (
        <div>
            <Doughnut data={data} />
        </div>
    );

};


export default Barchart;