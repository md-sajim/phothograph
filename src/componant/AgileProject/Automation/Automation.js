import React from 'react';
import ComonCard from '../ComonCard/ComonCard';
import proimg from '../../asset/Agile-project/JSW_Automation.png'

const Automation = () => {
    const comoData = {
        hader: "Automation",
        text: [
            {
                title: "Work smarter:",
                paragraph: "Save time, keep your team focused, and help work flow with no-code automation."
            },
            {
                title: "Start in minutes:",
                paragraph: " Anyone can build an automation rule in minutes. No code, no bottlenecks - simply select from our wide range of templates."
            },
            {
                title: "Start in minutes:",
                paragraph: "Anyone can build an automation rule in minutes. No code, no bottlenecks - simply select from our wide range of templates."
            },
            {
                title: "There’s a template for that:",
                paragraph: "We have hundreds of automation templates plus guides and videos to help you get started."
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

export default Automation;