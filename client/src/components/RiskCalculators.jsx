import React from 'react';
import { FaCalculator } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const RiskCalculators = () => {

    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Risk Calculators</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='text-left space-y-9'>
                <div className='flex items-center space-x-6'>
                    <Link to={'/riskCalculators/KidneyFailureRiskEquation'}><p className='text-2xl text-ckdGreen'>Kidney Failure Risk <br /> Equation <br /> (4 variable)</p></Link>
                    <FaCalculator className='text-ckdGreen' size={27} />
                </div>
                <div className='flex items-center space-x-6'>
                    <Link to={'/riskCalculators/DialysisRiskAfterCardiacSurgeryMehta'}><p className='text-2xl text-ckdGreen'>Dialysis Risk After <br /> Cardiac Surgery <br /> (Mehta)</p></Link>
                    <FaCalculator className='text-ckdGreen' size={27} />
                </div>
                <div className='flex items-center space-x-6'>
                    <Link to={'/riskCalculators/DialysisRiskAfterCardiacSurgeryClevelandClinic'}><p className='text-2xl text-ckdGreen'>Dialysis Risk After <br /> Cardiac Surgery <br /> (Cleveland Clinic Score by Thakar)</p></Link>
                    <FaCalculator className='text-ckdGreen' size={27} />
                </div>
                <div className='flex items-center space-x-6'>
                    <Link to={'/riskCalculators/ContrastNephropathyPost-PCI'}><p className='text-2xl text-ckdGreen'>Contrast Nephropathy <br /> Post-PCI</p></Link>
                    <FaCalculator className='text-ckdGreen' size={27} />
                </div>
                <div className='flex items-center space-x-6'>
                    <Link to={'/riskCalculators/ClinicalOutcomesInCKDwithSeverelyDecreasedGFR'}><p className='text-2xl text-ckdGreen'>Clinical outcomes in CKD <br /> with severely decreased GFR</p></Link>
                    <FaCalculator className='text-ckdGreen' size={27} />
                </div>
                <div className='flex items-center space-x-6'>
                    <Link to={'/riskCalculators/Apache'}><p className='text-2xl text-ckdGreen'>APACHE II</p></Link>
                    <FaCalculator className='text-ckdGreen' size={27} />
                </div>
                <div className='flex items-center space-x-6'>
                    <Link to={'/riskCalculators/AkiRiskAfterSurgery'}><p className='text-2xl text-ckdGreen'>AKI risk after surgery <br /> (Postop-MAKE by Woo)</p></Link>
                    <FaCalculator className='text-ckdGreen' size={27} />
                </div>
            </div>
        </div>
    );
}

export default RiskCalculators;
