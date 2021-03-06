import React from 'react'
import useFetch from '../../hooks/useFetch'

const Featured = () => {

    const { data, loading, error } = useFetch('/hotels/countByCity?cities=Bitung,Manado,Tomohon');


    return (
        <div className='featured'>
            {
                loading ? ("loading please wait") :

                    (<>

                        <div className="featuredItem">
                            <img src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780" alt="alal" />
                            <div className="featuredTitles">
                                <h1>Bitung</h1>
                                <h2>{data[0]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631" alt="alal" />
                            <div className="featuredTitles">
                                <h1>Manado</h1>
                                <h2>{data[1]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt="alal" />
                            <div className="featuredTitles">
                                <h1>Tomohon</h1>
                                <h2>{data[2]} properties</h2>
                            </div>
                        </div>
                    </>)
            }
        </div>
    )
}

export default Featured