import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../api/firebase'
import { ProductType } from '../../api/types'
import { AppStateType } from '../../utils/types'
import { appActions } from '../CommonActions/App'
import { handleAsyncServerNetworkError } from '../../utils/error-utils'

const { setAppStatus } = appActions

// thunks
const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (arg, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({ status: 'loading' }))
        try {
            const res = await getDocs(collection(db, 'products'))
                .then((querySnapshot) => {
                    return querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }))
                })
            thunkAPI.dispatch(setAppStatus({ status: 'success' }))
            return res
        } catch (err) {
            // @ts-ignore
            return handleAsyncServerNetworkError(err, thunkAPI)
        }
    }
)

const addProduct = createAsyncThunk(
    'product/addProduct', async () => {
        // const newProduct = {
        //     amount: 29990,
        //     headerText: 'Электронабор Велоракета 350Вт (заднее колесо)',
        //     category: 'sonars',
        //     count: 0,
        //     imgSrc: 'sonar',
        //     orderCount: 0,
//             batteries: {
//                 '5-2': 29990,
//                 '10-5': 39490,
//                 '13-0': 36490,
//                 '15-6': 42990,
//                 '17-5': 46990,
//                 '24-5': 64990
//             },
//             parameters: {
//                 battery: {
//                     brake: false,
//                     gas: false,
//                     pas: false,
//                     size: false
//                 }
//             }
//         }
//         await setDoc(doc(db, 'products', 'sonar-640'), newProduct)
    }
)

const updateProduct = createAsyncThunk<{ product: ProductType, id: string },
    any, any>(
    //@ts-ignore
    'products/updateProduct', async (param: { id: string, params: { value: string | number,
            name: string }}, thunkAPI) => {

        // loading
        thunkAPI.dispatch(setAppStatus({ status: 'loading' }))
        const name = param.params.name
        const value = param.params.value

        const state = thunkAPI.getState() as AppStateType
        const product = state.products.find(p => p.id === param.id)
        if (!product) {
            return thunkAPI.rejectWithValue('product not found in the state')
        }

        try {
            const response = await getDoc(doc(db, 'products', `${param.id}`))

            // @ts-ignore
            const newResponse: ProductType = response.data()
            let newAmount: number = newResponse.amount

            if (name === 'battery' && newResponse.batteries) {
                newAmount = newResponse.batteries?.[value]
                if (product.parameters?.pas) newAmount += 300
                if (product.parameters?.gas) newAmount += 2500
                if (product.parameters?.brake) newAmount += 900
            } else if (name === 'pas') {
                if (product.parameters?.pas) newAmount -= 300
                else newAmount += 300
            } else if (name === 'gas') {
                if (product.parameters?.gas) newAmount -= 2500
                else newAmount += 2500
            } else if (name === 'brake') {
                if (product.parameters?.brake) newAmount -= 900
                else newAmount += 900
            }
            const apiModel = {
                amount: newAmount,
                count: product.count,
                parameters: {
                    battery: name === 'battery' ? value : product.parameters?.battery,
                    brake: name === 'brake' ? !!value : product.parameters?.brake,
                    gas: name === 'gas' ? !!value : product.parameters?.gas,
                    pas: name === 'pas' ? !!value : product.parameters?.pas,
                    size: name === 'size' ? value : product.parameters?.size
                }
            }

            const productRef = doc(db, 'products', `${param.id}`)
            const res = await updateDoc(productRef,
                {
                    'amount': apiModel.amount,
                    'count': apiModel.count,
                    'parameters': apiModel.parameters
                })
            thunkAPI.dispatch(setAppStatus({ status: 'success' }))
            return { product: apiModel, id: param.id }
        } catch (err) {
            // @ts-ignore
            return handleAsyncServerNetworkError(err, thunkAPI)
        }
    }
)


export const asyncActions = {
    fetchProducts,
    updateProduct,
    addProduct
}

export const slice = createSlice({
    name: 'products',
    initialState: [] as ProductType[],
    reducers: {},
    extraReducers(builder) {
        //@ts-ignore
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                return action.payload
            })
            .addCase(updateProduct.fulfilled, (state, action) => {

                const index = state.findIndex(p => p.id === action.payload.id)
                state[index] = { ...state[index], ...action.payload.product }
            })
    }
})


