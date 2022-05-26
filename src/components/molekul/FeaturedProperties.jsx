import React from 'react'
import useFetch from '../../hooks/useFetch'

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch('/hotels?feature=true&limit=4')

    return (
        <div className='fp'>
            {loading ? ("loading") : (

                <>
                    {
                        data.map((item) => (

                            <div className="fpItem" key={item._id}>

                                <img src={item.photos[0]} alt={item.name} className="fpImg" />
                                <span className="fpName">{item.name}</span>
                                <span className="fpCity">{item.city}</span>
                                <span className="fpPrice">starting from IDR {item.cheapestPrice}</span>
                                <div className="fpRating">
                                    {
                                        item.rating &&
                                        <>
                                            <button>{item.rating}</button>
                                            <span>exelent</span>
                                        </>
                                    }

                                </div>
                            </div>
                        ))
                    }
                </>

            )}
        </div>
    )
}

export default FeaturedProperties