import React from 'react';


const Home = () => {

    const logoPath = '/assets/images/office.jpeg'

    return (
        <div className='p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Welcome to Cleveland Kidney Disease Associates</h1>
            <p className='text-left text-xl mt-10'>Cleveland Kidney Disease Associates is devoted to delivering the highest level of nephrology care with compassion, respect, patient education, state-of-the-art practice, and the most recent medical developments.  Using the latest in research, technology, and treatment options, we strive to educate the public about chronic kidney disease, and to create individualized life plans for our patients, with the uncompromising goal of providing them with the highest quality of life.  By participating in medical research activities, we bridge the gap between academic medicine and community nephrology.</p>
            <img className='w-[75%] mx-auto mt-8' src={logoPath} alt="waiting room picture" />
        </div>
    );
}

export default Home;