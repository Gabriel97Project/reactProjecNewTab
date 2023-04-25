import styled from "styled-components";


export const UserPageStyled = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center ;
    
    #userMapStyled{
        width:60%;
        height:130px;
        display:flex;
        flex-direction:row;
        padding:2px;
    }
    #userPhotoStyled{
        background-color: yellow;
        width:20%;
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        background-color:#33334d;
        
        .userImageStyle{
            border-radius:100%;
            width:80px;
            height : 80px;
        }

    };
    #userDataStyled{
        width:60%;

        background-color:#33334d;
        color:white;
        display:flex;
        flex-direction:column;
       
        justify-content:center ;
        .userNameStyle{
            display:flex;
            flex-direction:column;
        }
    };
    #userPayButtonStyled{
        width:20%;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color:#33334d;
    };
    #loadingUsers{
        width:100vw;
        height:50vh;
        display:flex;
        align-items: center;
        justify-content: center;
        padding:0px;
    }
`