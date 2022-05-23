import React from 'react'

const PropertyList = () => {

    const listProperty = [
        { id: 1, name: 'main Hotels', sub: '232 hotels', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821' },
        { id: 2, name: 'paradiese Hotels', sub: '232 motelai', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870' },
        { id: 3, name: 'main Hotels', sub: '232 hotels', img: 'https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870' },
        { id: 4, name: 'paradiese Hotels', sub: '232 motelai', img: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870' },
        { id: 5, name: 'main Hotels', sub: '232 hotels', img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870' },
    ]
    return (
        <div className='pList'>
            {
                listProperty.map((item) => (

                    <div className="pListItem" key={item.id}>
                        <img src={item.img} alt="" className="pListImg" />
                        <div className="pListTitles">
                            <h1>{item.name}</h1>
                            <h2>{item.sub}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PropertyList