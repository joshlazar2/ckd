import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pdf2 from '../assets/Research/Topic1/topic1.pdf';

const ResearchTrial = () => {

    const {topicNumber} = useParams();

    const pdf = `http://www.clevelandkidney.com/Research/Topic${topicNumber}.pdf`

    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Topic {topicNumber}</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe width="90%" height="800" scrolling='yes' src={pdf} ></iframe>
            </div>
        </div>
    );
}

export default ResearchTrial;
