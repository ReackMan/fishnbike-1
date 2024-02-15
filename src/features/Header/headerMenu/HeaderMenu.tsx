import React from 'react';
import {List, ListItem, Mask, StyledMenu} from "./StyledMenu";
import {Link} from "react-router-dom"
// import {Search} from "./Search";

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export type MenuPropsType = {
    alignItems?: string
    justContent?: string
    color?: string
    theme: string
    asas?: string
    placeMenu?: string
    flexGrow?: string
}

const firstTabs = [
    { href: '/', tabName: 'Главная' },
    { href: '/catalog', tabName: 'Каталог товаров' },
]

const secondTabs = [
    { href: '/delivery', tabName: 'Доставка' },
    { href: '/about', tabName: 'О компании' }
]

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    '&:hover': {
        backgroundColor: alpha(theme.palette.text.disabled, 0.15),
    },
    marginLeft: 15,
    marginRight: 15,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export const HeaderMenu = (props: MenuPropsType) => {
    return (
        <StyledMenu alignItems={props.alignItems} justContent={props.justContent}
                    color={props.color} placeMenu={props.placeMenu} flexGrow={props.flexGrow}>
            <List placeMenu={props.placeMenu}>
                {firstTabs.map((tab, index) => (
                    <ListItem key={index} theme={props.theme}>
                        <Link to={tab.href}>
                            {tab.tabName}
                            <Mask theme={props.theme}>
                                <span>{tab.tabName}</span>
                            </Mask>
                            <Mask theme={props.theme}>
                                <span>{tab.tabName}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <List placeMenu={props.placeMenu}>
                {secondTabs.map((tab, index) => (
                    <ListItem key={index} theme={props.theme}>
                        <Link to={tab.href}>
                            {tab.tabName}
                            <Mask theme={props.theme}>
                                <span>{tab.tabName}</span>
                            </Mask>
                            <Mask theme={props.theme}>
                                <span>{tab.tabName}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </StyledMenu>
    );
};

