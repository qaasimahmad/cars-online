import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import {mobile} from "../responsive";

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`;

const ImgContainer = styled.div`
flex: 1;
`;

const InfoContainer = styled.p`
flex: 1;
padding: 0px 50px;
${mobile({padding: "10px"})}
`;

const Image = styled.img`
width: 100%;
object-fit: cover;
`;


const Desc = styled.p`
    margin: 20px 0px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    width: 50%;
    ${mobile({width: "100%"})}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 20px;
`;

const FilterBrandColor = styled.div`

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterYear = styled.select`
    margin-left:  10px;
    padding: 5px;
`;

const FilterYearOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`;


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcements/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://media.ed.edmunds-media.com/for-sale/73-4t1bf3ek4au060744/img-1-600x400.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Toyota Camry(Muscle)</Title>
                        <Desc>usce vehicula placerat ultrices. Ut volutpat metus non nibh tincidunt, 
                            nec lobortis ante semper. Phasellus pretium ultrices lectus nec lobortis. 
                            Praesent venenatis ligula lacus, eget porta arcu tempus ut. 
                            Curabitur ultrices felis lacus, sed volutpat justo rutrum vitae</Desc>
                        <Price>$4000 || ₦ 2,500,000</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterBrandColor color="black"/>
                                <FilterBrandColor color="blue"/>
                                <FilterBrandColor color="gray"/>
                            </Filter>
                            <Filter>
                                <FilterTitle>Year</FilterTitle>
                                <FilterYear>
                                    <FilterYearOption>2010</FilterYearOption>
                                    <FilterYearOption>2012</FilterYearOption>
                                    <FilterYearOption>2014</FilterYearOption>
                                    <FilterYearOption>2016</FilterYearOption>
                                    <FilterYearOption>2018</FilterYearOption>
                                    <FilterYearOption>2020</FilterYearOption>
                                </FilterYear>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                           <AmountContainer>
                               <Remove/>
                               <Amount>1</Amount>
                               <Add/>
                           </AmountContainer>
                           <Button>Add To Cart</Button>
                        </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
