import React, { useState } from 'react';

const DRACSCC = () => {
    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Dialysis Risk After Cardiac Surgery (Cleveland Clinic Score by Thakar)</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe title="DRACS" src="https://qxmd.com/calculate/calculator_55/dialysis-risk-after-cardiac-surgery-cleveland-clinic-score-by-thakar?embed=1" width="80%" height="800" id="qxmd_calculate" frameborder="0" scrolling="yes"></iframe>
            </div>
        </div>
    );
}

export default DRACSCC;