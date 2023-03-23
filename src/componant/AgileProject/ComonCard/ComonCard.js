import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './ComonCard.css'
import proimg from '../../asset/Agile-project/JSW_Scrum projects1.png'

const ComonCard = ({ comoData }) => {

    return (
        <div className='coca-container'>
            <div>
                <h1 className='mb-4'>{comoData.hader}</h1>
                <ul>
                    {
                        comoData.text.map((_, i) => <li
                        key={i}
                        ><FaCheck />
                           
                            <p className='text-control'><b>{_.title}</b> {_.paragraph}</p>
                        </li>)
                    }

                </ul>
            </div>
            <div>
                <img src={comoData.esimg} alt="" />
            </div>
        </div>
    );
};

export default ComonCard;