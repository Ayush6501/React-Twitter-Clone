import styled from "styled-components";
import {auth, provider} from "./firebase";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {selectUserName, selectUserPhoto,setUserLoginDetails} from "../feature/user/userSlice";
import {useEffect} from "react";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    // const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                history.push('/home');
            }
        });
    }, [username, history]);

    const authHandler = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            }).catch(error => {
                alert(error.message);
        });
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
        console.log(username, userPhoto);
    };

    return (
        <Container>
            <LeftContent>
                <Background>
                    <img src="/images/twitter_bg.png" alt=""/>
                </Background>
                <Logo>
                    <img src="/images/twitter-logo.svg" alt=""/>
                </Logo>
            </LeftContent>
            <RightContent>
                <CTA>
                    <CTALogo>
                        <img src="/images/twitter_png.png" alt=""/>
                    </CTALogo>
                    <h1>Happening now</h1>
                    <h2>Join Twitter Today</h2>
                    <SignUp onClick={authHandler}>Sign Up</SignUp>
                    <LogIn onClick={authHandler}>Log In</LogIn>
                </CTA>
            </RightContent>
        </Container>
    );
};

const Container = styled.div`
  overflow: hidden;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-flow: row;
  
  @media (max-width: 1000px) {
    flex-flow: column-reverse;
  }
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  right: 0;
  top: 0;
  position: absolute;
  
  img {
    height: 100vh;
    width: 100%;
    @media (max-width: 1000px) {
      width: initial;
    }
  }
  `;

const LeftContent= styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  color: black;
  position: relative;
  min-width: 400px;

  @media (max-width: 1000px) {
    height: 50vh;
    width: 100%;
  }
`;

const Logo = styled.div`
  align-items: center;
  -webkit-box-pack: start;
  justify-content: center;
  min-height: 200px;
  width: 100%;
  display: flex;
  
  img {
    max-width: 350px;
    min-width: 250px;
    width: 30vw;
    opacity: 1;
    position: absolute;
  }
  
  @media (max-width: 1000px) {
    width: 20vw;
  }
 `;

const RightContent = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 0;
  padding: 0;
  position: relative;
  
  @media (max-width: 1000px) {
    min-height: 500px;
    height: 50vh;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const CTA = styled.div`
  display: flex;
  margin: 30px auto;
  height: 90%;
  width: 80%;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  
  h1 {
    display: flex;
    align-items: flex-start;
    font-size: 64px;
    line-height: 62px;
    text-align: left;
    font-weight: 800;
    font-family: Poppins;
  }
  
  h2 {
    display: flex;
    align-items: flex-start;
    font-size: 31px;
    font-family: Poppins;
    font-weight: normal;
  }

  @media (max-width: 768px) {
    align-items: center;
    
    h1 {
      font-size: 50px;
      line-height: 50px;
      text-align: center;
    } 
    
    h2 {
      font-size: 25px;
      line-height: 20px;
      padding-top: 0;
    }
  }
`;

const CTALogo = styled.div`
  display: flex;  
  
  img {
    height: 35px;
    align-items: flex-start;
  }
`;

const SignUp = styled.a`
  background-color: rgb(29, 161, 242);
  width: 380px;
  padding: 20px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: rgb(34, 110, 156);
  }

  @media (max-width: 768px) {
    height: 40px;
    width: 250px;
  }
`;

const LogIn = styled(SignUp)`
  margin-top: 10px;
  background-color: black;
  border: 1px solid rgb(29, 161, 242);
`;

export default Login;
