import React, {SetStateAction, Dispatch, ChangeEvent} from 'react';
import Form from 'react-bootstrap/esm/Form';
import styled from "styled-components";
import {Slider} from "@mui/material";
import {BtnBox, Button} from "../../../components/Button";

type FiltersPropsType = {
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
    category: string
    searchHandler: () => void
    priceValue1: number
    priceValue2: number
    resetFilters: () => void
    setFirstPrice: (e: ChangeEvent<HTMLInputElement> ) => void
    setSecondPrice: (e: ChangeEvent<HTMLInputElement> ) => void
    rangeValue: number[]
    rangeSelector: (e: any) => void
    productDetailsVisible: boolean
}

export const Filters = (props: FiltersPropsType) => {



    return (
        <StyledFilters productDetailsVisible={props.productDetailsVisible}>
            <h3>Фильтры</h3>
            <FilterBox>
                <h4>Категория</h4>
                <Form.Select aria-label="Default select example" value={props.category}
                             onChange={props.handleChange} defaultValue='all'>
                    <option value='all'>Все</option>
                    <option value="bikeKits">Велонаборы</option>
                    <option value="sonars">Эхолоты</option>
                    <option value="boats">Кораблики</option>
                    <option value="accessories">Аксессуары</option>
                    <option value="kits">Наборы %</option>
                </Form.Select>
                <h4>Цена</h4>
                <StyledForm>
                    <input type="number" value={props.priceValue1} onChange={props.setFirstPrice}
                           min={1700} max={200000}/>
                    <input type="number" value={props.priceValue2} onChange={props.setSecondPrice}
                           min={1700} max={200000}/>
                    <StyledSlider value={props.rangeValue} valueLabelDisplay="auto"
                            onChange={props.rangeSelector} defaultValue={[props.priceValue1, props.priceValue2]}
                            min={1700} max={200000}/>
                </StyledForm>
                <BtnBox marginLeft='0'>
                    <Button width='100%' bg='#000000' color='#ffffff'
                            onClick={props.searchHandler}>Поиск</Button>
                    <Button width='100%' bg='#000000' color='#ffffff'
                            onClick={props.resetFilters}>Сбросить</Button>
                </BtnBox>
            </FilterBox>
        </StyledFilters>
    );
};

const StyledFilters = styled.div<{ productDetailsVisible: boolean }>`
  width: 20%;
  //display: ${props => !props.productDetailsVisible ? 'flex' : 'none'};
  display: flex;
  flex-direction: column;
  margin-top: 75px;

  h3 {
    margin-bottom: 20px;
  }
  
  h4 {
    margin: 10px 0;
  }
  
`

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`

const StyledSlider = styled(Slider)`
  //color: #000000;
  color: #000000;
  height: 3px;
  padding: 13px 0;

  & .MuiSlider-thumb {
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 1px solid currentColor;

    &:hover {
      box-shadow: 0 0 0 8px rgba(58, 133, 137, 0.16);
    }

    & .airbnb-bar {
      height: 9px;
      width: 1px;
      background-color: currentColor;
      margin-left: 1px;
      margin-right: 1px;
    }
  ;
  }

  & .MuiSlider-track {
    height: 3px
  }
;

  & .MuiSlider-rail {
    color: #000000;
    opacity: 1;
    height: 3px;
  }
;
`

const FilterBox = styled.div`
  border: 2px solid #000;
  //border-radius: 5px;
  & {
    padding: 0 15px;
  }
`
