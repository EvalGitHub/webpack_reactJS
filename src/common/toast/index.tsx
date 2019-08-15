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
    content:any, 
    type?:any,
    duration?:any,
    mask?:any
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
    info (conent?:any, type?:any, duration?:any, mask?:any) {
        return notice(conent, type, duration, mask)
    }
}