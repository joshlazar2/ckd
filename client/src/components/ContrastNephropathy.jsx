import React, { useEffect } from 'react';

const ContrastNephropathy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='p-4 md:p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Contrast Nephropathy Post-PCI</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe title="Contrast Nephropathy" src="https://qxmd.com/calculate/calculator_47/contrast-nephropathy-post-pci?embed=1" width="90%" height="800" id="qxmd_calculate" frameborder="0" scrolling="yes"></iframe>
            </div>
        </div>
    );
}

export default ContrastNephropathy;
