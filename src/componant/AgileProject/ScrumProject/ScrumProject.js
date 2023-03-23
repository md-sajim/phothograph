import React from 'react';
import ComonCard from '../ComonCard/ComonCard';
import proimg from '../../asset/Agile-project/JSW_Scrum projects1.png'

const ScrumProject = () => {
    const comoData = {
        hader: "Scrum projects",
        text: [
            {
                title: "Build your backlog:",
                paragraph: "Define what can be delivered in the sprint and how the team will get there. Plan even smarter sprints with contextual insights in the backlog."
            },
            {
                title: "Daily scrums or stand ups:",
                paragraph: "Track progress and identify bottlenecks by customizing your own Jira dashboard. Communicate and prioritize work during stand ups."
            },
            {
                title: "Scrum reports:",
                paragraph: "Jira Software has a number of agile reports specific for scrum teams. For example, Burndown and Velocity charts give your team critical insight into their agile process."
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

export default ScrumProject;