import styled from 'styled-components'
import {Avatar, Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUserName, selectUserPhoto} from "../feature/user/userSlice";
import {
    ImageOutlined,
    PublishOutlined,
    PollOutlined,
    EmojiEmotionsOutlined,
    InsertInvitationOutlined,
} from '@material-ui/icons';
import {useState, useEffect} from "react";
import {storage} from "./firebase";
import db from "./firebase";

const Tweetbox = () => {
    const userPhoto = useSelector(selectUserPhoto);
    const userName = useSelector(selectUserName);

    const [message, setMessage] = useState('Click on your PF in the bottom left corner to Sign Out!')
    const [tweetMessage, setTweetMessage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const imageUploadHandler = async (e) => {
        setImageFile(e.target.files[0]);
        setMessage('Click on the upload icon to upload it!')
        console.log(imageFile);
    }

    const uploadHandler = (event) => {
        setMessage('Image Uploading...')
        event.preventDefault()
        const ref = storage.ref(`/images/${imageFile.name}`);
        const uploadTask = ref.put(imageFile);
        uploadTask.on("state_changed", console.log, console.error, () => {
            ref
                .getDownloadURL()
                .then((url) => {
                    setImageFile(null);
                    setImageUrl(url);
                    console.log(imageUrl)
                });
        });
        setMessage('Image Uploaded Successfully!!')
    }

    const sendTweetHandler = (event) => {
      event.preventDefault();
      db.collection('tweets').add({
          displayName: userName,
          username: userName,
          verified: true,
          text: tweetMessage,
          image: imageUrl,
          avatar: userPhoto,
      });

      setTweetMessage("");
      setImageUrl("");
      setImageFile('Click on the image icon below to add an image');
    };

    useEffect(() => {
        setTimeout(() => {
            setMessage('Click on the image icon below to add an image');
        }, 4000);
    }, []);


    return (
        <TweetBox>
            <form>
                <TBInput>
                    <Avatar src={userPhoto}/>
                    <input
                        value={tweetMessage}
                        type="text"
                        placeholder="What's Happening?"
                        onChange={event => setTweetMessage(event.target.value)}
                    />
                </TBInput>
            </form>
            <Message>
                <img src={imageUrl} alt=""/>
                {message}
            </Message>
            <TweetBoxCta>
                <TweetboxCtaButtons>
                    <div>
                        <form>
                            <input
                                type='file'
                                onChange={imageUploadHandler}
                                id='file'
                                style={{display: 'none'}}
                            />
                            <label htmlFor="file"><ImageOutlined /></label>
                        </form>
                    </div>
                    <div>
                        <PublishOutlined onClick={uploadHandler}/>
                    </div>
                    <div>
                        <PollOutlined />
                    </div>
                    <div>
                        <EmojiEmotionsOutlined />
                    </div>
                    <div>
                        <InsertInvitationOutlined />
                    </div>
                </TweetboxCtaButtons>
                <TweetButton onClick={sendTweetHandler}>Tweet</TweetButton>
            </TweetBoxCta>
        </TweetBox>
    );
};

const TweetBox = styled.div`
  padding-bottom: 10px;
  border-bottom: 8px solid rgb(47, 51, 54);
  padding-right: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  
  form {
    width: 100%;
  }
`;

const TBInput = styled.div`
  display: flex;
  padding: 20px; 
  width: 100%;
  
  input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
    width: 100%;
    padding: 0px 10px;
    background-color: black;
    border-bottom: 1px solid #50b7f5;
    color: #e6ecf0;
    outline: none;

    @media (max-width: 568px) {
      font-size: 16px;
      margin-left: 15px;
    }
  }
`;

const TweetButton = styled(Button)`
  background-color: #50b7f5 !important;
  color: white !important;
  font-weight: 900 !important;
  text-transform: inherit !important;
  border-radius: 30px !important;
  margin-top: 0px !important;
  width: 80px;
  height: 40px !important;

  @media (max-width: 568px) {
    height: 30px !important;
  }
`;

const TweetBoxCta = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
  margin-top: 10px;
`;

const TweetboxCtaButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 85px;

  div {
    padding: 5px;

    .MuiSvgIcon-root {
      color: #50b7f5;
      font-size: 1.8em !important;
      
      @media (max-width: 1000px) {
        font-size: 1.4em !important;
      }
    }

    &:hover {
      background-color: rgba(9, 41, 62, 0.8);
      border-radius: 30px;
      color: #50b7f5;
      transition: color 100ms ease-out;
      width: 100%;
      cursor: pointer;
    }
  }
  
  @media (max-width: 568px) {
    margin-left: 35px;
  } 
`;

const Message = styled.div`
  font-size: 10px;
  margin-top: 5px;
  display: contents;
  margin-bottom: 10px;

  img {
    max-width: 150px;
    max-height: 150px;
  }
  
`;

export default Tweetbox;
