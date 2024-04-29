import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { riskCalculators } from '../assets/data/riskCalcs';

const RiskCalculator = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {calculatorName} = useParams();
    const formattedCalcName = calculatorName.replace(/-/g, ' ');

    return (
        <div>
            <div className='p-4 md:p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>{formattedCalcName}</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='flex justify-center'>
                <iframe title="apache" src={riskCalculators[calculatorName]} width="90%" height="800" id="qxmd_calculate" frameborder="0" scrolling="yes"></iframe>
            </div>
        </div>
        </div>
    );
}

export default RiskCalculator;
