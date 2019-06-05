import React from 'react';
import ChipInput from 'material-ui-chip-input';

export default function SkillsInput({ onChange }) {
    return (
        <React.Fragment>
            <ChipInput
                className="margin-bottom-2"
                label="Enter a skill and press enter"
                placeholder="html, css, kungfu"
                fullWidth
                onChange={chips => onChange(chips)}
            />
        </React.Fragment>
    );
}
