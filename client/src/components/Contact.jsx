import React from 'react';

const Contact = () => {
    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Contact</h1>
            <div className='flex flex-col space-y-4 mt-10'>
                <div className='flex space-x-2 items-center'>
                    <p className='text-xl text-ckdGreen'>Phone:</p>
                    <p>(216) 896-0639</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <p className='text-xl text-ckdGreen'>Fax:</p>
                    <p>(216) 896-0663</p>
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
        </div>
    );
}

export default Contact;