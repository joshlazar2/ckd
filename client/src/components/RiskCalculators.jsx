import React from 'react';
import { Link } from 'react-router-dom';

const RiskCalculators = () => {

    return (
        <div className='p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Risk Calculators</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='text-center md:text-left space-y-16'>
                <div>
                    <Link to={'/riskCalculators/Kidney-Failure-Risk-Equation-(4-Variable)'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Kidney Failure Risk Equation <br /> (4 variable)</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/Dialysis-Risk-After-Cardiac-Surgery-(Mehta)'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Dialysis Risk After Cardiac Surgery (Mehta)</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/Dialysis-Risk-After-Cardiac-Surgery-(Cleveland-Clinic-Score-by-Thakar)'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Dialysis Risk After Cardiac Surgery <br /> (Cleveland Clinic Score by Thakar)</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/Contrast-Nephropathy-Post-PCI'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Contrast Nephropathy Post-PCI</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/Clinical-outcomes-in-CKD-with-severely-decreased-GFR'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Clinical outcomes in CKD with severely decreased GFR</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/APACHE-II'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>APACHE II</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/AKI-risk-after-surgery-(Postop-MAKE-by-Woo)'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>AKI risk after surgery<br />(Postop-MAKE by Woo)</p></Link>
                </div>
            </div>
        </div>
    );
}

export default RiskCalculators;