import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react'; // @ts-ignore

import hoistStatics from 'hoist-non-react-statics';
import RadioGroupContext from './RadioGroupContext';
export default function asRadioGroupChild(WrappedComponent) {
  class RadioGroupChild extends Component {
    static propTypes = {
      value: _pt.oneOfType([_pt.string, _pt.number, _pt.bool]),
      selected: _pt.bool
    };

    render() {
      const {
        value: buttonValue,
        selected
      } = this.props;
      return /*#__PURE__*/React.createElement(RadioGroupContext.Consumer, null, ({
        value,
        onValueChange
      }) => /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.props, {
        selectedValue: value,
        selected: buttonValue !== undefined ? value === buttonValue : selected,
        onValueChange: onValueChange
      })));
    }

  }

  hoistStatics(RadioGroupChild, WrappedComponent);
  RadioGroupChild.displayName = WrappedComponent.displayName;
  return RadioGroupChild;
}