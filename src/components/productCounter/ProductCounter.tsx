import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {
    decreaseAmountCreator, deleteOrderCreator,
    increaseAmountCreator,
} from "../../Redux/order-reducer";
import { useAppDispatch, useAppSelector } from '../../utils/redux-utils'
import { ProductType } from '../../api/types'


type ProductCounterPropsType = {
    setProductCount?: (e: any) => void
    product: ProductType
    productCount: number
    borderRadius?: string
}

export const ProductCounter = (props: ProductCounterPropsType) => {

    const dispatch = useAppDispatch()
    const orderAmount = useAppSelector(state => state.order.orderAmount)


    const incrementCounter = () => {
        // dispatch(increaseProductCountCreator(props.product));
        dispatch(increaseAmountCreator(orderAmount + props.product?.amount))
    };

    const decrementCounter = () => {
        if (props.productCount > 1) {
            // dispatch(decreaseProductCountCreator(props.product));
            dispatch(decreaseAmountCreator(orderAmount - props.product?.amount))
        } else {
            dispatch(decreaseAmountCreator(orderAmount - props.product.amount * props.product.count))
            dispatch(deleteOrderCreator(props.product.id))
            // dispatch(deleteProductCountCreator(props.product))
        }
    };

    return (
        <StyledProductCounter productCount={props.productCount} borderRadius={props.borderRadius}>
            <span onClick={decrementCounter}>
                <Icon iconId='minus' width='30px' height='30px' viewBox='3 0 18 18'/>
            </span>
            <input type="number" min={0} max={9999} step={1} size={4} maxLength={4}
                   value={props.productCount} disabled={true}/>
            <span onClick={incrementCounter}>
                <Icon iconId='plus' width='30px' height='30px' viewBox='3 0 18 18'/>
            </span>
        </StyledProductCounter>
    );
};

const StyledProductCounter = styled.div<{ productCount?: number, borderRadius?: string }>`
  display: ${props => props.productCount != 0 ? 'flex' : 'none'};
  width: 80%;
  height: 45px;
  border: 1px solid #000;
  border-radius: ${props => props.borderRadius || '4px'};
  
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
