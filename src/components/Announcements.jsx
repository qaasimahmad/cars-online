import styled from 'styled-components'

const Container = styled.div`
    background-color: teal;
    height: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcements = () => {
  return <div>
      <Container>
          super sales ongoing, grap yours now!!
      </Container>
  </div>;
};

export default Announcements;
