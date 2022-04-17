import { findByLabelText } from '@testing-library/react';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import {mobile} from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`;
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`

const FilterText = styled.span`
     font-size: 20px;
     font-weight: 600;
     margin-right: 20px;
     ${mobile({marginRight: "0px"})}
`;

const Select = styled.select `
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`;

const Option = styled.option ``;

const ProductLists = () => {
    return (
        <Container>
            <Navbar/>
            <Announcements/>
            <Title>Cars</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Brands
                        </Option>
                        <Option>Toyota</Option>
                        <Option>Lexus</Option>
                        <Option>Benz</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Year
                        </Option>
                        <Option>2005-2010</Option>
                        <Option>2012-2014</Option>
                        <Option>2016-2018</Option>
                        <Option>2018-2020</Option>
                        <Option>2020-{new Date().getFullYear()}</Option>
                    </Select>
                    </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                        <Option disabled selected>
                            Price
                        </Option>
                        <Option>price(asc)</Option>
                        <Option>price(dsc)</Option>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ProductLists
