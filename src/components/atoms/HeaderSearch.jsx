import { faBed, faCalendar, faMinus, faPerson, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';
const HeaderSearch = () => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState('')
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })


    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } })
    }

    return (
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input type="text" placeholder='where are you going?' className='headerSearchInput' onChange={e => setDestination(e.target.value)} value={destination} />
            </div>
            <div className="headerSearchItem" >
                <FontAwesomeIcon icon={faCalendar} className='headerIcon' />
                <span style={{ cursor: 'pointer' }} onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
                {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    minDate={new Date()}
                />}
            </div>
            <div className="headerSearchItem" >
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                {
                    openOptions &&


                    <div className="options">
                        <div className="optionsItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" onClick={() => handleOption('adult', 'd')} disabled={options.adult <= 1}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span className='optionCounterNumber'>{options.adult}</span>
                                <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>

                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        <div className="optionsItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" onClick={() => handleOption('children', 'd')} disabled={options.children <= 0}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span className='optionCounterNumber'>{options.children}</span>
                                <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>
                                    <FontAwesomeIcon icon={faPlus} />

                                </button>
                            </div>
                        </div>
                        <div className="optionsItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" onClick={() => handleOption('room', 'd')} disabled={options.room <= 1}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span className='optionCounterNumber'>{options.room}</span>
                                <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>

                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch} >Search</button>
            </div>
        </div >
    )
}

export default HeaderSearch