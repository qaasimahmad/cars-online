import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";
import { Facebook, Instagram,  MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
marfin: 20px 0px;
`;
const SocialContianer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h2`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
     width: 50%;
     margin-bottom: 10px;
     cursor: pointer;
`;

const ContactItem = styled.div`
    margin-bottom: 20px
    display: flex;
    align-items: center
`;

const Payment = styled.img`
    width: 50%:
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ESHMAK.</Logo>
                <Desc>Eshmak Motors inc is
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Duis sed convallis nisl.
                    Aliquam vulputate interdum pharetra.
                    Proin quis tortor sollicitudin.</Desc>
                <SocialContianer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Pinterest/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Twitter/>
                    </SocialIcon>
                </SocialContianer>
            </Left>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}}/>
            4, Golf Road, GRA Benin City
                </ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/>
            +234 810 651 4123
                </ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}}/>
            eshmakt@gmail.com
                </ContactItem>
                <Payment src="https://www.genny.com/media/wysiwyg/fbuilder/cards.jpg"/>
            </Right>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Suvs</ListItem>
                    <ListItem>Sedans</ListItem>
                    <ListItem>Sport</ListItem>
                    <ListItem>Petit</ListItem>
                    <ListItem>Trucks</ListItem>

                </List>
            </Center>
        </Container>
    )
}

export default Footer
