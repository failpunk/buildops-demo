import React, { useState, useEffect } from 'react';
import ChipInput from 'material-ui-chip-input';

export default function SkillsInput({ skills = [], onChange }) {
    const [chips, setChips] = useState([]);

    useEffect(() => {
        console.log('skills', skills);
        setChips(skills.map(s => s.name));
    }, []); // esslint-disable-line react-hooks/exhaustive-deps

    function addSkill(skill) {
        console.log('sklill', skill);
        const updatedChips = [...chips, skill];
        setChips(updatedChips);
        onChange(updatedChips);
    }

    function removeSkill(skill) {
        console.log('sklill', skill);
        const filteredChips = chips.filter(c => c !== skill);
        setChips(filteredChips);
        onChange(filteredChips);
    }

    return (
        <React.Fragment>
            <ChipInput
                className="margin-bottom-2"
                label="Enter a skill and press enter"
                placeholder="html, css, kungfu"
                fullWidth
                value={chips}
                onAdd={addSkill}
                onDelete={removeSkill}
            />
        </React.Fragment>
    );
}
