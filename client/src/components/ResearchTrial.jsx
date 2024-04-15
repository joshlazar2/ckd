import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ResearchTrial = () => {

    const { topicNumber } = useParams();

    const path = `/assets/Research/Topic${topicNumber}.pdf`
    const path2 = 'https://drive.google.com/file/d/1pgc-EorpMfbXKThWqQdqDAT9UBL_jDLX/preview'

    const paths = {
        1: 'https://drive.google.com/file/d/1pgc-EorpMfbXKThWqQdqDAT9UBL_jDLX/preview',
        2: 'https://drive.google.com/file/d/1WmOiLAMGKXyl1MpzQFIrNu3OmC1Ec0YG/preview'
    }

    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Topic {topicNumber}</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe
                    title={`Topic${topicNumber}`}
                    className='w-[90%] h-[800px]'
                    scrolling='yes'
                    src={paths[topicNumber]}
                    frameBorder='0'
                ></iframe>
            </div>
        </div>
    );
}

export default ResearchTrial;
