import React from 'react';

const Input = (props) => {
  const {
    input,
    inputClass,
    inputLabel,
    type,
    width,
    size,
    required,
    maxLength,
    readOnly,
    disabled,
    autoFocus,
    autoComplete,
    meta,
  } = props;
  return (
    <div className="form-group form-focus">
      <input
        {...props.input}
        id={input.name}
        className={`${inputClass + ' ' + (meta.error && ' error')}`}
        type={type}
        required={required}
        placeholder=" "
        maxLength={maxLength}
        style={{ width }}
        readOnly={readOnly}
        size={size}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
      />
      <label className="focus-label">{inputLabel}</label>
      {meta.error && <span id={`input_error_${input.name}`}>{meta.error}</span>}
    </div>
  );
};

export default Input;
