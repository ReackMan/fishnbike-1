import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {
    decreaseAmountCreator, deleteOrderCreator,
    increaseAmountCreator,
} from "../../../../Redux/order-reducer";
import { useAppDispatch, useAppSelector } from '../../../../utils/redux-utils'

type ProductDetailsCounterPropsType = {
    setProductCount?: (e: any) => void
    productId: string
    borderRadius?: string
}

export const ProductDetailsCounter = (props: ProductDetailsCounterPropsType) => {

    const dispatch = useAppDispatch()
    const orderAmount = useAppSelector(state => state.order.orderAmount)
    let product = useAppSelector(state =>
        state.products.find(p => p.id === props.productId))

    if (!product) {
        console.log('product not found in the state')
        return <></>
    }

    const incrementCounter = () => {
        // dispatch(increaseProductCountCreator(props.product));
        // dispatch(increaseAmountCreator(orderAmount + product.amount))
    };

    const decrementCounter = () => {
        // if (product.count > 1) {
            // dispatch(decreaseProductCountCreator(props.product));
            // dispatch(decreaseAmountCreator(orderAmount - product?.amount))
        // } else {
            // dispatch(decreaseAmountCreator(orderAmount - product.amount * product.count))
            // dispatch(deleteOrderCreator(product.id))
            // dispatch(deleteProductCountCreator(props.product))
        // }
    };

    return (
        <StyledProductCounter productCount={0} borderRadius={props.borderRadius}>
            <span onClick={decrementCounter}>
                <Icon iconId='minus' width='30px' height='30px' viewBox='3 0 18 18'/>
            </span>
            <input type="number" min={0} max={9999} step={1} size={4} maxLength={4}
                   value={0} disabled={true}/>
            <span onClick={incrementCounter}>
                <Icon iconId='plus' width='30px' height='30px' viewBox='6 0 18 18'/>
            </span>
        </StyledProductCounter>
    );
};

const StyledProductCounter = styled.div<{ productCount?: number, borderRadius?: string }>`
  display: ${props => props.productCount != 0 ? 'flex' : 'none'};
  margin: 40px 0 0 0;
  z-index: 1;
  width: 75%;
  height: 45px;
  border: 1px solid #000;
  padding-right: 22px;
  //border-top: 1px solid #000;
  //border-right: 0 transparent;
  //border-bottom: 1px solid #000;
  //border-left: 1px solid #000;
  border-radius: 25px;
  position: relative;

  &::before {
    //display: none;
    content: '';
    z-index: 111;
    background-color: #fff;
    //border: 1px solid #000;
    border-top: 1px solid #000;
    border-right: 0 transparent;
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    position: absolute;
    right: 22px;
    top: -1px;
    height: 45px;
    width: 22px;
  }

  &::after {
    //display: none;
    content: '';
    z-index: 111;
    background-color: #fff;
    //border: 1px solid #000;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-left: 0 transparent;
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    position: absolute;
    right: -2px;
    top: -2px;
    height: 50px;
    width: 23px;
  }

  span {
    width: 33%;
    text-align: center;
  }

  input {
    width: 33%;
    border: none;
    outline: none;
    text-align: center;
    font-size: 20px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`
