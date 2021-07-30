import React from 'react'
import './infoSection.css'
import { Link } from 'react-router-dom'
import { InfoData } from '../../data/InfoData'

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
            {InfoData.map((item, index) => (
                <div className="container" key={index}>
                    <div className="columnLeft">
                        <h1>{item.heading}</h1>
                        <p>{item.paragraph1}</p>
                        <p>{item.paragraph2}</p>
                        <Link to='/works'>{item.buttonLabel}</Link>
                    </div>
                    <div className="columnRight" reverse={reverse}>
                        <img src={item.image} alt="works" />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default InfoSection