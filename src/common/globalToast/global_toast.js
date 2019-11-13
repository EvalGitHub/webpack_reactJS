import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './global_toast.scss';

function textInfo(msg) {
  return (
    <div className="toast_info_wrapper">
      <p className="text_des_wrapper">
        <span>{msg}</span>
      </p>
    </div>
  )
};

function iconInfo(msg) {
  return (
    <div className="toast_error_info_wrapper">
      <div className='toast_conten'>
        <img className='err_icon' src={require('@/assets/toast_ico_success 2@2x.png')} />
        <p className="text_des_wrapper">
          {msg}
        </p>
      </div>
    </div>
  )
};

export default class Toast extends Component {
  render() {
    let { tip, infoType } = this.props;
    return (
      <Fragment>
        {
          infoType === 'text' ? textInfo(tip) : iconInfo(tip)
        }
      </Fragment>
    );
  }
}

Toast.propTypes = {
  tip: PropTypes.string, // err msg
  infoType: PropTypes.string // toast type  [text, iconText]
};

Toast.newInstance = function newNotificationInstance(properties) {
  let props = properties || {};
  let div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(React.createElement(Toast, props), div);
  return {
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
};