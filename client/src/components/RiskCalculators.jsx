import React, { useState } from 'react';

const RiskCalculators = () => {

    const [twoYearRisk, setTwoYearRisk] = useState()
    const [fiveYearRisk, setFiveYearRisk] = useState()

    const [data, setData] = useState({
        sex: 1,
        age: 0,
        eGFR: 0,
        UACR: 0
    })

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: parseInt(e.target.value) })
    }

    const calculateRiskOver2YearsWithSex = (data) => {
        const terms = (-0.2201 * (data.age / 10 - 7.036)) + (0.2467 * (data.sex - 0.5642)) - (0.5567 * (data.eGFR / 5 - 7.222)) + (0.4510 * (Math.log(data.UACR) - 5.137));
        const risk = 100 * (1 - Math.pow(0.975, Math.exp(terms)));
        setTwoYearRisk(risk.toFixed(2)); // Convert to percentage and round to 2 decimal places
    };
    
    const calculateRiskOver5YearsWithSex = (data) => {
        const terms = (-0.2201 * (data.age / 10 - 7.036)) + (0.2467 * (data.sex - 0.5642)) - (0.5567 * (data.eGFR / 5 - 7.222)) + (0.4510 * (Math.log(data.UACR) - 5.137));
        const risk = 100 * (1 - Math.pow(0.9240, Math.exp(terms)));
        setFiveYearRisk(risk.toFixed(2)); // Convert to percentage and round to 2 decimal places
    };

    const submitHandler = (e) => {
        e.preventDefault(); 
        calculateRiskOver2YearsWithSex(data);
        calculateRiskOver5YearsWithSex(data);
    }

    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Risk Calculators</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <h2 className='text-2xl text-ckdGreen font-bold'>Kidney Failure Risk Equation (4 Variable)</h2>
            <div className='md:flex md:items-start justify-between my-10 space-y-10 md:space-y-0'>
                <form onSubmit={submitHandler} className='space-y-4 text-left'>
                    <div className='flex flex-col items-start'>
                        <label className='text-lg'>Sex</label>
                        <select onChange={changeHandler} className='border border-ckdGreen p-2 rounded-lg' name="sex">
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-lg'>Age</label>
                        <input onChange={changeHandler} className='border border-ckdGreen rounded-lg p-2' type="number" name="age" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-lg'>eGFR (mL/min/1.73m²)</label>
                        <input onChange={changeHandler} className='border border-ckdGreen rounded-lg p-2' type="number" name="eGFR" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-lg'>Urine Albumin Creatinine Ratio (mg/g)</label>
                        <div className='flex space-x-2'>
                            <input onChange={changeHandler} className='border border-ckdGreen rounded-lg p-2' type="number" name="UACR" />
                        </div>
                    </div>
                    <button className='bg-ckdGreen hover:bg-ckdGreenDarker rounded-2xl p-3 text-white'>Submit</button>
                </form>
                <div className='space-y-10 text-left'>
                    <h2 className='text-left text-2xl text-ckdGreen font-bold'>Results</h2>
                    <div className='border border-t-ckdGreen my-10'></div>
                    <h3 className='text-left text-xl text-ckdGreen font-bold'>Risk of progression to kidney failure requiring dialysis or transplantation</h3>
                    <div className='space-y-4'>
                        <h3 className='text-left text-xl text-ckdGreen font-bold'>Over 2-Years</h3>
                        {
                            twoYearRisk ? <p className='text-xl font-bold'>{twoYearRisk}%</p> : null
                        }
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-left text-xl text-ckdGreen font-bold'>Over 5-Years</h3>
                        {
                            fiveYearRisk ? <p className='text-xl font-bold'>{fiveYearRisk}%</p> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RiskCalculators;
