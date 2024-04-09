import React, { useState } from 'react';
import { TbPointFilled } from "react-icons/tb";

const About = () => {
    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>About The Practice</h1>
            <div className='mt-8 space-y-4'>
                <p className='text-left text-lg'>Welcome to our practice!  We appreciate that you have chosen us to care for your medical needs.</p>
                <div className='flex flex-col items-center justify-center'>
                    <ul className='text-left space-y-2 text-ckdGreen'>
                        <li className='list-disc'><p className='text-black'>Please contact your PCP <b>before</b> your appointment <b>if your insurance requires a referral</b></p></li>
                        <li className='list-disc'><p className='text-black'>Please bring your <b>medication bottles or a list of your medications</b> to your appointment</p></li>
                        <li className='list-disc'><p className='text-black'>You will be asked to give a urine specimen at your visit</p></li>
                        <li className='list-disc'><p className='text-black'>Please bring your <b>insurance cards and picture identification</b> to your visit</p></li>
                        <li className='list-disc'><p className='text-black'>Please complete and sign the <b>enclosed forms</b> and <b>bring</b> them to your visit</p></li>
                        <li className='list-disc'><p className='text-black'>If you have a <b>copay</b>, your insurance company requires that you pay it at the time of your appointment.  Please bring <b>cash or check</b>, or <b>credit card</b>.</p></li>
                    </ul>
                </div>
            </div>
            <p className='text-left text-lg mt-8'>If you must change your appointment date or time, kindly give us at least <b>24 hours notice</b> so that we may accommodate you and other patients who need an appointment.  You may be <b>charged</b> for missed appointments.</p>
            <p className='text-left text-lg mt-8'>As you have not visited with us before, we have included a review of our practice’s mission and information about Dr. Lazar.  Please call with any questions.  Again, thank you for choosing Cleveland Kidney Disease Associates!</p>
            <div className='border border-t-ckdGreen my-10'></div>
            <h2 className='text-left text-2xl text-ckdGreen font-bold'>Mission Statement</h2>
            <p className='text-left text-lg mt-8'>Cleveland Kidney Disease Associates is devoted to delivering the highest level of nephrology care with compassion, respect, patient education, state-of-the-art practice, and the most recent medical developments.  Using the latest in research, technology, and treatment options, we strive to educate the public about chronic kidney disease, and to create individualized life plans for our patients, with the uncompromising goal of providing them with the highest quality of life.  By participating in medical research activities, we bridge the gap between academic medicine and community nephrology.</p>
            <div className='border border-t-ckdGreen my-10'></div>
            <img className='w-[200px]' src="https://media.licdn.com/dms/image/C4E03AQFlKBvhXWKCkQ/profile-displayphoto-shrink_400_400/0/1614708273439?e=1718236800&v=beta&t=O-1xGZ4rqxMW1xe7bt-L5CasnMwiCXzvVKAiRsiUvjs" />
            <p className='text-left text-lg mt-8'>Dr Andrew E. Lazar has a degree in Biomedical Engineering from Boston University.  He worked as a design engineer at General Motors before returning to medical school at Wayne State University in Detroit, MI.  He studied Internal Medicine at the University of Virginia where he was chosen as a chief resident.  Later he studied Nephrology at Case Western Reserve University.  Prior to returning to Cleveland, he practiced Nephrology in Akron, OH.  Please visit our website for more information regarding our practice.</p>
            <div className='border border-t-ckdGreen my-10'></div>
            <h2 className='text-left md:text-center text-2xl text-ckdGreen font-bold'>Cleveland Kidney Disease Associates, LLC Financial Policy</h2>
            <p className='text-left text-lg mt-8'>It is our hope that you understand that our credit and collection policies are a necessary part of assuring the financial resources required to maintain vital health care service for all of our patients.  If you have health insurance, please understand that this is an agreement only between you and your insurance company.  Your physician’s bill is an agreement between you and your physician.  Payment of your co-payment, co-insurance and deductible are required at the time of the service.  We will submit your charges to your insurance company for you, if you provide us with the current and complete insurance information.  It is your responsibility to be familiar with your insurance policy and what it covers.  If your insurance policy requires a referral or authorization for testing or special procedures, please let us know prior to you appointment.  Failure to do so may result in your full responsibility for payment of services.  If you do not have insurance coverage, payment at the time of service is required.  Payment of the balance can be arranged with our billing department.  If unusual circumstances should make it impossible for you to meet our credit terms, we encourage you to let us know.  Accounts over 120 days may be referred to an outside agency for collection, which could affect your credit rating for seven years.  If your treatment is the result of an accident and a lawsuit or hearing is involved, payment for this treatment must either be processed through your health insurance or payment made at the time of service.  We will assist your attorney with copies of records and billings as appropriate.</p>
        </div>
    );
}

export default About;