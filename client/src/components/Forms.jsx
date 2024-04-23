import React from 'react';
import { FaFilePdf } from "react-icons/fa6";

const Forms = () => {

    const welcomeLetter = "/assets/forms/welcome_letter_2-08.pdf"
    const sodiumAndTheRenalDiet = "/assets/forms/Sodium-and-the-Renal-Diet.pdf"
    const recordReleaseForm = "/assets/forms/record_release_form.pdf"
    const recordReleaseFormOutsideOffice = "/assets/forms/record_release_form_outside_office.pdf"
    const privacyPractices = "/assets/forms/Privacy_Practices.pdf"
    const potassiumInDiet = "/assets/forms/Potassium_in_diet.pdf"
    const patientInformation = "/assets/forms/patient_information_1-08.pdf"
    const newPatientForms = "/assets/forms/new-patient-forms.pdf"
    const medicalHistory = "/assets/forms/Medical_History.pdf"
    const hippaSupplementForm = "/assets/forms/Hippa_Supplement_Form.pdf"
    const financialPolicy = "/assets/forms/Financial_policy.pdf"
    const col4a3 = "/assets/forms/col4a3.pdf"
    const bloodPressureSheet = "/assets/forms/blood_pressure_sheet.pdf"

    return(
        <div className='p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Patient Forms</h1>
            <div className='flex flex-col mt-10'>
                <div className='text-left space-y-2'>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={newPatientForms} target='_blank rel="noreferrer"'>New Patient Forms Package </a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <p className='font-bold'>This includes Welcome Letter, Patient Info, Medical History, Hippa Supplement, and Record Release forms.</p>
                </div>
                <div className='border border-t-ckdGreen my-10'></div>
                <h2 className='text-ckdGreen text-3xl font-bold text-center md:text-left'>Individual Forms</h2>
                <div className='text-left space-y-4 mt-10'>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={welcomeLetter} target='_blank' rel="noreferrer">Welcome Letter</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={patientInformation}target='_blank' rel="noreferrer">Patient Information Form</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={medicalHistory} target='_blank' rel="noreferrer">Medical History Form</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={hippaSupplementForm} target='_blank' rel="noreferrer">Hippa Supplement Form</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={recordReleaseForm} target='_blank' rel="noreferrer">Record Release Form</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={recordReleaseFormOutsideOffice} target='_blank' rel="noreferrer">Record Release Form - <br /> Outside Office</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={financialPolicy} target='_blank' rel="noreferrer">Financial Policy</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={privacyPractices} target='_blank' rel="noreferrer">Privacy Practices</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={bloodPressureSheet} target='_blank' rel="noreferrer">Blood Pressure Sheet</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={potassiumInDiet} target='_blank' rel="noreferrer">Potassium in diet</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a className='text-2xl text-ckdGreen' href={sodiumAndTheRenalDiet} target='_blank' rel="noreferrer">Sodium and the Renal Diet</a>
                        <FaFilePdf className='text-ckdGreen' size={27}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forms;