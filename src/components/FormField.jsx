import React from 'react';
 
export const FormField = ({
    label,
    value,
    onChange,
    placeholder = '',
    required = false,
    as = 'input',
    type = 'text',
    className = '',
}) => {
 
    const Tag = as;
 
    return (
        <div className="mb-4">
            {label && (
                <label className="block text-lg font-medium text-dark mb-2">
                </label>
                )}
                <Tag
                type={Tag === 'input' ? type: undefined}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={Tag === 'textarea' ? 4 : undefined}
                className={'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-nome focus:ring-2 focus:ring-light ${className}'}
                />
        </div>
    );
};
 
FormField