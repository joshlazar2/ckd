import React from 'react';
import { FaFilePdf } from "react-icons/fa6";

const Forms = () => {
    return(
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Patient Forms</h1>
            <div className='flex flex-col mt-10'>
                <div className='text-left space-y-2'>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/new-patient-forms.pdf" target='_blank rel="noreferrer"'>New Patient Forms Package </a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <p className='font-bold'>This includes Welcome Letter, Patient Info, Medical History, Hippa Supplement, and Record Release forms.</p>
                </div>
                <div className='border border-t-ckdGreen my-10'></div>
                <h2 className='text-ckdGreen text-3xl font-bold text-left'>Individual Forms</h2>
                <div className='text-left space-y-4 mt-10'>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/welcome_letter%202-08.pdf" target='_blank' rel="noreferrer">Welcome Letter</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/patient%20information%201-08.pdf" target='_blank' rel="noreferrer">Patient Information Form</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/Medical_History.pdf" target='_blank' rel="noreferrer">Medical History Form</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/Hippa_Supplement_Form.pdf" target='_blank' rel="noreferrer">Hippa Supplement Form</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/record_release_form.pdf" target='_blank' rel="noreferrer">Record Release Form</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/record_release_form%20-%20outside%20office.pdf" target='_blank' rel="noreferrer">Record Release Form - <br /> Outside Office</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/Financial_policy.pdf" target='_blank' rel="noreferrer">Financial Policy</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/Privacy_Practices.pdf" target='_blank' rel="noreferrer">Privacy Practices</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/blood%20pressure%20sheet.pdf" target='_blank' rel="noreferrer">Blood Pressure Sheet</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/Potassium%20in%20diet.pdf" target='_blank' rel="noreferrer">Potassium in diet</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href="http://www.clevelandkidney.com/forms/Sodium-and-the-Renal-Diet.pdf" target='_blank' rel="noreferrer">Sodium and the Renal Diet</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forms;