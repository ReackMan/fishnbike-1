import { Image, OrderDescription, StyledOrderItem } from './StyledCart'
import { OrderCounter } from './OrderCounter'
import { ToggleOrder } from './ToggleCart'
import React from 'react'
import { useActions } from '../../../utils/redux-utils'
import { asyncActions } from '../order-reducer'
import { ProductType } from '../../../api/types'
import wheel from '../../../assets/images/wheel_10-5.jpg'
import sonar from '../../../assets/images/tf520.jpg'
import boat from '../../../assets/images/toslon730.jpg'
import accessory from '../../../assets/images/ni-mh-aa-2850mah.jpg'

type OrderItemPropsType = {
    item: ProductType
    choice: string
}

export const OrderItem = (props: OrderItemPropsType) => {

    const { deleteOrder, updateOrder } = useActions(asyncActions)

    const src = props.item.imgSrc === 'wheel' ? wheel :
        props.item.imgSrc === 'sonar' ? sonar :
        props.item.imgSrc === 'boat' ? boat :
        props.item.imgSrc === 'accessory' ? accessory : ''

    const deleteOrderHandler = (id: string) => {
        deleteOrder({ id })
    }

    type BikeBatteriesType = {
        [p: string]: string
    }

    const params = props.item.parameters
    const batteries: BikeBatteriesType = {
        '5-2': 'АКБ 5,2 Ач',
        '10-5': 'АКБ 10,5 Ач',
        '13-0': 'АКБ 13 Ач',
        '15-6': 'АКБ 15,6 Ач',
        '17-5': 'АКБ 17,5 Ач',
        '24-5': 'АКБ 24,5 Ач'
    }

    return (
        <StyledOrderItem>
            <Image src={src} alt="" height="70px" />
            <OrderDescription>
                <h3>{props.item.headerText}</h3>
                {/*//@ts-ignore*/}
                {(props.choice === 'Велонаборы' || 'Все') && params ?
                    <ul>
                        <li>{batteries[params.battery]}</li>
                        <li>{'Размер ' + params.size + '"'}</li>
                        <li>{params.pas ? '+ PAS-датчик' : ''}</li>
                        <li>{params.gas ? '+ Курок газа с LCD-дисплеем' : ''}</li>
                        <li>{params.brake ? '+ Ручки тормоза 2шт' : ''}</li>
                    </ul>
                    : <></>}
            </OrderDescription>
            <OrderCounter item={props.item} orderCount={props.item.orderCount} />
            <ToggleOrder deleteOrder={deleteOrderHandler} id={props.item.id} />
        </StyledOrderItem>
    )

}
