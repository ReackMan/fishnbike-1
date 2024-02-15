import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Filters } from '../Footer/filters/Filters'
import { ProductDetails } from './products/productDetails/ProductDetails'
import { useCatalog } from './hooks/useCatalog'
import { Products } from './products/Products'
import { useActions } from '../../utils/redux-utils'
import { asyncActions } from './products-reducer'

type CatalogPropsType = {
    theme: string
    handleOverflow: (isComponentOpen: boolean) => void
    isCartOpen: boolean
    toggleCart: (isCartOpen: boolean) => void
    choice: string
    setChoice: (choice: string) => void
}

export const Catalog = (props: CatalogPropsType) => {

    const { handleChange, category, searchHandler,
        resetFilters, productDetailsVisible, firstPrice, secondPrice,
        rangeValue, rangeSelector, products, handleProductDetails, productId,
        setFirstPriceHandler, setSecondPriceHandler }
        = useCatalog({setChoice: props.setChoice, handleOverflow: props.handleOverflow, choice: props.choice})


    return (
        <StyledCatalog>
            <Container>
                <FlexWrapper>
                    <Filters handleChange={handleChange} category={category} searchHandler={searchHandler}
                             setFirstPrice={setFirstPriceHandler} setSecondPrice={setSecondPriceHandler}
                             resetFilters={resetFilters} productDetailsVisible={productDetailsVisible}
                             priceValue1={firstPrice} priceValue2={secondPrice}
                             rangeValue={rangeValue} rangeSelector={rangeSelector}/>
                    <Products theme={props.theme} choice={props.choice} allProducts={products} products={products}
                              handleProductDetails={handleProductDetails} productDetailsVisible={productDetailsVisible}
                              isCartOpen={props.isCartOpen} toggleCart={props.toggleCart}
                              handleOverflow={props.handleOverflow}
                              productsItems={products}/>
                    <ProductDetails productDetailsVisible={productDetailsVisible}
                                    handleProductDetails={handleProductDetails}
                                    allProducts={products} productId={productId} toggleCart={props.toggleCart}
                                    isCartOpen={props.isCartOpen} handleOverflow={props.handleOverflow}
                                    choice={props.choice}/>
                </FlexWrapper>
            </Container>
        </StyledCatalog>
    );
};

const StyledCatalog = styled.div`
  margin-top: 50px;
`
