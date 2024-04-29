import React from 'react';
import { Link } from 'react-router-dom';

const RiskCalculators = () => {

    return (
        <div className='p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Risk Calculators</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='text-center md:text-left space-y-16'>
                <div>
                    <Link to={'/riskCalculators/KidneyFailureRiskEquation'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Kidney Failure Risk Equation <br /> (4 variable)</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/DialysisRiskAfterCardiacSurgeryMehta'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Dialysis Risk After Cardiac Surgery (Mehta)</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/DialysisRiskAfterCardiacSurgeryClevelandClinic'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Dialysis Risk After Cardiac Surgery <br /> (Cleveland Clinic Score by Thakar)</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/ContrastNephropathyPost-PCI'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Contrast Nephropathy Post-PCI</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/ClinicalOutcomesInCKDwithSeverelyDecreasedGFR'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>Clinical outcomes in CKD with severely decreased GFR</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/Apache'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>APACHE II</p></Link>
                </div>
                <div>
                    <Link to={'/riskCalculators/AkiRiskAfterSurgery'}><p className='text-2xl text-ckdGreen hover:text-ckdGreenDarker'>AKI risk after surgery<br />(Postop-MAKE by Woo)</p></Link>
                </div>
            </div>
        </div>
    );
}

export default RiskCalculators;