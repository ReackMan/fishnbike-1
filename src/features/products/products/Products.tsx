import React from 'react'
import { ProductsHeader, StyledCards, StyledProducts } from './StyledProducts'
import { Card } from './card/Card'
import { useActions } from '../../../utils/redux-utils'
import { asyncActions } from '../../order/order-reducer'
import { ProductType } from '../../../api/types'

type ProductsPropsType = {
    choice: string
    productsItems: ProductType[]
    theme: string
    products: any
    allProducts: ProductType[]
    handleProductDetails: (id: string) => void
    handleOverflow: (isComponentOpen: boolean) => void
    productDetailsVisible: boolean
    isCartOpen: boolean
    toggleCart: (isCartOpen: boolean) => void
}


export const Category: CategoryType = {
    all: 'Все',
    bikeKits: 'Велонаборы',
    sonars: 'Эхолоты',
    boats: 'Кораблики',
    accessories: 'Аксессуары',
    kits: 'Наборы'
}
type CategoryType = {
    [p: string]: string
}

export const Products = (props: ProductsPropsType) => {

    const { addOrder } = useActions(asyncActions)

    const addOrderHandler = (id: string) => {
        addOrder({ id })
    }

    return (
        <StyledProducts productDetailsVisible={props.productDetailsVisible}>
            <ProductsHeader>
                <h2>{Category[props.choice] || 'Все'}</h2>
            </ProductsHeader>
            <StyledCards>
                {props.productsItems.map((product: ProductType, index: number) => (
                    <Card key={index} product={product} addOrder={addOrderHandler}
                          handleProductDetails={props.handleProductDetails} theme={props.theme}
                          handleOverflow={props.handleOverflow} choice={props.choice}
                          isCartOpen={props.isCartOpen} toggleCart={props.toggleCart}/>
                ))}
            </StyledCards>
        </StyledProducts>
    );
};

