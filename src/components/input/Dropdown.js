import React from 'react';

import { DropdownList } from 'react-widgets';

const messages = {
  emptyList: 'Nenhum registro encontrado',
  emptyFilter: 'Nenhum registro encontrado com esse filtro',
};

const findParent = (el, cls) => {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
};

export const activateFocus = (e) => {
  findParent(e.target, 'field-floating').classList.add('has-float-label');
};

export const activateBlur = (e) => {
  findParent(e.target, 'field-floating').classList.remove('has-float-label');
};

const Select = (props) => {
  const { input, selectClass, readOnly, disabled, autoFocus, meta } = props;

  return (
    <div
      className={
        'form-group form-focus' +
        (input.value || meta.active ? ' not-empty' : '')
      }
    >
      <DropdownList
        {...props.input}
        id={props.name}
        className={selectClass + ' ' + (meta.error && ' error')}
        busy={!props.options}
        data={props.options}
        value={input.value}
        valueField={props.valueField}
        textField={props.textField}
        allowCreate={props.allowCreate}
        autoFocus={autoFocus}
        dropUp={props.dropUp}
        messages={messages}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={' '}
      />
      <label htmlFor={props.name} className="focus-label">
        {props.placeholder}
      </label>
      {props.meta.error && (
        <span id={`input_error_${props.input.name}`}>{props.meta.error}</span>
      )}
    </div>
  );
};

export default Select;
