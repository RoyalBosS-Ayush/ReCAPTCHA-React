import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import "../css/index.css"

export default function Captcha() {
    const onChange = (event) => {
        console.log(event);
        alert("CAPTCHA SUCCESSFUL!")
    }

    const site_key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"   // Replace these test keys with yours
    // your keys won't work on localhost

    return (
        <div className='captcha-box'>
            <ReCAPTCHA sitekey={site_key} onChange={onChange} />
        </div>
    )
}
