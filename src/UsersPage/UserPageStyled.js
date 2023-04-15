import styled from "styled-components";


export const UserPageStyled = styled.div`
    width: 50%;
    
   /*  background-color:blue; */
    display:flex;
    flex-direction:column;
    
    #userMapStyled{
        width:100%;
        height:130px;
  /*       background-color:bisque; */
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
        /*     background-color:red; */
        }
    };
    #userPayButtonStyled{
        width:20%;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color:#33334d;
    };
`