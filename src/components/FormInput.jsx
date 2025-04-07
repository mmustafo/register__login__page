import React from "react";


function FormInput({ name, type, label }) {
  return (
    <fieldset className="fieldset max-w-[384px]">
      <legend className="fieldset-legend text-white md:text-black">
        {label}
      </legend>
      <input
        type={type}
        className="input max-w-[368px] w-full "
        name={name}
        placeholder="Type here"
        required
      />
    </fieldset>
  );
}

export default FormInput;
