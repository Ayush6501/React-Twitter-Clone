import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import {
    Home,
    NotificationsNone,
    Twitter,
    Search,
    MailOutline,
    BookmarkBorder,
    ListAlt,
    PermIdentity,
    MoreHoriz,
    MoreVertOutlined
} from "@material-ui/icons";
import {Avatar, Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUserPhoto, selectUserName, selectUserEmail, setSignOutState} from "../../feature/user/userSlice";
import {useDispatch} from "react-redux";
import {auth} from "../firebase";
import {useHistory} from "react-router-dom";

const Sidebar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userPhoto = useSelector(selectUserPhoto);
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail)

    const authHandler = () => {
        auth.signOut().then(() => {
            dispatch(setSignOutState());
            history.push('/')
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <SidebarComponent>
            <Container>
                <TwitterIcon>
                    <Twitter />
                </TwitterIcon>
                <SidebarItems path='/home' text="Home" current="true" icon={Home} />
                <SidebarItems path='/Search' text="Search" icon={Search} />
                <SidebarItems path='/Notifications' text="Notifications" icon={NotificationsNone} />
                <SidebarItems path='/Mail' text="Mail" icon={MailOutline} />
                <SidebarItems path='/Bookmark' text="Bookmark" icon={BookmarkBorder} />
                <SidebarItems path='/List' text="List" icon={ListAlt} />
                <SidebarItems path='/Profile' text="Profile" icon={PermIdentity} />
                <SidebarItems text="More" icon={MoreHoriz} />
                <TweetButton variant='outlined'>Tweet</TweetButton>
            </Container>
            <SignOut>
                <Avatar src={userPhoto}/>
                <DropDown>
                    <span onClick={authHandler}>Sign Out</span>
                </DropDown>
                <CTA>
                    <UserDetails>
                        <h3>{userName}</h3>
                        <h4>{userEmail}</h4>
                    </UserDetails>
                    <SignOutButton>
                        <MoreVertOutlined />
                        <DropDown>
                            <span onClick={authHandler}>Sign Out</span>
                        </DropDown>
                    </SignOutButton>
                </CTA>
            </SignOut>
        </SidebarComponent>
    );
};

const SidebarComponent = styled.div`
  border-right: 1px solid rgb(47, 51, 54);
  flex: 0.3;
  //min-width: 300px;
  padding: 20px 0px;
  //line-height: 0px;
  //width: fit-content;
  //display: flex;
  //flex-flow: column;
  //justify-content: flex-start;
  max-width: max-content;
`;

const Container = styled.div`
  margin: 0px 30px;
  padding: 0;
  width: fit-content;

  @media (max-width: 568px) {
    margin: 0;
  }
`;

const DropDown = styled.div`
  position: absolute;
  bottom: 38px;
  right: 0;
  left: 30px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 5px;
  box-shadow: rgba(0 0 0 / 50%) 0 0 18px 0;
  padding: 8px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  cursor: pointer;
`;

const SignOut = styled.div`
  margin: 0px 30px;
  padding: 0;
  width: fit-content;
  position: absolute;
  bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }

  @media (max-width: 568px) {
    margin: 0 10px;
  }
`;

const CTA = styled.div`
  display: flex;
  margin-left: 10px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const SignOutButton = styled.div`
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const UserDetails = styled.div`
  display: inline-block;
  
  h3 {
    margin: 0;
  }
  
  h4 {
    margin: 0;
    font-size: 10px;
    color: lightgray;
  }
`;

const TweetButton = styled(Button)`
  background-color: #50b7f5 !important;
  color: white !important;
  font-weight: 900 !important;
  text-transform: inherit !important;
  border-radius: 30px !important;
  height: 50px !important;
  margin-top: 20px !important;
  width: 100% !important;
  margin-left: 20px;
`;

const TwitterIcon = styled.div`
  color: #50b7f5;
  font-size: 40px !important;
  margin-left: 20px;
  margin-bottom: 20px;
  
  .MuiSvgIcon-root {
    font-size: 40px;
  }
`;

export default Sidebar;
