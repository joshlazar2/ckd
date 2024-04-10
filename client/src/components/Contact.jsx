import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const formRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0lykxz4', 'template_xgg35ag', formRef.current, {
                publicKey: '4q6XDjfdr4q7TaABY',
            })
            .then((res) => {
                console.log(res)
                setSuccess(true)
                formRef.current.reset();
            })
            .catch((err) => {
                console.log(err)
                setError(true)
            })
    }

    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Contact</h1>
            <div className='flex flex-col space-y-4 mt-10'>
                <div className='flex flex-col space-y-2'>
                    <p className='text-xl text-ckdGreen text-left'>Phone:</p>
                    <p className='text-left'>(216) 896-0639</p>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-xl text-ckdGreen text-left'>Fax:</p>
                    <p className='text-left'>(216) 896-0663</p>
                </div>
                <div className='flex flex-col space-y-2 text-left'>
                    <p className='text-xl text-ckdGreen'>Address:</p>
                    <p>3619 PARK EAST DR SUITE 318 SOUTH BEACHWOOD, OH 44122-4330 US</p>
                </div>
            </div>
            <div className='border border-t-ckdGreen my-10'></div>
            <h2 className='text-left text-2xl text-ckdGreen font-bold'>Directions</h2>
            <div className='flex flex-col space-y-4 mt-10'>
                <div className='flex flex-col space-y-2'>
                    <p className='text-left text-xl text-ckdGreen'>From The South:</p>
                    <p className='text-left'>Take I-271 North (local lanes) and exit at Chagrin Blvd. At light turn left on Chagrin. Go to next intersection (second light) which is Park East Drive, make a left.  Parkway Medical Center is on left side of street.</p>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-left text-xl text-ckdGreen'>From The West:</p>
                    <p className='text-left'>Take I-480East to I-271 North (local lanes) and exit at Chagrin Blvd. At light turn left on Chagrin. Go to next intersection (second light) which is Park East Drive, make a left.  Parkway Medical Center is on left side of street.</p>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-left text-xl text-ckdGreen'>From The North:</p>
                    <p className='text-left'>Take I-271 South and exit at Chagrin Blvd. At light turn right. At next light (Park East Drive) turn left. Parkway Medical Center is on the left.</p>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-left text-xl text-ckdGreen'>From The East:</p>
                    <p className='text-left'>Take I-480 West to I-271 North (local lanes) and exit at Chagrin Blvd. At light turn left on Chagrin. Go to next intersection (second light) which is Park East Drive, make a left.  Parkway Medical Center is on left side of street.</p>
                </div>
            </div>
            <div className='border border-t-ckdGreen my-10'></div>
            <h2 className='text-left text-2xl text-ckdGreen font-bold'>We can also be contacted using the form below:</h2>
            <form ref={formRef} onSubmit={sendEmail} className='mt-10 space-y-4'>
                <div className='flex flex-col items-start'>
                    <label>Name:</label>
                    <input className='border border-ckdGreen rounded-lg p-2' type="text" name="name"/>
                </div>
                <div className='flex flex-col items-start'>
                    <label>Email Address:</label>
                    <input className='border border-ckdGreen rounded-lg p-2' type="text" name="emailAddress"/>
                </div>
                <div className='flex flex-col items-start'>
                    <label>Phone Number:</label>
                    <input className='border border-ckdGreen rounded-lg p-2' type="text" name="phoneNumber"/>
                </div>
                <div className='flex flex-col items-start'>
                    <label>Comments/Questions?:</label>
                    <textarea className='border border-ckdGreen rounded-lg p-2' name="commentsQuestions" id="" cols="30" rows="10"></textarea>
                </div>
                {
                    success ? <p className='text-xl text-ckdGreen text-left'>Information Sent Successfully</p> : null
                }
                {
                    error ? <p className='text-xl text-red-500 text-left'>Error Occured</p> : null
                }
                <button className='flex bg-ckdGreen hover:bg-ckdGreenDarker p-3 text-white rounded-2xl' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;