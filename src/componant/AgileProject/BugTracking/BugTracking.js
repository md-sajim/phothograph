import React from 'react';
import ComonCard from '../ComonCard/ComonCard';
import proimg from '../../asset/Agile-project/JSW_Bug Tracking.png'

const BugTracking = () => {
    const comoData = {
        hader: "Bug Tracking",
        text: [
            {
                title: "Capture and track bugs in your software:",
                paragraph: "Capture bugs anywhere in your software and track all relevant details, including descriptions, severity level, screenshots, version, and more."
            },
            {
                title: "Assign and prioritize with ease:",
                paragraph: "Assign bugs with a few keystrokes and prioritize them by dragging and dropping them in your team's backlog or to-do column."
            }
        ],
        esimg: proimg
    }
    return (
        <div>
            <ComonCard comoData={comoData}></ComonCard>
        </div>
    );
};

export default BugTracking;