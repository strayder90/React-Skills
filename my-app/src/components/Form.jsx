import React, { useState } from "react";

export const Form= ({takeValueFromForm}) => {
    const [state, setState] = useState('');

    const handleFormInput = (e) => { 
        setState(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        const data = {
            value: state
        }

        takeValueFromForm(data);
        setState('');
    }

    return (
        <form onSubmit={onSubmitForm}>
            <label>Add something: </label>
            <input type="text" value={state} onChange={handleFormInput}/>
            <button type="submit">submit</button>
        </form>
    )
}