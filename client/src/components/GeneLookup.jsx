import React, { useState } from 'react';
import { geneData } from '../assets/data/data';
import Select from 'react-select';
import { FaDna } from "react-icons/fa6";

const GeneLookup = () => {
    const helix = '/assets/images/dna_helix1.jpeg'
    const [selectedGene, setSelectedGene] = useState(null);
    const [selectedGeneDescription, setSelectedGeneDescription] = useState('');

    // Convert geneOptions to the format expected by react-select
    const geneOptions = Object.keys(geneData).map(gene => ({ value: gene, label: gene }));

    const handleSelect = (selectedOption) => {
        setSelectedGene(selectedOption);
        const description = geneData[selectedOption.value];
        setSelectedGeneDescription(description);
    };

    const filterOption = (option, inputValue) => {
        return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
    };

    return (
        <div className='p-8'>
            <h1 className='text-center md:text-left text-3xl text-ckdGreen font-bold'>Gene Lookup</h1>
            <div className='flex flex-col md:flex-row justify-between '>
                <div className='mt-8 space-y-4'>
                    <div className='flex flex-col items-center text-left md:items-start md:text-left p-4'>
                        <Select
                            options={geneOptions}
                            onChange={handleSelect}
                            placeholder="Search for a gene..."
                            isSearchable
                            className='w-[250px] md:w-[500px]'
                            filterOption={filterOption} // Use the custom filter function
                        />
                        {selectedGeneDescription && (
                            <p className='text-lg mt-8'>{selectedGeneDescription}</p>
                        )}
                    </div>
                </div>
                <img className='md:w-[35%] md:h-[300px] rounded-lg mt-8 md:mt-0' src={helix} alt="helix" />
            </div>
        </div>
    );
};

export default GeneLookup;
