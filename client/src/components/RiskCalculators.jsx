import React, { useState } from 'react';

const RiskCalculators = () => {
    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Risk Calculators</h1>
            <div className='border border-t-ckdGreen my-10'></div>
            <h2 className='text-2xl text-ckdGreen font-bold'>Kidney Failure Risk Equation (4 Variable)</h2>
            <div className='md:flex md:items-start justify-between my-10 space-y-10 md:space-y-0'>
                <form className='space-y-4 text-left'>
                    <div className='flex flex-col items-start'>
                        <label>Sex</label>
                        <select className='border border-ckdGreen p-2 rounded-lg' name="sex">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label>Age</label>
                        <input className='border border-ckdGreen rounded-lg p-2' type="number" name="age" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label>eGFR</label>
                        <input className='border border-ckdGreen rounded-lg p-2' type="number" name="eGFR" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <label>Urine Albumin Creatinine Ratio? (Note units carefully)</label>
                        <div className='flex space-x-2'>
                            <input className='border border-ckdGreen rounded-lg p-2' type="number" name="UACR" />
                            <select className='border border-ckdGreen p-2 rounded-lg' name="sex">
                                <option value="mg/mmol">mg/mmol</option>
                                <option value="mg/g">mg/g</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label>Patient Location</label>
                        <select className='border border-ckdGreen p-2 rounded-lg' name="location">
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
                    <div className='space-y-4'>
                        <h3 className='text-left text-xl text-ckdGreen font-bold'>Over 2-Years</h3>
                        <p>Output</p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-left text-xl text-ckdGreen font-bold'>Over 5-Years</h3>
                        <p>Output</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RiskCalculators;
