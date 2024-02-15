import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {OrderAmount} from "./StyledCart";
import {decreaseOrderCountCreator, increaseOrderCountCreator} from "../../../Redux/order-reducer";
import { useActions, useAppDispatch } from '../../../utils/redux-utils'
import { asyncActions } from '../order-reducer'
import { ProductType } from '../../../api/types'


type OrderCounterPropsType = {
    item: ProductType
    orderCount: number
}


export const OrderCounter = (props: OrderCounterPropsType) => {

    const { updateOrder, deleteOrder } = useActions(asyncActions)
    const incrementCounter = () => {
        updateOrder({ id: props.item.id, option: 1 })
    };

    const decrementCounter = () => {
        if (props.orderCount !== 1) {
            updateOrder({ id: props.item.id, option: 0 })
        } else {
            deleteOrder({ id: props.item.id })
        }
    };

    const itemPrice = props.item.amount * props.orderCount + ' р.'

    return (
        <>
            <StyledOrderCounter>
                <span onClick={decrementCounter}>
                    <Icon iconId='minus' width='20px' height='20px' viewBox='0 0 25 25' place='counter'/>
                </span>
                <input type="number" min={1} max={9999} step={1} size={4} maxLength={4}
                       value={props.orderCount} disabled={true}/>
                <span onClick={incrementCounter}>
                    <Icon iconId='plus' width='20px' height='20px' viewBox='-1 0 26 25' place='counter'/>
                </span>
            </StyledOrderCounter>
            <OrderAmount>
                    {itemPrice}
            </OrderAmount>
        </>
    );
};

const StyledOrderCounter = styled.div`
  display: flex;
  width: 80px;
  height: 45px;
  //padding: 0 20px 0 10px;

  span {
    width: 33%;
    height: 25px;
    text-align: center;
    align-self: center;
  }

  input {
    width: 33%;
    border: none;
    outline: none;
    text-align: center;
    align-self: center;
    font-size: 15px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`
