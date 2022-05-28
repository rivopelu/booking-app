import React from 'react'
import { Link } from 'react-router-dom'

const SearchItem = ({ item }) => {
    return (
        <div className='searchItem'>
            <img src="https://images.unsplash.com/photo-1653311236202-aa57d07e0b9c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt="Hello" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance}m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Lorem ipsum dolor sit amet consectetur </span>
                <div className="siFeatures">
                    {item.desc}
                </div>
                <div className="siCancelOp">Free cancellation</div>
                <div className="siCancelOpsubtitle">
                    You can cancel later, so lock in this great price today!
                </div>
            </div>
            <div className="siDetails">
                {item.rating &&
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>
                }
                <div className="siDetailTexts">
                    <span className="siPrice">IDR{item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem