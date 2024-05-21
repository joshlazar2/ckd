import React from 'react';


const Home = () => {

    const waitingRoom2 = '/assets/images/waiting2.jpg'
    const room3 = '/assets/images/room3.jpg'

    return (
        <div className='p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Welcome to Cleveland Kidney Disease Associates</h1>
            <p className='text-left text-xl mt-10'>Cleveland Kidney Disease Associates is devoted to delivering the highest level of nephrology care with compassion, respect, patient education, state-of-the-art practice, and the most recent medical developments.  Using the latest in research, technology, and treatment options, we strive to educate the public about chronic kidney disease, and to create individualized life plans for our patients, with the uncompromising goal of providing them with the highest quality of life.  By participating in medical research activities, we bridge the gap between academic medicine and community nephrology.</p>
            <div className='flex flex-col md:flex-row justify-center md:justify-around items-center mt-10 md:space-y-0 space-y-4'>
                <img className='w-[70%] md:w-[40%] rounded-lg' src={waitingRoom2} alt="waiting room picture" />
                <img className='w-[70%] md:w-[40%] rounded-lg' src={room3} alt="patient room picture" />
            </div>
        </div>
    );
}

export default Home;