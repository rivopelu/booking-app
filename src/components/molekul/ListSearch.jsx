import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { BtnComp } from '../atoms'

const ListSearch = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [openDate, setOpenDate] = useState(false);


    return (
        <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
                <label htmlFor="detinationInput">Destionation</label>
                <input type="text" id='destinationInput' placeholder={destination} />
            </div>
            <div className="lsItem">
                <label htmlFor="checkIn">Check-in Date</label>
                <span className='dateInputMain' onClick={() => setOpenDate(!openDate)} id='checkIn' >{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
                {
                    openDate && (
                        <div style={{ color: 'black', }}>

                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                                minDate={new Date()}
                            />
                        </div>
                    )
                }
            </div>
            <div className="lsItem">
                <div className="options">Option</div>
                <div className="lsOptions">

                    <div className="lsOptionsItem">
                        <span className="lsOptionText">Min Price <small>Per night</small>
                        </span>
                        <input type="number" min={1} />
                    </div>
                    <div className="lsOptionsItem">
                        <span className="lsOptionText">Max Price <small>Per night</small>
                        </span>
                        <input type="number" min={1} />
                    </div>
                    <div className="lsOptionsItem">
                        <span className="lsOptionText">Adult
                        </span>
                        <input type="number" min={1} placeholder={options.adult} />
                    </div>
                    <div className="lsOptionsItem">
                        <span className="lsOptionText">
                            children
                        </span>
                        <input type="number" min={0} placeholder={options.children} />
                    </div>
                    <div className="lsOptionsItem">
                        <span className="lsOptionText">
                            Room
                        </span>
                        <input type="number" min={1} placeholder={options.room} />
                    </div>
                </div>

                <BtnComp title={'search'} />
            </div>
        </div >
    )
}

export default ListSearch