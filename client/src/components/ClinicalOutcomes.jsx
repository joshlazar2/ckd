import React, { useEffect } from 'react';

const ClinicalOutcomes = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='p-4 md:p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Clinical outcomes in CKD with severely decreased GFR</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe title="Clinical Outcomes CKD" src="https://qxmd.com/calculate/calculator_621/clinical-outcomes-in-ckd-with-severely-decreased-gfr?embed=1" width="90%" height="800" id="qxmd_calculate" frameborder="0" scrolling="yes"></iframe>
            </div>
        </div>
        </div>
    );
}

export default ClinicalOutcomes;
