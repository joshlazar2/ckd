import React, { useState } from 'react';

const DRACS = () => {
    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Dialysis Risk After Cardiac Surgery (Mehta)</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe title="DRACS" src="https://qxmd.com/calculate/calculator_62/dialysis-risk-after-cardiac-surgery-mehta?embed=1" width="80%" height="800" id="qxmd_calculate" frameborder="0" scrolling="yes"></iframe>
            </div>
        </div>
    );
}

export default DRACS;