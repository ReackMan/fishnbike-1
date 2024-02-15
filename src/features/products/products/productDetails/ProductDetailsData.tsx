import React from 'react'
import styled from 'styled-components'
import { BtnBox, Button } from '../../../../components/Button'
import { ProductDetailsCounter } from './ProductDetailsCounter'
import { Icon } from '../../../../components/icon/Icon'
import { ProductParameters } from './ProductParameters'
import { useActions, useAppSelector } from '../../../../utils/redux-utils'
import { asyncActions } from '../../../order/order-reducer'

type ProductDetailsDataPropsType = {
    productId: string
    addOrder: (productCount: number) => void
    toggleCart: (isCartOpen: boolean) => void
    isCartOpen: boolean
    handleOverflow: (isComponentOpen: boolean) => void
    choice: string
}

export const ProductDetailsData = (props: ProductDetailsDataPropsType) => {

    const { addOrder } = useActions(asyncActions)

    let product = useAppSelector(state =>
        state.products.find(p => p.id === props.productId))

    if (!product) return <></>

    const toCart = () => {
        if (!product) return
        addOrder({ id: product.id })
    }

    const openCart = () => {
        props.toggleCart(!props.isCartOpen)
        props.handleOverflow(!props.isCartOpen)
    }


    return (
        <StyledProductDetailsData>
            {/* Product title */}
            <ProductTitle>
                {product.headerText}
            </ProductTitle>
            {/* Product article */}
            <span>{'Артикул: ' + product.id}</span>
            {/* Product price */}
            <span>{product.amount + ' р.'}</span>
            {/* Product params */}
            <ProductParameters choice={props.choice} productId={props.productId} product={product}/>
            {/* Buttons start */}
            <BtnBox maxWidth='400px' width='100%'>
                <ProductDetailsCounter productId={props.productId}/>
                <Button width='100%' bg='#074d4a' onClick={toCart} borderRadius='25px' marginTop='40px'
                        visible={product.count != 0 ? 'none' : 'flex'}>В корзину</Button>
                <Button width='22%' bg='#074d4a' onClick={openCart} borderRadius='25px' marginTop='40px'
                        visible={product.count != 0 ? 'flex' : 'none'}>
                    <Icon iconId='right-arrow' width='40px' height='40px' viewBox='0 0 20 20'/>
                </Button>
            </BtnBox>
            {/* Buttons end */}
        </StyledProductDetailsData>
    );
};

const StyledProductDetailsData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 400px;

  button {
    z-index: 111;

    &:last-child {
      justify-content: start;
      box-shadow: #074d4a -35px 0 0 0;
    }
  }
`

const ProductTitle = styled.h2`
  font-size: 34px;
`

// const ProductParams = styled.ul`
//   white-space: pre-wrap;
// `


