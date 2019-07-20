import './toast.scss'
import * as React from 'react';
 
/**
 *  content, 
    type,
    duration,
    onClose,
    mask
 **/
function notice (
    content, 
    type,
    duration,
    mask
) {

    return (
        <div className="toast_wrapper">
            <p className="text_des_wrapper">
                <span>{content}</span>
            </p>
        </div> 
    )
}

export default {
    info (conent, type, duration, mask) {
        return notice(conent, type, duration, mask)
    }
}