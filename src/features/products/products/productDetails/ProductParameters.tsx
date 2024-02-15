import React from 'react';
import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import {increaseAmountCreator} from "../../../../Redux/order-reducer";
import { asyncActions } from '../../products-reducer'
import { useActions, useAppDispatch, useAppSelector } from '../../../../utils/redux-utils'
import { ProductType } from '../../../../api/types'

type ProductParametersPropsType = {
    choice: string
    productId: string
    product: ProductType
}

export const ProductParameters = (props: ProductParametersPropsType) => {

    const dispatch = useAppDispatch()
    const { updateProduct } = useActions(asyncActions)

    let product = useAppSelector(state =>
        state.products.find(p => p.id === props.productId))

    if (!product) {
        return <></>
    }
    if (!product.parameters) {
        return <></>
    }

    let battery = product.parameters.battery
    let size = JSON.stringify(product.parameters?.size)
    let pas = JSON.stringify(product.parameters?.pas === true ? 1 : 0)
    let gas = JSON.stringify(product.parameters?.gas === true ? 1 : 0)
    let brake = JSON.stringify(product.parameters?.brake === true ? 1 : 0)

    const id = product.id
    const updateProductHandler = (e: SelectChangeEvent) => {

        updateProduct({ id: id, params: { value: e.target.value, name: e.target.name } })
    }

    return (
        <StyledProductParameters visibleParameters={product}>
            <StyledForm>
                <span>АКБ</span>
                <FormControl sx={{minWidth: 140}}>
                    <InputLabel id="demo-simple-select-autowidth-label">АКБ</InputLabel>
                    {product.id === 'wheel-350' ?
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={battery}
                            onChange={updateProductHandler}
                            autoWidth
                            label="АКБ"
                            name='battery'
                        >
                            <MenuItem value='5-2'>5,2 Ач</MenuItem>
                            <MenuItem value='10-5'>10,5 Ач</MenuItem>
                            <MenuItem value='13-0'>13,0 Ач</MenuItem>
                            <MenuItem value='15-6'>15,6 Ач</MenuItem>
                            <MenuItem value='17-5'>17,5 Ач</MenuItem>
                            <MenuItem value='24-5'>24,5 Ач</MenuItem>
                        </Select>
                        :
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={battery}
                            onChange={updateProductHandler}
                            autoWidth
                            label="АКБ"
                            name='battery'
                        >
                            <MenuItem value='13-0'>13 Ач</MenuItem>
                            <MenuItem value='15-6'>15,6 Ач</MenuItem>
                            <MenuItem value='17-5'>17,5 Ач</MenuItem>
                            <MenuItem value='24-5'>24,5 Ач</MenuItem>
                        </Select>
                    }
                </FormControl>
            </StyledForm>
            <StyledForm>
                <span>Размер</span>
                <FormControl sx={{minWidth: 140}}>
                    <InputLabel id="demo-simple-select-autowidth-label">Размер</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={size}
                        onChange={updateProductHandler}
                        autoWidth
                        label="Размер"
                        name='size'
                    >
                        <MenuItem value={26}>26"</MenuItem>
                        <MenuItem value={20}>20"</MenuItem>
                        <MenuItem value={24}>24"</MenuItem>
                        <MenuItem value={27.5}>27,5"</MenuItem>
                        <MenuItem value={28}>28"</MenuItem>
                        <MenuItem value={29}>29"</MenuItem>
                    </Select>
                </FormControl>
            </StyledForm>
            <StyledForm>
                <span>PAS-датчик</span>
                <FormControl sx={{minWidth: 140}}>
                    <InputLabel id="demo-simple-select-autowidth-label">PAS-датчик</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={pas}
                        onChange={updateProductHandler}
                        autoWidth
                        label="PAS-датчик"
                        name='pas'
                    >
                        <MenuItem value={0}>Без датчика</MenuItem>
                        <MenuItem value={1}>PAS-датчик: +300р.</MenuItem>
                    </Select>
                </FormControl>
            </StyledForm>
            <StyledForm>
                <span>Курок газа</span>
                <FormControl sx={{minWidth: 140}}>
                    <InputLabel id="demo-simple-select-autowidth-label">Курок газа</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={gas}
                        onChange={updateProductHandler}
                        autoWidth
                        label="Курок газа"
                        name='gas'
                    >
                        <MenuItem value={0}>Без курка</MenuItem>
                        <MenuItem value={1}>Курок газа с LCD-дисплеем: +2500р.</MenuItem>
                    </Select>
                </FormControl>
            </StyledForm>
            <StyledForm>
                <span>Ручки тормоза</span>
                <FormControl sx={{minWidth: 140}}>
                    <InputLabel id="demo-simple-select-autowidth-label">Ручки тормоза</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={brake}
                        onChange={updateProductHandler}
                        autoWidth
                        label="Ручки тормоза"
                        name='brake'
                    >
                        <MenuItem value={0}>Без ручек</MenuItem>
                        <MenuItem value={1}>Ручки тормоза 2шт: +900р.</MenuItem>
                    </Select>
                </FormControl>
            </StyledForm>
        </StyledProductParameters>
    );
};

const StyledProductParameters = styled.div<{
    visibleParameters:
        ProductType | undefined
}>`
  display: ${props => props.visibleParameters !== undefined ? 'flex' : 'none'};
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`

const StyledForm = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`
