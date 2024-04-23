import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const ResearchTrials = () => {
    return(
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Research Trials</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='text-left space-y-9'>
                <div>
                    <Link to={'/researchTrial/1'}><p className='text-2xl text-ckdGreen'>Topic 1</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/2'}><p className='text-2xl text-ckdGreen'>Topic 2</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/3'}><p className='text-2xl text-ckdGreen'>Topic 3</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/4'}><p className='text-2xl text-ckdGreen'>Topic 4</p></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/5'}><p className='text-2xl text-ckdGreen'>Topic 5</p></Link>
                </div>
                <p>IgA Nephropathy</p>
                <p>Lupus Nephritis</p>
                <p>Hypertension</p>
                <p>Genetics</p>
                <p>Dialysis</p>
                <p>Chronic Kidney Disease</p>
                <p>ANCA Vasculitis</p>

            </div>
        </div>
    );
}

export default ResearchTrials;