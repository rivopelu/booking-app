import React from 'react'
import { Featured, FeaturedProperties, HeaderComp, MailList, PropertyList } from '../components'

const HomePage = () => {
    return (
        <>
            <HeaderComp />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by properties type</h1>
                <PropertyList />
                <h1 className="homeTitle">Home guest Love</h1>
                <FeaturedProperties />
                <MailList />
            </div>
        </>
    )
}

export default HomePage