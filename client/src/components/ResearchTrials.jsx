import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResearchTrials = () => {
    return (
        <div className='p-8 md:px-20'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Research Trials</h1>
            <div className='space-y-6 mt-6'>
                <p className='text-left text-2xl text-ckdGreen font-bold'>Clinical Trials Contact</p>
                <div className='flex flex-col space-y-2'>
                    <p className='text-left text-xl text-ckdGreen font-bold'>Phone Number:</p>
                    <a href="tel:+12168960639"><p className='text-left text-lg hover:text-ckdGreen'>216-844-5396</p></a>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-left text-xl text-ckdGreen font-bold'>Email:</p>
                    <a  className='text-left text-md  md:text-lg hover:text-ckdGreen' href='mailto:NephrologyHTNResearch@uhhospitals.org' target='_blank' rel='noopener noreferrer'>NephrologyHTNResearch@uhhospitals.org</a>
                </div>
            </div>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='text-left space-y-9'>
                <div>
                    <Link to={'/researchTrial/IgA-Nephropathy'}><p className='text-2xl text-ckdGreen'>IgA Nephropathy</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Lupus-Nephritis'}><p className='text-2xl text-ckdGreen'>Lupus Nephritis</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Hypertension'}><p className='text-2xl text-ckdGreen'>Hypertension</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Genetics'}><p className='text-2xl text-ckdGreen'>Genetics</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Dialysis'}><p className='text-2xl text-ckdGreen'>Dialysis</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Chronic-Kidney-Disease'}><p className='text-2xl text-ckdGreen'>Chronic Kidney Disease</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/ANCA-Vasculitis'}><p className='text-2xl text-ckdGreen'>ANCA Vasculitis</p></Link>
                </div>
            </div>
        </div>
    );
}

export default ResearchTrials;