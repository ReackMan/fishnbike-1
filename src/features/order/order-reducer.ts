import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppStateType } from '../../utils/types'
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc, addDoc } from 'firebase/firestore'
import { db } from '../../api/firebase'
import { ProductType } from '../../api/types'
import { handleAsyncServerNetworkError } from '../../utils/error-utils'
import { appActions } from '../CommonActions/App'
import { telegramAPI } from '../../api/telegramAPI'
import axios from 'axios'


const { setAppStatus } = appActions

//thunks
const getOrders = async (newId: string) => {
    const res = await getDocs(collection(db, newId))
        .then((querySnapshot) => {
            return querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
        })
    // @ts-ignore
    const response: ProductType[] = res.filter(p => p.id !== 'amount')
    const initialAmount = response
        .map(p => p.amount * p.orderCount)
        .reduce((sum, current) => sum + current, 0)
    return { response, initialAmount }
}

const fetchOrder = createAsyncThunk(
    'order/fetchOrder', async (arg, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({ status: 'loading' }))
        try {
            const idData = await axios.get('https://geolocation-db.com/json/')
            const newId = idData.data.IPv4

            const { response, initialAmount } = await getOrders(newId)

            thunkAPI.dispatch(setAppStatus({ status: 'success' }))
            return { response, initialAmount }
        } catch (err) {
            //@ts-ignore
            return handleAsyncServerNetworkError(err, thunkAPI)
        }
    }
)

const addOrder = createAsyncThunk(
    'order/addOrder' , async (param: { id: string }, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({ status: 'loading' }))
        try {
            const state = thunkAPI.getState() as AppStateType
            const product = state.products.find(p => p.id === param.id)
            if (!product) {
                return thunkAPI.rejectWithValue('product not found in the state')
            }
            const newProduct = { ...product, orderCount: 1 }

            const idData = await axios.get('https://geolocation-db.com/json/')
            const newId = idData.data.IPv4

            await setDoc(doc(db, newId, product.id), newProduct)
            await setDoc(doc(db, newId, 'amount'), {})

            const { initialAmount } = await getOrders(newId)

            const amountRef = doc(db, newId, `amount`)
            await updateDoc(amountRef,
                {
                    'amount': initialAmount
                })
            thunkAPI.dispatch(setAppStatus({ status: 'success' }))
            return { newProduct, initialAmount }
        } catch (err) {
            //@ts-ignore
            return handleAsyncServerNetworkError(err, thunkAPI)
        }
    }
)

const deleteOrder = createAsyncThunk(
    'order/deleteOrder', async (param: {id: string}, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({ status: 'loading' }))
        try {
            const idData = await axios.get('https://geolocation-db.com/json/')
            const newId = idData.data.IPv4

            await deleteDoc(doc(db, newId, param.id))

            const { initialAmount } = await getOrders(newId)

            const amountRef = doc(db, newId, `amount`)
            await updateDoc(amountRef,
                {
                    'amount': initialAmount
                })
            thunkAPI.dispatch(setAppStatus({ status: 'success' }))
            return { id: param.id, amount: initialAmount }
        } catch (err) {
            // @ts-ignore
            return handleAsyncServerNetworkError(err, thunkAPI)
        }
    }
)

const updateOrder = createAsyncThunk(
    'order/updateOrder', async (param: { id: string, option: number }, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({ status: 'loading' }))
        try {
            const idData = await axios.get('https://geolocation-db.com/json/')
            const newId = idData.data.IPv4

            const data = await getDoc(doc(db, newId, `${param.id}`))
            const amountData = await getDoc(doc(db, newId, `amount`))
            const order = data.data()
            const amount = amountData.data()

            if (!order || !amount) return

            let newAmount = amount.amount
            let newOrderAmount = order.amount
            let newOrderCount = order.orderCount
            if (!!param.option) {
                newOrderCount += 1
                newAmount += newOrderAmount
            } else {
                newOrderCount -= 1
                newAmount -= newOrderAmount
            }

            const productRef = doc(db, newId, `${param.id}`)
            await updateDoc(productRef,
                {
                    'orderCount': newOrderCount
                })

            const amountRef = doc(db, newId, `amount`)
            await updateDoc(amountRef,
                {
                    'amount': newAmount
                })
            thunkAPI.dispatch(setAppStatus({ status: 'success' }))
            return { id: param.id, newOrderCount, newAmount }
        } catch (err) {
            // @ts-ignore
            return handleAsyncServerNetworkError(err, thunkAPI)
        }
    }
)

const placeOrder = createAsyncThunk(
    'order/placeOrder', async (arg, thunkAPI) => {
        debugger
        const state = thunkAPI.getState() as AppStateType
        const order = state.order.orderItems
        const amount = state.order.orderAmount
        const res = telegramAPI.sendMessage({ amount, order })
    }
)


export const asyncActions = {
    fetchOrder,
    addOrder,
    deleteOrder,
    updateOrder,
    placeOrder
}

export const slice = createSlice({
    name: 'order',
    initialState: {
        orderAmount: 0,
        orderItems: []
    } as OrderStateType,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchOrder.fulfilled, (state, action) => {
                debugger
                // @ts-ignore
                state.orderItems = [...action.payload.response]
                state.orderAmount = action.payload.initialAmount
            })
            .addCase(addOrder.fulfilled, (state, action) => {
                debugger
                //@ts-ignore
                state.orderItems.unshift({...action.payload.newProduct})
                if (!action.payload.initialAmount) return
                state.orderAmount = action.payload.initialAmount
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                const index = state.orderItems.findIndex((p) => p.id === action.payload.id)
                if (index > -1) {
                    state.orderItems.splice(index, 1)
                }
                state.orderAmount = action.payload.amount
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                if (!action.payload) return
                // @ts-ignore
                const index = state.orderItems.findIndex((p) => p.id === action.payload.id)
                if (index > -1) {
                    state.orderItems[index].orderCount = action.payload.newOrderCount
                    state.orderAmount = action.payload.newAmount
                }
            })
    }
})

interface OrderStateType {
    orderAmount: number | never
    orderItems: ProductType[]
}
