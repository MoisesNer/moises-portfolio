import React from 'react'
import './infoSection.css'
import { Link } from 'react-router-dom'

function InfoSection({
    heading,
    paragraph1,
    paragraph2,
    buttonLabel,
    reverse,
    image
}) {

    return (
        <section className='infoSection'>
            <div className="container">
                <div className="columnLeft">
                    <h1>{heading}</h1>
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                    <Link to='/works'>{buttonLabel}</Link>
                </div>
                <div className="columnRight" reverse={reverse}>
                    <img src={image} alt="works" />
                </div>
            </div>
        </section>
    )
}

export default InfoSection