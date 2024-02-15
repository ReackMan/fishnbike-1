import React, {useEffect, useRef, useState} from "react";
import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {StyledCartIcon, StyledHeader} from './StyledHeader';
import {ToggleBtn} from "../../components/ToggleTheme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {BurgerMenu} from "../../components/burgerMenu/BurgerMenu";
import {ToggleMenu} from "../../components/burgerMenu/ToggleMenu";
import {useBurgerMenu, useOnClickOutside} from "../../components/burgerMenu/useBurgerMenu";
import {useWindowDimensions} from "../../components/useWindowDimensions";
import logo from "../../assets/images/logo.png"
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Cart} from "../order/cart/Cart";

import {
    AppBar, Toolbar, IconButton
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useHeader } from './hooks/useHeader'


type HeaderPropsType = {
    handleOverflow: (isCartOpen: boolean) => void
    theme: string
    themeToggle: () => void
    isCartOpen: boolean
    toggleCart: (isCartOpen: boolean) => void
    choice: string
}

export const Header = (props: HeaderPropsType) => {

    const { toggleRef, toggleBurgerMenu, isMenuOpen
        , menuRef, openCart } = useHeader(
            { toggleCart: props.toggleCart, handleOverflow: props.handleOverflow, isCartOpen: props.isCartOpen })

    return (
        <StyledHeader theme={props.theme}>
            <Container>
                <FlexWrapper justCont='space-between'>
                    <a href='/public'><Image src={logo} alt="Логотип"/></a>
                    <HeaderMenu theme={props.theme} placeMenu='header' flexGrow='3'/>
                    <ToggleMenu toggleRef={toggleRef} toggleBurgerMenu={toggleBurgerMenu} theme={props.theme}
                                isMenuOpen={isMenuOpen}/>
                    <BurgerMenu menuRef={menuRef} theme={props.theme} isMenuOpen={isMenuOpen}
                                themeToggle={props.themeToggle}/>
                    <ToggleBtn theme={props.theme} placeBtn='header' themeToggle={props.themeToggle}/>
                    <SocialNetworks theme={props.theme} padding='20px' placeSocials='header'/>
                    {/*<StyledCartIcon onClick={openCart}>*/}
                    {/*    <Icon iconId='cart' width='50px' height='50px' viewBox='0 -5 25 28'/>*/}
                    {/*</StyledCartIcon>*/}
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={openCart}
                        color="inherit"
                    >
                        <ShoppingBasketIcon/>
                    </IconButton>
                    <Cart isCartOpen={props.isCartOpen} openCart={openCart} choice={props.choice}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const Image = styled.img`
    width: 100px;
    height: 72px;
`

