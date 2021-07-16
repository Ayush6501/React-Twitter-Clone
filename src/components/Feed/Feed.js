import styled from "styled-components";
import Tweetbox from "../Tweetbox";
import Postbox from "../Postbox";
import {useEffect, useState} from "react";
import db from "../firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        db.collection('tweets').onSnapshot(snapshot => (
            setTweets(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

  return (
      <TwitterFeed>
          <FeedHeader>
              <h1>Home</h1>
          </FeedHeader>

          <TweetBox>
              <Tweetbox />
          </TweetBox>

          <PostBox>
            <FlipMove>
                  {tweets.map(tweet => (
                      <Postbox
                          key={tweet.text}
                          displayName={tweet.displayName}
                          username={tweet.username}
                          verified={tweet.verified}
                          text={tweet.text}
                          image={tweet.image}
                          avatar={tweet.avatar}
                      />
                  ))}
            </FlipMove>
          </PostBox>
      </TwitterFeed>
  );
};

const TwitterFeed = styled.div`
  flex: 0.4;
  border-right: 1px solid rgb(47, 51, 54);
  min-width: 600px;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 1100px) {
    border-right: none;
    flex: 0.8;
  }

  @media (max-width: 868px) {
    min-width: 350px;
  }

  @media (max-width: 568px) {
    min-width: 0;
  }
`;

const FeedHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  border: 1px solid rgb(47, 51, 54);
  padding: 10px 20px;
  background-color: black;
  margin: 0;
  
   h1 {
     font-size: 24px;
     font-weight: 800;
   }
`;

const TweetBox = styled.div`
  
`;

const PostBox = styled.div`
  
`;


export default Feed;
