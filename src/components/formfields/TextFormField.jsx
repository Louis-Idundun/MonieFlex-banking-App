import * as React from "react";

function TextFormField({
    placeHolder = 'Type a placeholder',
    id = 'PlaceHolder',
    type = 'number',
    isEnabled = true,
    required = true,
    onValueChanged = (e) => {}
}) {
    return (
        <input
            type={ type }
            id= { id }
            className={
                `appearance-none font-urbanist my-[20px] flex-col top-9 min-w-full left-0 
                ${isEnabled ? 'bg-[#EDEDED]' : 'bg-[#B5B5B5]'}
                mt-1 z-10 px-4 py-4 border border-[#5A5959] rounded-md focus:outline-none focus:border-blue-500`
            }
            placeholder= { placeHolder }
            required={ required }
            disabled={ !isEnabled }
            onChange={e => {
                onValueChanged(e.target.value)
            }}
        />
    );
}

export default TextFormField;