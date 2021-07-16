import styled from "styled-components";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
} from "react-twitter-embed";
import {Search} from "@material-ui/icons";
import {selectUserName} from "../../feature/user/userSlice";
import {useSelector} from "react-redux";

const Widget = () => {
    const userName = useSelector(selectUserName);

    return(
        <TwitterWidgets>
            <WidgetInput>
                <Search />
                <input type="text" placeholder='Search Twitter...'/>
            </WidgetInput>
            <WidgetContainer>
                <h2>What's Happening</h2>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Arsenal"
                    theme={'dark'}
                    options={{
                        height: 400,
                        color: 'blue'
                    }}
                />
            </WidgetContainer>

            <WidgetContainer>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="elonmusk"
                    theme={'dark'}
                    options={{
                        height: 400,
                        color: 'blue'
                    }}
                />
            </WidgetContainer>

            <WidgetContainer>
                <TwitterShareButton
                    url={''}
                    options={{ text: '#reactjs is awesome', via:{userName} }}
                />
            </WidgetContainer>

        </TwitterWidgets>
    );
};

const TwitterWidgets = styled.div`
  flex: 0.3;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

const WidgetInput = styled.div`
    display: flex;
    align-items: center;
    background-color: #292F33;
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 20px;
  
    input {
      background-color: #292F33;
      border-style: none;
      
      &:focus {
        outline: none;
      }
    }
`;

const WidgetContainer = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  padding: 20px;
  background-color: #292F33;
  border-radius: 20px;
  
  h2 {
    margin: 0;
    font-size: 22px;
    letter-spacing: 0.03em;
    font-weight: 800;
    
    border-bottom: 1px solid #292f33;
  }
`;

export default Widget;
