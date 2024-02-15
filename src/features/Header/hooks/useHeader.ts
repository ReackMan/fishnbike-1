import { useBurgerMenu, useOnClickOutside } from '../../../components/burgerMenu/useBurgerMenu'
import { useEffect, useRef } from 'react'

type UseHeaderPropsType = {
    toggleCart: (isCartOpen: boolean) => void
    handleOverflow: (isCartOpen: boolean) => void
    isCartOpen: boolean
}

export const useHeader = (props: UseHeaderPropsType) => {
    const [isMenuOpen, toggleBurgerMenu] = useBurgerMenu()

    const openCart = () => {
        props.toggleCart(!props.isCartOpen)
        props.handleOverflow(!props.isCartOpen)
    }

    const menuRef = useRef()
    const toggleRef = useRef()


    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth > 768 && isMenuOpen) {
                toggleBurgerMenu()
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useOnClickOutside([toggleRef, menuRef], () => {

        if (isMenuOpen) {
            toggleBurgerMenu();
        }
    });


    return { toggleRef, toggleBurgerMenu, isMenuOpen, menuRef, openCart }
}