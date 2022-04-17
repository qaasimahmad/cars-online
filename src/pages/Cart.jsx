import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {mobile} from "../responsive";

const Container = styled.div`

`

const Wrapper = styled.div`
 padding: 20px;
 ${mobile({padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

`

const TopTexts = styled.div`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    ${mobile({display: "none"})}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-contents: space-between;
    ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
    flex: 3;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Image = styled.img`
    width: 50%;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const ProductBrand = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductName = styled.span`
`;

const ProductID = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`;

const Summary = styled.div`
    flex: 1;
    border-radius: 10px;
    border: 0.5px solid lightgray;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcements/>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your wish list(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://globemotors.ng/wp-content/uploads/2015/04/Globe-Motors-Toyota-Yaris-front-600x600.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> Yaris</ProductName>
                                    <ProductID><b>ID:</b> 978555544333</ProductID>
                                    <ProductColor color="gray"/>
                                    <ProductBrand><b>Brand:</b> Toyota</ProductBrand>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount><b>2</b></ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$8000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr></Hr>
                        <Product>
                            <ProductDetail>
                                <Image src="https://cars.usnews.com/static/images/Auto/izmo/i4438/2014_mercedes_benz_e_class_angularfront.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> E-Class</ProductName>
                                    <ProductID><b>ID:</b> 778555544344</ProductID>
                                    <ProductColor color="#C0C0C0"/>
                                    <ProductBrand><b>Brand:</b> Mercedes Benz</ProductBrand>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount><b>1</b></ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$11000</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 16000</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 19000</SummaryItemPrice>
                        </SummaryItem>

                        <Button>Checkout Now</Button>

                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
