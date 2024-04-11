import React, { useEffect } from 'react';

const AkiRisk = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='p-4 md:p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>AKI risk after surgery (Postop-MAKE by Woo)</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe title="AKI Risk" src="https://qxmd.com/calculate/calculator_834/aki-risk-after-surgery-postop-make-by-woo?embed=1" width="90%" height="800" id="qxmd_calculate" frameborder="0" scrolling="yes"></iframe>
            </div>
        </div>
    );
}

export default AkiRisk;
