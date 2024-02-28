import { useState } from "react";

export interface InputTextProps {
    placeholder: string,
    submit: Function,
}
  
export function InputText(props: InputTextProps) {
    const [value, setValue] = useState('');

    function onPress(event: React.KeyboardEvent<HTMLElement>) {
        if(event.key === 'Enter' && value !== ''){
        event.preventDefault();
        props.submit(value);
        setValue('');
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setValue(event.target.value)
    }

    return (
        <input type="text" className="green-border" placeholder={props.placeholder} value={value} onKeyDown={onPress} onChange={handleChange}/>
    );
}