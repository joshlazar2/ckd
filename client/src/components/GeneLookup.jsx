import React, { useState } from 'react';
import { geneData } from '../assets/data/data';

const GeneLookup = () => {

    const [geneOptions, setGeneOptions] = useState(Object.keys(geneData));
    const [selectedGene, setSelectedGene] = useState('')
    const [selectedGeneDescription, setSelectedGeneDescription] = useState('')

    const changeHandler = (e) => {
        const selectedGeneName = e.target.value;
        setSelectedGene(selectedGeneName);

        // Access the description directly from geneData using the selected gene name
        const description = geneData[selectedGeneName];
        setSelectedGeneDescription(description);
    }

    return (
        <div className='p-8'>
            <h1 className='text-left text-3xl text-ckdGreen font-bold'>Gene Lookup</h1>
            <div className='mt-8 space-y-4'>
                <div className='text-left'>
                    <select className='border border-ckdGreen p-2 rounded-lg' onChange={changeHandler} name="gene">
                        {geneOptions.map(geneName => (
                            <option key={geneName} value={geneName}>{geneName}</option>
                        ))}
                    </select>
                    {
                        setSelectedGeneDescription ? <p className='text-lg mt-8'>{selectedGeneDescription}</p> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default GeneLookup;
