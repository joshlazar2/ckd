import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { trials } from '../assets/data/trialData';

const ResearchTrial = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { trialName } = useParams();
    const formattedTrialName = trialName.replace(/-/g, ' ');

    return (
        <div className='p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>{formattedTrialName}</h1>
            <div className='space-y-8 mt-6'>
                <p className='text-left md:text-center text-2xl text-ckdGreen font-bold'>Clinical Trials Contact</p>
                <div className='space-y-6 md:space-y-0 flex flex-col md:flex-row md:justify-around'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-left text-xl text-ckdGreen font-bold'>Phone Number:</p>
                        <a href="tel:+12168960639"><p className='text-left text-lg hover:text-ckdGreen'>216-844-5396</p></a>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-left text-xl text-ckdGreen font-bold'>Email:</p>
                        <a className='text-left text-md  md:text-lg hover:text-ckdGreen' href='mailto:NephrologyHTNResearch@uhhospitals.org' target='_blank' rel='noopener noreferrer'>NephrologyHTNResearch@uhhospitals.org</a>
                    </div>
                </div>
            </div>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe
                    title={`Trial${trialName}`}
                    className='w-[90%] h-[450px] md:h-[800px]'
                    scrolling='yes'
                    src={trials[trialName]}
                    frameBorder='0'
                ></iframe>
            </div>
        </div>
    );
}

export default ResearchTrial;
