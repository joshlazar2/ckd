import React from 'react';
import { Link } from 'react-router-dom';

const RiskCalculators = () => {

    return (
        <div className='p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Risk Calculators</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='text-center md:grid grid-cols-3 space-y-9 md:space-y-0 gap-9'>
                <div>
                    <Link to={'/riskCalculators/Kidney-Failure-Risk-Equation-(4-Variable)'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Kidney Failure Risk Equation <br /> (4 variable)</button></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/Dialysis-Risk-After-Cardiac-Surgery-(Mehta)'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Dialysis Risk After Cardiac Surgery (Mehta)</button></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/Dialysis-Risk-After-Cardiac-Surgery-(Cleveland-Clinic-Score-by-Thakar)'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Dialysis Risk After Cardiac Surgery <br /> (Cleveland Clinic Score by Thakar)</button></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/Contrast-Nephropathy-Post-PCI'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Contrast Nephropathy Post-PCI</button></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/Clinical-outcomes-in-CKD-with-severely-decreased-GFR'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Clinical outcomes in CKD with severely decreased GFR</button></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/APACHE-II'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>APACHE II</button></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/AKI-risk-after-surgery-(Postop-MAKE-by-Woo)'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>AKI risk after surgery<br />(Postop-MAKE by Woo)</button></Link>
                </div>
            </div>
        </div>
    );
}

export default RiskCalculators;