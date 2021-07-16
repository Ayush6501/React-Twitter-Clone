import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import styled from "styled-components";
import Widget from "./Widgets/Widget";


const Home = () => {
    return (
        <Container>
            <Sidebar />
            <Feed />
            <Widget />
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;

  @media (max-width: 1100px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export default Home;
