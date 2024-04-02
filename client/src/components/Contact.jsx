import React from 'react';

const Contact = () => {
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
            <h2 className='text-left text-2xl text-ckdGreen font-bold mt-10'>Directions</h2>
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
            <h2 className='text-left text-2xl text-ckdGreen font-bold mt-10'>We can also be contacted using the form below:</h2>
            <form className='mt-10 space-y-4'>
                <div className='flex flex-col items-start'>
                    <label>Name:</label>
                    <input className='border border-black rounded-lg' type="text" name="name"/>
                </div>
                <div className='flex flex-col items-start'>
                    <label>Email Address:</label>
                    <input className='border border-black rounded-lg' type="text" name="emailAddress"/>
                </div>
                <div className='flex flex-col items-start'>
                    <label>Phone Number:</label>
                    <input className='border border-black rounded-lg' type="text" name="phoneNumber"/>
                </div>
                <div className='flex flex-col items-start'>
                    <label>Comments/Questions?:</label>
                    <textarea className='border border-black rounded-lg' name="commentsQuestions" id="" cols="30" rows="10"></textarea>
                </div>
                <button className='flex bg-ckdGreen hover:bg-ckdGreenDarker p-3 text-white rounded-2xl' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;