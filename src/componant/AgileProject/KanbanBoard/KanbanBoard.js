import React from 'react';
import proimg from '../../asset/Agile-project/JSW_Kanban.png'
import ComonCard from '../ComonCard/ComonCard';

const KanbanBoard = () => {
    const comoData = {
        hader: "Kanban board",
        text: [
            {
                title: "A Jira kanban board for every team:",
                paragraph: "In the Kanban framework, work items are represented visually on the board, so every team member can see the state of every piece of work in real-time."
            },
            {
                title: "Optimize workflows:",
                paragraph: "Workflows allow teams to define and configure the stages work must flow through to completion. These can be as simple or as complex as the team requires."
            },
            {
                title: "Easily spot bottlenecks:",
                paragraph: "Work in progress (WIP) is the number of stories in each status at a time. Establish WIP limits to prevent bottlenecks, so issues flow smoothly through your entire workflow."
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

export default KanbanBoard;