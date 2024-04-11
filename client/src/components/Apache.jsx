import React, { useEffect } from 'react';

const Apache = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='p-4 md:p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>APACHE II</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe title="apache" src="https://qxmd.com/calculate/calculator_12/apache-ii?embed=1" width="90%" height="800" id="qxmd_calculate" frameborder="0" scrolling="yes"></iframe>
            </div>
        </div>
        </div>
    );
}

export default Apache;
