import wheel from "../assets/images/wheel_10-5.jpg";

const INCREASE_ORDER_AMOUNT = 'INCREASE-ORDER-AMOUNT'
const DECREASE_ORDER_AMOUNT = 'DECREASE-ORDER-AMOUNT'
const INCREASE_ORDER_COUNT = 'INCREASE-ORDER-COUNT'
const DECREASE_ORDER_COUNT = 'DECREASE-ORDER-COUNT'
const SET_ORDER_AMOUNT = 'SET-ORDER-AMOUNT'
const ADD_ORDER = 'ADD-ORDER'
const DELETE_ORDER = 'DELETE-ORDER'

export type OrderItemType = {
    headerText: string
    amount: number
    imgSrc: string
    count: number
    parameters?: {
        battery: string
        size: string
        pas: string
        gas: string
        brake: string
    }
    id: string
    itemDescription?: string
}

interface OrderStateType{
    orderAmount: number | never
    orderItems: OrderItemType[]
}

let initialState: OrderStateType = {
    orderAmount: 0,
    orderItems: [
        // {
        //     headerText: 'Электронабор Велоракета 350Вт (переднее колесо)',
        //     amount: 28490,
        //     count: 0,
        //     imgSrc: wheel,
        //     itemDescription:
        //         'АКБ: 10,4 Ач\n' +
        //         'Размер: 26\"\n' +
        //         'PAS-датчик: Без датчика\n' +
        //         'Курок газа с LCD-дисплеем: Без курка\n' +
        //         'Ручки тормоза 2шт: Без ручек\n'
        //     ,
        //     id: 'wheel1'
        // },
    ],
}



export interface OrderActionsTypes {
    type: 'INCREASE-ORDER-AMOUNT' | 'DECREASE-ORDER-AMOUNT' | 'SET-ORDER-AMOUNT' | 'ADD-ORDER' | 'DELETE-ORDER' |
        'INCREASE-ORDER-COUNT' | 'DECREASE-ORDER-COUNT'
    // type: any
    increaseAmount: number
    decreaseAmount: number
    initialAmount: number
    orderCount: number
    orderId: string
    newOrder: OrderItemType
}

const orderReducer = (state = initialState, action: OrderActionsTypes):OrderStateType => {
    switch (action.type) {
        case INCREASE_ORDER_AMOUNT: {
            return {...state, orderAmount: action.increaseAmount}
        }
        case DECREASE_ORDER_AMOUNT: {
            return {...state, orderAmount: action.decreaseAmount}
        }
        case INCREASE_ORDER_COUNT: {
            const index = state.orderItems.indexOf(action.newOrder)
            state.orderItems[index].count += 1
            return state
        }
        case DECREASE_ORDER_COUNT: {
            const index = state.orderItems.indexOf(action.newOrder)
            state.orderItems[index].count -= 1
            return state
        }
        case SET_ORDER_AMOUNT: {
            return {...state, orderAmount: action.initialAmount}
        }
        case ADD_ORDER: {
            if (state.orderItems.find(item => item.id === action.newOrder.id)) {
                const index = state.orderItems.indexOf(action.newOrder)
                state.orderItems.splice(index,1)
                // console.log(state.orderItems)
                action.newOrder.count = action.newOrder.count + 1
                // console.log(action.newOrder);

                return {...state, orderItems: [...state.orderItems, action.newOrder]}
            } else {
                return {...state, orderItems: [...state.orderItems, action.newOrder]}
            }
        }
        case DELETE_ORDER: {
            return {...state, orderItems: state.orderItems.filter(item => item.id != action.orderId)}
        }
        default:
            return state
    }
}

export const increaseAmountCreator = (increaseAmount: number | undefined) =>
    ({type: INCREASE_ORDER_AMOUNT, increaseAmount}) as const

export const decreaseAmountCreator = (decreaseAmount: number) =>
    ({type: DECREASE_ORDER_AMOUNT, decreaseAmount})

export const increaseOrderCountCreator = (newOrder: OrderItemType | undefined) =>
    ({type: INCREASE_ORDER_COUNT, newOrder})

export const decreaseOrderCountCreator = (newOrder: OrderItemType | undefined) =>
    ({type: DECREASE_ORDER_COUNT, newOrder})

export const setOrderAmountCreator = (initialAmount: number) =>
    ({type: SET_ORDER_AMOUNT, initialAmount})

export const addOrderCreator = (newOrder: OrderItemType | undefined) =>
    ({type: ADD_ORDER, newOrder})

export const deleteOrderCreator = (orderId: string) =>
    ({type: DELETE_ORDER, orderId})

export default orderReducer