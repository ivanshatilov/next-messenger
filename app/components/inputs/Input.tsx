'use client'

import clsx from "clsx";
import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean,
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
    return (
        <div>
            <label className={clsx(`inline-block text-sm font-medium leading-6`, disabled ? "text-gray-400" : "text-gray-900")} htmlFor={id}>{label}</label>
            <div className="mt-1">
                <input id={id} type={type} disabled={disabled} {...register(id, { required })} 
                className={clsx(`
                form-input
                block
                w-full
                rounded-md
                border-0
                py-1.5
                text-gray-900
                shadow-sm
                ring-1
                ring-inset
                ring-gray-300
                placeholder:text-gray-200
                focus:ring-1
                focus:ring-inset
                focus:ring-blue-500
                sm:text-sm
                sm:leading-6
                selection:bg-blue-400
                selection:text-white
                `,
                errors[id] && "focus:ring-rose-500",
                disabled && "opacity-50 cursor-default")}/>
            </div>
        </div>
     );
}
 
export default Input;