import React from 'react'
import ShopNav from './ShopNav'

const Shop = () => {
    const items = [
        {id: 0, url: '', title: 'Laptop', content: 'lorem 120323'},
        {id: 1, url: '', title: 'Phone', content: 'lorem 120323'},
        {id: 2, url: '', title: 'Clothes', content: 'lorem 120323'},
        {id: 3, url: '', title: 'Underwear', content: 'lorem 120323'}
      ]
    return (
        <div>
            <ShopNav/>
        </div>
    )
}

export default Shop
