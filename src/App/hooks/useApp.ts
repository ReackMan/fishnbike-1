import { useDarkMode } from '../../components/useDarkMode'
import { darkTheme, lightTheme } from '../../styles/Theme'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/redux-utils'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../api/firebase'

export const useApp = () => {

    const status = useAppSelector(state => state.app.status)
    const [theme, themeToggle] = useDarkMode()
    const themeMode = theme === 'light' ? lightTheme : darkTheme
    const [overflow, overflowToggle] = useState(true)
    const [isCartOpen, toggleCart] = useState(false)
    const [choice, setChoice] = useState('all')
    const dispatch = useAppDispatch()

    const handleOverflow = (isComponentOpen: boolean) => {
        isComponentOpen ? overflowToggle(false) :
            overflowToggle(true)
    }


    const fetchProductsMine = async () => {
        await getDocs(collection(db, 'products'))
            .then((querySnapshot) => {
                const res = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                console.log(res)
            })
    }

    useEffect(() => {
        fetchProductsMine()
    }, [])

    return { theme, themeMode, themeToggle, overflow, handleOverflow, isCartOpen, toggleCart, choice, setChoice, status }
}