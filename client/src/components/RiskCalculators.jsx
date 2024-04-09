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
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const calculateRiskOver2YearsWithSex = (data) => {
        
    }

    const calculateRiskOver5YearsWithSex = (data) => {
        
    }

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
                        <label>Sex</label>
                        <select onChange={changeHandler} className='border border-ckdGreen p-2 rounded-lg' name="sex">
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label>Age</label>
                        <input onChange={changeHandler} className='border border-ckdGreen rounded-lg p-2' type="number" name="age" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label>eGFR</label>
                        <input onChange={changeHandler} className='border border-ckdGreen rounded-lg p-2' type="number" name="eGFR" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label>Urine Albumin Creatinine Ratio? (mg/g)</label>
                        <div className='flex space-x-2'>
                            <input onChange={changeHandler} className='border border-ckdGreen rounded-lg p-2' type="number" name="UACR" />
                            {/* <select className='border border-ckdGreen p-2 rounded-lg' name="sex">
                                <option value="mg/mmol">mg/mmol</option>
                                <option value="mg/g">mg/g</option>
                            </select> */}
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label>Patient Location</label>
                        <select onChange={changeHandler} className='border border-ckdGreen p-2 rounded-lg' name="location">
                            <option value="northAmerica">North America</option>
                            <option value="nonNorthAmerica">Non-North America</option>
                        </select>
                    </div>
                    <button className='bg-ckdGreen hover:bg-ckdGreenDarker rounded-2xl p-3 text-white'>Submit</button>
                </form>
                <div className='space-y-10 text-left'>
                    <h2 className='text-left text-2xl text-ckdGreen font-bold'>Results</h2>
                    <div className='border border-t-ckdGreen my-10'></div>
                    <h3 className='text-left text-xl text-ckdGreen font-bold'>Risk of progression to kidney failure requiring dialysis or transplantation</h3>
                    <div className='space-y-8'>
                        <h3 className='text-left text-xl text-ckdGreen font-bold'>Over 2-Years</h3>
                        {
                            twoYearRisk ? <p>{twoYearRisk}</p> : null
                        }
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-left text-xl text-ckdGreen font-bold'>Over 5-Years</h3>
                        {
                            fiveYearRisk ? <p>{fiveYearRisk}</p> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RiskCalculators;
