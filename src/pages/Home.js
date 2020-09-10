
import React from 'react';
import PickerView from '../components/EventViewer';
// import Space from '../components/EventCreation/TimeSelector';
import "../index";


export default function Home() {
    return (
        <div>
            <h1>Welcome to GatherNow</h1>
            {/* <Select/> */}
            <p className="selectCategory">Select an event category below to get started:
                <PickerView />
                {/* <Cards></Cards> */}
            </p>
        </div>
    );
}