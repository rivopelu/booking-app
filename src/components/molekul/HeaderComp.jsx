import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HeaderSearch } from '../atoms'

const HeaderComp = ({ type }) => {

    const dataItem = [
        { id: 1, active: 'active', name: 'Stay', icon: faBed },
        { id: 2, active: '', name: 'Flights', icon: faPlane },
        { id: 3, active: '', name: 'Car Rentals', icon: faCar },
        { id: 4, active: '', name: 'Car Attractions', icon: faBed },
        { id: 5, active: '', name: 'Airport Taxis', icon: faTaxi },
    ]

    return (
        <div className="HeaderComp">
            <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>

                <div className="headerList">


                    {
                        dataItem.map((item) => (

                            <div key={item.id} className={`headerListItem ${item.active}`}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
                {type !== 'list' &&
                    <>
                        <h1 className="headerTitle">A life time of discount ? it's Genius.</h1>
                        <p className="headerDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos aspernatur eveniet! Lorem ipsum dolor sit.</p>
                        <button className='headerBtn'>Sign In / Register</button>
                        <HeaderSearch />
                    </>
                }
            </div>
        </div>
    )
}

export default HeaderComp