import React from 'react';

const KFRE = () => {
    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Kidney Failure Risk Equation (4 Variable)</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe title="KFRE" src="https://qxmd.com/calculate/calculator_308/kidney-failure-risk-equation-4-variable?embed=1" width="80%" height="800" id="qxmd_calculate" frameborder="0" scrolling="yes"></iframe>
            </div>
        </div>
    );
}

export default KFRE;