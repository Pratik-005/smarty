import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import styled from "styled-components"

export default function Home() {

    const [on, setOn] = useState(true);

    const [val, setVal] = useState(20);


    const mapper = {
        "0": 500,
        "20": 1200,
        "40": 1700,
        "60": 2500,
        "80": 3900,
        "100": 5000
    }

    const marks = [
        {
            value: 0,
            label: <Value><span><p style={{ fontWeight: "bold" }}>$ 5</p></span><span>500 credits</span></Value>,
        },
        {
            value: 20,
            label: <Value><span><p style={{ fontWeight: "bold" }}>$ 10</p></span><span>1200 credits</span></Value>,
        },
        {
            value: 40,
            label: <Value><span><p style={{ fontWeight: "bold" }}>$ 15</p></span><span>1700 credits</span></Value>,
        },
        {
            value: 60,
            label: <Value><span><p style={{ fontWeight: "bold" }}>$ 20</p></span><span>2500 credits</span></Value>,
        },
        {
            value: 80,
            label: <Value><span><p style={{ fontWeight: "bold" }}>$ 25</p></span><span>3900 credits</span></Value>,
        },
        {
            value: 100,
            label: <Value><span><p style={{ fontWeight: "bold" }}>$ 30</p></span><span>5000 credits</span></Value>,
        },
    ];

    function valuetext(value) {
        return `${value}°C`;
    }

    useEffect(() => {
        const autoPurchase = () => {
            if (mapper[`${val}`] < 50 && on === true)
                setOn(true);
            setVal(1200);
            console.log(mapper[`${val}`])
        }
        autoPurchase();
    }, [])

    const purchase = () =>{
        console.log(mapper[`${val}`]);
    }

    return (
        <Container>
            <Main>
                <div id="head" >
                    <span>
                        <h4>Setup Auto Top-up</h4>
                    </span>
                    <Switch defaultChecked onClick={()=>setOn(!on)} />
                </div>
                <p id="notice" >once credit goes below minimum threshold 50  , we will auto purchase 1200 credits and add them to your account
                </p>

                <div id="slider-div" >
                    <Slider
                        aria-label="Restricted values"
                        defaultValue={20}
                        // getAriaValueText={valuetext}
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks}
                        onChange={(e)=>setVal(e.target.value)}
                    />
                </div>

                {
                    !on && <Button   onClick={purchase} style={{ marginTop: "50px" }} variant="contained" disableElevation>
                        Confirm auto-purchase
                    </Button>
                }

            </Main>


        </Container>
    )
}

const Container = styled.div`
 font-family: "Inter", sans-serif;
background-color: #EFEFEF;
width: 100vw;
height: 100vh;
overflow-x: hidden;
display: flex;
justify-content: center;
align-items: center;

`
const Main = styled.div`
background-color: white;
padding: 40px;
border-radius: 15px;
width: 60%;

#notice{
    color:#7B7B7B;
}

#head{
    display: flex;
    align-items: center;
    gap:20px;
    font-family: 'Inter';
    
}

#slider-div{
    padding: 0px 40px;
}

.sc-ewnpUy.enLwwU{
    margin-left: 50px;
}
`

const Value = styled.div`
display: flex;
flex-direction: column;
align-items: baseline;
`