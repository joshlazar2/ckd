import React from 'react';

const KidneyDisease = () => {
    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Kidney Disease</h1>
            <p className='text-left text-lg mt-8'>
                I appreciate the  opportunity to serve your medical community as a nephrologist. As a board member of the National Kidney  Foundation (NKF) I see my role as that of health care provider and educator in  the community. The NHANES III data revealed that 1-in-9 adult Americans  suffer with Chronic Kidney Disease, one of the most potent predictors of a  cardiovascular event. Unfortunately, CKD  awareness is poor and thus many are unaware of their disease.
                <br></br>
                From the NHANES III  data, it is estimated that over 20 million people in the U.S. suffer from Chronic Kidney  Disease (CKD- that’s 1 of every 9!) and another 20 million are at risk for  kidney disease. The unfortunate reality  of this disease is that 7.6 million patients are in Stage 3 Kidney Disease (GFR 30-59) and 400,000 and 300,000 in Stage 4 and 5  respectively (as of 1998- it’s already grown!).
                <br></br>
                Early detection and dedicated kidney care can help  prevent the progression of kidney disease to kidney failure and, as important,  prevent cardiovascular events in this high risk group. As you are aware, high risk groups include  those with diabetes, hypertension and a family history of kidney disease. Patients of African, Hispanic, Pacific Island and Native American descent, are  at greater risk for these factors and therefore inherently are at greater risk  for CKD. I will be working to assure  that all local laboratories estimate and report GFR  automatically when we order a basic metabolic panel or renal panel. In addition, we will be offering a free KEEP  screening (Kidney Early Evaluation Program) on April 4th in Cleveland which is an  opportunity for at-risk individuals to receive free measurement and education  regarding blood pressure, GFR, and  proteinuria.
                <br></br>
                My first call to action is to ask that we regularly  order and check GFR in addition to  creatinine clearance in patients at risk for CKD, and look for microalbumin in  all patients with both hypertension and diabetes. I would be honored to see these at-risk  patients as early as possible to employ all possible interventions for slowing  down GFR decline and preventing  cardiovascular events. Referral in early  stages is ideal, but when a patient’s GFR  is 60 or less, essential for the best patient outcomes. Together we can come up with a care plan that  will best improve patient outcomes. I  look forward to assisting you and your patients in this vital care plan.
                <br></br>
                I’ve included the GFR  staging system below as there has been much interest in this as of late. In addition, please find our mission  statement, my bio, and recent publications.  One of my primary goals is that of offering an academic style of  medicine in a community nephrology setting.  Our home-grown electronic health record (S &amp; J CKD manager), is an  expert system which offers a full analysis of each patient, each visit, to  optimize medical care. As of February 1st, 2007,  I’ll be available for consultation at SouthPointe and Hillcrest hospitals. Thanks for your time and I hope to have the  opportunity to partner with you!
                <br></br>
                Sincerely,
            </p>
            <p className='text-left text-lg mt-8'>
                Andrew E. Lazar, MD
                <br></br>
                Cleveland Kidney Disease Associates
            </p>
            <div className='border border-t-ckdGreen my-10'></div>
            <h2 className='text-left md:text-center text-2xl text-ckdGreen font-bold'>5 Stages of Chronic Kidney Disease</h2>
            <div className='flex justify-center mt-10'>
                <table className='table-auto border border-black'>
                    <thead>
                        <tr>
                            <th className='border border-black p-4 text-ckdGreen'>Stage</th>
                            <th className='border border-black p-4 text-ckdGreen'>Description</th>
                            <th className='border border-black p-4 text-ckdGreen'>Glomerular Filtration Rate (GFR) by MDRD formula</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-black p-4'>At increased risk</td>
                            <td className='border border-black p-4'><b>Risk factors</b> for kidney disease (e.g., diabetes, high blood pressure, family history, older age, ethnic group)</td>
                            <td className='border border-black p-4'>More than 90</td>
                        </tr>
                        <tr>
                            <td className='border border-black p-4'>1</td>
                            <td className='border border-black p-4'>Kidney damage (protein in the urine) and <b>normal</b> GFR</td>
                            <td className='border border-black p-4'>More than 90</td>
                        </tr>
                        <tr>
                            <td className='border border-black p-4'>2</td>
                            <td className='border border-black p-4'>Kidney damage and <b>mild</b> decrease in GFR</td>
                            <td className='border border-black p-4'>60 to 89</td>
                        </tr>
                        <tr>
                            <td className='border border-black p-4'>3</td>
                            <td className='border border-black p-4'>Moderate decrease in GFR</td>
                            <td className='border border-black p-4'>30 to 59</td>
                        </tr>
                        <tr>
                            <td className='border border-black p-4'>4</td>
                            <td className='border border-black p-4'><b>Severe</b> decrease in GFR</td>
                            <td className='border border-black p-4'>15 to 29</td>
                        </tr>
                        <tr>
                            <td className='border border-black p-4'>5</td>
                            <td className='border border-black p-4'><b>Kidney failure</b> (dialysis or kidney transplant needed)</td>
                            <td className='border border-black p-4'>Less than 15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default KidneyDisease;