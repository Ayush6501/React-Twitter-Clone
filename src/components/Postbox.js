import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import {ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser} from "@material-ui/icons";
import {forwardRef} from "react";

const Postbox = forwardRef((props, ref) => {
    return (
        <Post ref={ref}>
            <PostAvatar>
                <Avatar src={props.avatar} />
            </PostAvatar>
            <Postbody>
                <PostHeader>
                    <PostHeaderText>
                        <h3>
                            {props.displayName}
                            <span>
                                {props.verified && <VerifiedUser />}
                                <Username>
                                    @{props.username}
                                </Username>
                            </span>
                        </h3>
                    </PostHeaderText>
                    <PostHeaderDesc>
                        <p>{props.text}</p>
                    </PostHeaderDesc>
                </PostHeader>
                <img src={props.image} alt=""/>
                <PostFooter>
                    <ChatBubbleOutline fonstSize='small' />
                    <Repeat fonstSize='small' />
                    <FavoriteBorder fonstSize='small' />
                    <Publish fonstSize='small' />
                </PostFooter>
            </Postbody>
        </Post>
    );
});

const Post = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid rgb(47, 51, 54);
  padding-bottom: 10px;
  width: 100%;
  padding-right: 10px;
`;

const PostAvatar = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 0;
  padding-top: 10px;
  
  .MuiAvatar-root {
    width: 50px !important;
    height: 50px !important;
  }

  @media (max-width: 568px) {
    padding: 10px;
    
    .MuiAvatar-root {
      width: 35px !important;
      height: 35px !important;
    }
  }
`;

const Postbody = styled.div`
  flex: 1;
  padding: 10px;
  
  img {
    border-radius: 20px;
    width: 100%;
  }
`;

const PostHeader = styled.div`
`;

const PostHeaderText = styled.div`
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  
  .MuiSvgIcon-root {
    font-size: 1.1em;
  }
  
  span {
    font-size: 14px !important;
    color: #50b7f5;
    margin-left: 5px;
    margin-right: 5px;

    @media (max-width: 568px) {
      font-size: 10px;
    }
  }
  
  h3 {
    margin: 0;

    @media (max-width: 568px) {
      font-size: 14px;
    }
  }
`;

const Username = styled.div`
    font-weight: 600;
    font-size: 12px;
    color: lightgray;
    cursor: pointer;
    text-underline: lightgray;

    @media (max-width: 568px) {
      font-size: 10px;
    }
`;

const PostHeaderDesc = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  
  p {
    margin: 0;
  }
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .MuiSvgIcon-root {
    color: lightgray;
  }
`;

export default Postbox;
