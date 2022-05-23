import React from 'react'
import { HeaderComp, ListSearch, SearchItem } from '../components'

const ListPage = () => {
    return (
        <>
            <HeaderComp type={'list'} />
            <div className="listContainer">
                <div className="listWrapper">
                    <ListSearch />
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListPage