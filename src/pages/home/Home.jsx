import React from 'react'
import Hero from './Hero'
import SubMenu from './SubMenu'

function Home() {
    return (
        <div className='xl:w-[1170px] w-11/12 mx-auto flex '>
            <SubMenu />
            <Hero />
        </div>
    )
}

export default Home