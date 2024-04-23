import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const ResearchTrials = () => {
    return(
        <div className='p-8 md:px-20'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Research Trials</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='text-center md:text-left space-y-9'>
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