import React, { useState } from 'react';
import charactersData from '../data/characters.json';
import MyRadarChart from '../components/GraphiqueEval';

const ComparePage = () => {

    // const characters  = charactersData;
    const [option1, setOption1] = useState(charactersData[0]);
    const [option2, setOption2] = useState(charactersData[1]);

    const handleChange1 = (event) => {
        const characterName = event.target.value;
        const character = charactersData.find(character => character.name === characterName);
        setOption1(character);
    };

    const handleChange2 = (event) => {
        const characterName = event.target.value;
        const character = charactersData.find(character => character.name === characterName);
        setOption2(character);
    };

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    const violetTextStyle = {
        color: 'violet'
    };
    
    const greenTextStyle = {
        color: 'green'
    };

    // Prepare your data for the radar chart
    const data = option1 && option2 ? Object.keys(option1.capacities).map(key => ({
            subject: key,
            [option1.name]: option1.capacities[key],
            [option2.name]: option2.capacities[key]
    })) : [];

    return (
        <>
            <h2>Compare Page</h2>
            <p style={centerStyle}>
            <select onChange={handleChange1}>
                {charactersData.map((character, index) => (
                    <option key={index} value={character.name}>
                        {character.name}
                    </option>
                ))}
            </select>
            <select onChange={handleChange2}>
                {charactersData.map((character, index) => (
                    <option key={index} value={character.name}>
                        {character.name}
                    </option>
                ))}
            </select>
            </p>
            <p style={centerStyle}>
                {option1 && option1.thumbnail && 
                <img src={`${option1.thumbnail.path}/standard_large.${option1.thumbnail.extension}`} alt={option1.name} style={{ marginRight: '10px' }}/>
            }
            {option2 && option2.thumbnail && 
                <img src={`${option2.thumbnail.path}/standard_large.${option2.thumbnail.extension}`} alt={option2.name} />
            }
            </p>
            <p style={centerStyle}>
                <strong style={violetTextStyle}>{option1 && option1.name}</strong> vs <strong style={greenTextStyle}>{option2 && option2.name}</strong>
            </p>
            <p style={centerStyle}>
                <MyRadarChart data={data} />
            </p>
        </>
    );
}

export default ComparePage;