import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function BackBar() {
    const { pathname } = useLocation();
    const [buttonText, setButtonText] = useState('');

    useEffect(() => {
        if (pathname === '/') {
            setButtonText('')
        } else {
            setButtonText('BACK')
        }
    }, [pathname]);


    return (
        <div className="backbar">
            <Link className="Link backbar__button" to="/">{buttonText}</Link>
            <div className="backbar__title"> Work With DATA</div>
        </div>
    )
}
export default BackBar;