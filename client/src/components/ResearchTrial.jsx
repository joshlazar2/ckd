import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ResearchTrial = () => {

    const { topicNumber } = useParams();

    const path = `/assets/Research/Topic${topicNumber}.pdf`

    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Topic {topicNumber}</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe
                    title={`Topic${topicNumber}`}
                    className='w-[100%] md:w-[90%] h-[600px] md:h-[800px]'
                    scrolling='yes'
                    src={path}
                    frameBorder='0'
                ></iframe>
            </div>
        </div>
    );
}

export default ResearchTrial;
