import React from 'react';
import DatePicker from 'react-datepicker';

const DateInput = (props) => {
  const {
    input,
    readOnly,
    fieldName,
    inputId,
    meta,
    maxDate,
    minDate,
    customFormat,
    showTimeSelect,
    showTimeSelectOnly,
    excludeTimes,
  } = props;

  const handleDateFormat = () => {
    if (showTimeSelect && showTimeSelectOnly) return 'HH:mm';
    if (showTimeSelect) return 'dd/MM/yyyy, HH:mm';
    if (customFormat) return customFormat;
    return 'dd/MM/yyyy';
  };
  return (
    <div
      className={`form-group form-focus ${
        input.value || meta.active ? ' not-empty' : ''
      }`}
    >
      <DatePicker
        {...input}
        {...props}
        className={`form-control floating ${meta.error && 'error'}`}
        timeFormat={'HH:mm'}
        timeIntervals={30}
        dateFormat={handleDateFormat()}
        fieldName={fieldName}
        placeholderText=" "
        id={input.name}
        name="date"
        excludeTimes={excludeTimes ? excludeTimes : null}
        readOnly={readOnly}
        maxDate={maxDate}
        minDate={minDate}
        selected={input.value || null}
        onChange={input.onChange}
        onBlur={() => input.onBlur(input.value)}
        showTimeSelect={showTimeSelect}
        showTimeSelectOnly={showTimeSelectOnly}
        autoComplete="off"
      />
      <label htmlFor={input.name} className="focus-label">
        {fieldName}:
      </label>
      {meta.error && (
        <span id={`input_error_${inputId}`} className="">
          {meta.error}
        </span>
      )}
    </div>
  );
};

export default DateInput;
