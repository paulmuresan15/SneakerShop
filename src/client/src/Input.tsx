import React, {FC , InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>
{
  name:string;
  label:string;
}

const Input: FC<InputProps> = ({name, label,...rest}) =>
{
    return(
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest}></input>
        </div>
    )
}

export default Input;