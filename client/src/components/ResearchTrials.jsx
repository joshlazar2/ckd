import React from 'react';
import { Link } from 'react-router-dom';

const ResearchTrials = () => {
    return (
        <div className='p-8 md:px-20'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Research Trials</h1>
            <div className='space-y-8 mt-6'>
                <p className='text-left md:text-center text-2xl text-ckdGreen font-bold'>Clinical Trials Contact</p>
                <div className='space-y-6 md:space-y-0 flex flex-col md:flex-row md:justify-around'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-left text-xl text-ckdGreen font-bold'>Phone Number:</p>
                        <a href="tel:+12168960639"><p className='text-left text-lg hover:text-ckdGreen'>216-844-5396</p></a>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-left text-xl text-ckdGreen font-bold'>Email:</p>
                        <a className='text-left text-md  md:text-lg hover:text-ckdGreen' href='mailto:NephrologyHTNResearch@uhhospitals.org' target='_blank' rel='noopener noreferrer'>NephrologyHTNResearch@uhhospitals.org</a>
                    </div>
                </div>
            </div>
            <div className='border border-t-ckdGreen my-10'></div>
            <div className='text-center md:grid grid-cols-3 space-y-9 md:space-y-0 gap-6'>
                {/* <div>
                    <Link to={'/researchTrial/IgA-Nephropathy'}><p className='text-2xl text-ckdGreen'>IgA Nephropathy</p></Link>
                </div> */}
                <div>
                    <Link to={'/researchTrial/IgA-Nephropathy'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>IgA Nephropathy</button></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Lupus-Nephritis'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Lupus Nephritis</button></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Hypertension'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Hypertension</button></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Genetics'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Genetics</button></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Dialysis'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Dialysis</button></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/Chronic-Kidney-Disease'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Chronic Kidney Disease</button></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/ANCA-Vasculitis'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>ANCA Vasculitis</button></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/ANCA-Vasculitis'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Diabetes</button></Link>
                </div>
                <div>
                    <Link to={'/researchTrial/ANCA-Vasculitis'}><button className='bg-ckdGreen hover:bg-ckdGreenDarker text-2xl rounded-2xl p-3 text-white w-[270px]'>Other</button></Link>
                </div>
            </div>
        </div>
    );
}

export default ResearchTrials;