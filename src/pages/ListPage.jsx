import React from 'react'
import { HeaderComp, ListSearch } from '../components'

const ListPage = () => {
    return (
        <>
            <HeaderComp type={'list'} />
            <div className="listContainer">
                <div className="listWrapper">
                    <ListSearch />
                    <div className="listResult"></div>
                </div>
            </div>
        </>
    )
}

export default ListPage