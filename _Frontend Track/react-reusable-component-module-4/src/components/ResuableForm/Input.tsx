import React from 'react';

export const Input = ({label, register,errors,type}) => {
    return (
        <div className="w-full max-w-md">
        <label htmlFor={label} className="block ">
          {label}
        </label>
        <input
          type="password"
          {...register}
          id={label}
          className=""
        />
        {errors.password && (
          <span className="text-xs text-red-500">
            {errors.name.message}
          </span>
        )}
      </div>
    );
};
