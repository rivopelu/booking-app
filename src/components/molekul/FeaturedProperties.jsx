import React from 'react'

const FeaturedProperties = () => {

    const fpList = [
        { id: 1, name: 'Aparel Hotels', city: 'Manado', price: 'starting from $120', ratingNumber: '8.9', ratingTitle: 'excelent', img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870' },
        { id: 2, name: 'Fave Hotels', city: 'Bitung', price: 'starting from $420', ratingNumber: '7.9', ratingTitle: 'excelent', img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870' },
        { id: 3, name: 'Aparel Hotels', city: 'Manado', price: 'starting from $120', ratingNumber: '8.9', ratingTitle: 'excelent', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870' },
        { id: 4, name: 'Fave Hotels', city: 'Bitung', price: 'starting from $420', ratingNumber: '7.9', ratingTitle: 'excelent', img: 'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813' },
    ]
    return (
        <div className='fp'>

            {
                fpList.map((item) => (

                    <div className="fpItem">

                        <img src={item.img} alt={item.name} className="fpImg" />
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">{item.price}</span>
                        <div className="fpRating">
                            <button>{item.ratingNumber}</button>
                            <span>{item.ratingTitle}</span>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default FeaturedProperties