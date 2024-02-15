import { ChangeEvent, useEffect, useState } from 'react'
import { useActions, useAppSelector } from '../../../utils/redux-utils'
import { asyncActions as productsActions } from '../products-reducer'
import { ProductType } from '../../../api/types'
import { asyncActions as orderActions } from '../../order/order-reducer'

type UseCatalogPropsType = {
    handleOverflow: (isComponentOpen: boolean) => void
    setChoice: (choice: string) => void
    choice: string
}

export const useCatalog = (props: UseCatalogPropsType) => {

    const { fetchProducts, addProduct } = useActions(productsActions)


    const products = useAppSelector(state => state.products)


    const [category, setCategory] = useState('all')
    const [firstPrice, setFirstPrice] = useState(1700)
    const [secondPrice, setSecondPrice] = useState(200000)
    const [rangeValue, setRangeValue] = useState([firstPrice, secondPrice])
    const [finalFirstPrice, setFinalFirstPrice] = useState(firstPrice)
    const [finalSecondPrice, setFinalSecondPrice] = useState(secondPrice)
    const [productDetailsVisible,
        setProductDetailsVisible] = useState(false)
    const [productId, setProductId] = useState('')


    const finalProducts = props.choice === 'all'
        ? products
        : [...products].filter(p => p.category === props.choice)


    const findMinMaxPrice = (products: ProductType[]) => {
        const prices: number[] = []
        products.forEach(p => {
            prices.push(p.amount)
        })
        setFirstPrice(Math.min(...prices))
        setSecondPrice(Math.max(...prices))
    }

    useEffect(() => {
        if (!products.length)
        fetchProducts()
        // addProduct()
    }, [])

    useEffect(() => {
        findMinMaxPrice(finalProducts)
    }, [finalProducts])


    const handleProductDetails = (id?: string) => {
        setProductDetailsVisible(!productDetailsVisible)
        props.handleOverflow(!productDetailsVisible)
        if (id) {
            setProductId(id)
        }
    }
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }

    const setFirstPriceHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        // @ts-ignore
        const value: number = e.target.value
        setFirstPrice(value)
        setRangeValue([value, secondPrice])
    }
    const setSecondPriceHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        // @ts-ignore
        const value: number = e.target.value
        setSecondPrice(value)
        setRangeValue([firstPrice, value])
    }

    const searchHandler = () => {
        setFinalFirstPrice(firstPrice)
        setFinalSecondPrice(secondPrice)
        props.setChoice(category)
        finalProducts
            .filter(p => p.amount >= finalFirstPrice)
            .filter(p => p.amount <= finalSecondPrice)
    }
    const resetFilters = () => {
        setCategory('all')
        findMinMaxPrice(finalProducts)
        props.setChoice('all')
    }

    const rangeSelector = (e: any) => {
        setFirstPrice(e.target.value[0])
        setSecondPrice(e.target.value[1])
        setRangeValue(e.target.value)
    }

    return { handleChange, category, searchHandler, setFirstPrice, setSecondPrice,
        resetFilters, productDetailsVisible, firstPrice, secondPrice,
        rangeValue, rangeSelector, products: finalProducts, handleProductDetails, productId,
        finalFirstPrice, finalSecondPrice, setFirstPriceHandler, setSecondPriceHandler}
}