import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { trials } from '../assets/data/trialData';

const ResearchTrial = () => {

    const { trialName } = useParams();

    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>{trialName}</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe
                    title={`Trial${trialName}`}
                    className='w-[90%] h-[800px]'
                    scrolling='yes'
                    src={trials[trialName]}
                    frameBorder='0'
                ></iframe>
            </div>
        </div>
    );
}

export default ResearchTrial;
