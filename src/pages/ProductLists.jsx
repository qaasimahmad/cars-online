import { useLocation } from 'react-router-dom';
import { useState } from 'react';
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
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    function handleFilters(e){
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    };

    return (
        <Container>
            <Navbar/>
            <Announcements/>
            <Title>Cars</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="brand" onChange={handleFilters}>
                        <Option disabled>
                            Brands
                        </Option>
                        <Option>Toyota</Option>
                        <Option>Lexus</Option>
                        <Option>Benz</Option>
                    </Select>
                    <Select name="year" onChange={handleFilters}>
                        <Option disabled selected>
                            Year
                        </Option>
                        <Option>2005</Option>
                        <Option>2010</Option>
                        <Option>2012</Option>
                        <Option>2015</Option>
                        <Option>2018</Option>
                        <Option>2020</Option>
                        <Option>2021</Option>
                        <Option>{new Date().getFullYear()}</Option>
                    </Select>
                    </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select onChange={(e)=> setSort(e.target.value)}>
                        <Option value="newest">
                            Newest
                        </Option>
                        <Option value="asc">Price(asc)</Option>
                        <Option value="desc">Price(dsc)</Option>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products cat={category} filters={filters} sort={sort}/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ProductLists
