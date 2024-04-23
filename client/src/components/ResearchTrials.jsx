import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const ResearchTrials = () => {
    return(
        <div className='p-8 px-20'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Research Trials</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='text-left space-y-9'>
                <div>
                    <Link to={'/researchTrial/IgANephropathy'}><p className='text-2xl text-ckdGreen'>IgA Nephropathy</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/LupusNephritis'}><p className='text-2xl text-ckdGreen'>Lupus Nephritis</p></Link>
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
                    <Link to={'/researchTrial/ChronicKidneyDisease'}><p className='text-2xl text-ckdGreen'>Chronic Kidney Disease</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/ANCAVasculitis'}><p className='text-2xl text-ckdGreen'>ANCA Vasculitis</p></Link>
                </div>
            </div>
        </div>
    );
}

export default ResearchTrials;