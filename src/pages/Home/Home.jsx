import React from 'react'
import Hero from '../../components/Hero/Hero'
import InfoSection from '../../components/InfoSection/InfoSection'

import { HeroData } from '../../data/HeroData'

export default function Home() {
    return (
        <>
            <Hero slides={HeroData}/>
            <InfoSection/>
        </>
    )
}
