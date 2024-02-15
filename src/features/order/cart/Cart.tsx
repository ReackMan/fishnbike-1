import React, { ChangeEvent, useEffect, useState } from 'react'
import {
    StyledCart,
    StyledCartContent,
    CartHeader,
    CartOrder,
    CartAmount
} from './StyledCart'
import { ToggleCart } from './ToggleCart'
import { Button } from '../../../components/Button'
import {
    decreaseAmountCreator,
    deleteOrderCreator,
    increaseAmountCreator,
    setOrderAmountCreator
} from '../../../Redux/order-reducer'
import { OrderItem } from './OrderItem'
import { useActions, useAppDispatch, useAppSelector } from '../../../utils/redux-utils'
import { asyncActions } from '../order-reducer'
import { ProductType } from '../../../api/types'
import { Box, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

type CartPropsType = {
    isCartOpen: boolean
    openCart: () => void
    choice: string
}

// export type ItemType = { headerText: string; amount: number; imgSrc: string;
//     itemDescription: string; id: string; count: number}

type DeliveryType = string | 'pickup' | 'courier' | 'toCDEK'

export const Cart = (props: CartPropsType) => {

    const { fetchOrder, placeOrder } = useActions(asyncActions)
    const [setOrder, setSetOrder] = useState(false)
    const [delivery, setDelivery] = useState<DeliveryType>('pickup')

    const changeDelivery = (e: ChangeEvent<HTMLInputElement>) => {
        setDelivery(e.currentTarget.value)
    }

    const items = useAppSelector(state => state.order.orderItems)
        .filter(p => p.id !== 'amount')
    const orderAmount = useAppSelector(state => state.order.orderAmount)
    const initialAmount = items
        .map(p => p.amount)
        .reduce((sum, current) => sum + current, 0)

    useEffect(() => {
        fetchOrder()
    }, [])


    return (
        <StyledCart isCartOpen={props.isCartOpen}>
            <StyledCartContent isCartOpen={props.isCartOpen} setOrder={setOrder}>
                <CartHeader>
                    {!setOrder
                        ? <h2>Корзина</h2>
                        : <>
                            <IconButton onClick={() => setSetOrder(false)}>
                                <ArrowBackIosIcon />
                                <h2>В корзину</h2>
                            </IconButton>
                            {/*<h2>В корзину</h2>*/}
                        </>
                    }
                    <ToggleCart openCart={props.openCart} />
                </CartHeader>
                {!setOrder
                    ? <CartOrder>
                        {items.length === 0 ?
                            <div>Ваша корзина пуста</div>
                            // : <></>
                            : items.map((item: ProductType, index: number) => (
                                <OrderItem key={index} item={item} choice={props.choice} />
                            ))
                        }
                    </CartOrder>
                    : <div style={{ display: 'flex', gap: '20px' }}>
                        <Box
                            component="form"
                            sx={{
                                // '& .MuiTextField-root': { m: 1, width: '60%' }
                                width: '60%'
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <h3>Данные получателя</h3>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email" />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Получатель" />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Телефон" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <h3>Адрес доставки</h3>
                                {delivery === 'pickup'
                                    ? <div>
                                        <div>Самовывоз осуществляется по адресу: Московская обл,
                                            г.Сергиев Посад, пр.Красной Армии 253а
                                        </div>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Комментарий"
                                            multiline
                                            maxRows={4} />
                                    </div>
                                    : delivery === 'courier'
                                        ? <div>
                                            <TextField
                                                id="outlined-multiline-flexible"
                                                label="Город"
                                                maxRows={4} />
                                            <div style={{ display: 'flex' }}>
                                                <Box sx={{
                                                    '& .MuiTextField-root': { m: 1, width: 400 }
                                                }}>
                                                    <TextField
                                                        id="outlined-multiline-flexible"
                                                        label="Улица"
                                                        maxRows={4} />
                                                </Box>
                                                <Box sx={{
                                                    '& .MuiTextField-root': { m: 1, width: 100 }
                                                }}>
                                                    <TextField
                                                        id="outlined-multiline-flexible"
                                                        label="Дом"
                                                        maxRows={4} />
                                                </Box>
                                            </div>
                                            <TextField
                                                id="outlined-multiline-flexible"
                                                label="Комментарий"
                                                multiline
                                                maxRows={4} />
                                        </div>
                                        : <div>
                                            <TextField
                                                id="outlined-multiline-flexible"
                                                label="Город"
                                                maxRows={4} />
                                            <TextField
                                                id="outlined-multiline-flexible"
                                                label="Адрес отделния СДЭК"
                                                maxRows={4} />
                                            <TextField
                                                id="outlined-multiline-flexible"
                                                label="Комментарий"
                                                multiline
                                                maxRows={4} />
                                        </div>
                                }
                            </div>
                        </Box>
                        <div style={{ width: '35%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Варианты доставки</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="pickup"
                                        name="radio-buttons-group"
                                        onChange={changeDelivery}
                                    >
                                        <FormControlLabel value="pickup" control={<Radio />} label="Самовывоз" />
                                        <FormControlLabel value="courier" control={<Radio />}
                                                          label="Курьером в пределах МКАД и по Московской области" />
                                        <FormControlLabel value="tcCDEK" control={<Radio />}
                                                          label="Транспортной компанией СДЭК" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Способ оплаты</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="cash"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="cash" control={<Radio />} label="Оплата наличными" />
                                        <FormControlLabel value="cashless" control={<Radio />}
                                                          label="Безналичный расчет" />
                                        <FormControlLabel value="c2c" control={<Radio />} label="Оплата на карту" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                }
                <CartAmount>
                    <p>{'Сумма: ' + orderAmount + ' р.'}</p>
                </CartAmount>
                {!setOrder
                    ? <Button width="100%" height="58px" bg="#000" color="#fff" alignSelf="end" onClick={() => setSetOrder(true)}>
                        Оформить заказ
                    </Button>
                    : <Button width="100%" height="58px" bg="#000" color="#fff" alignSelf="end" onClick={placeOrder}>
                        Заказать
                    </Button>
                }
            </StyledCartContent>
        </StyledCart>
    )
}

