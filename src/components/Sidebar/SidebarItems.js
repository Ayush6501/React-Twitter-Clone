import styled from "styled-components";

const SidebarItems = (props) => {
    const Icon = props.icon

    const isHome = props.text === "Home";


    const SidebarItem = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      color: ${isHome ? '#50b7f5' : '#ffffff'};
      height: 54px;
    
      h2 {
        font-weight: 700;
        font-size: 22px;
        margin-right: 20px;
        line-height: 0px;
        letter-spacing: 0.03em;
        
        &:active {
          color: #50b7f5;
        }

        @media (max-width: 768px) {
          display: none;
        }
    }

      &:hover {
        background-color: rgba(9, 41, 62, 0.8);
        border-radius: 30px;
        color: #50b7f5;
        transition: color 100ms ease-out;
        width: 100%;
      }
    `;

    const IconLogo = styled.div`
      padding: 20px;

      @media (max-width: 768px) {
        .MuiSvgIcon-root {
          font-size: 2em;
        }
      }
    `;

    return (
            <SidebarItem>
                <IconLogo>
                    <Icon/>
                </IconLogo>
                <h2>{props.text}</h2>
            </SidebarItem>
    );
};

export default SidebarItems;
