import styled from "styled-components";

export const PayModalStyle = styled.div`
    width:100vw;
    height:100vh;
    background-color:blue;
    position: fixed;
    top:0px;
    opacity:0.9;
    display:flex;
    align-items:center;
    justify-content:center;

`

export const PayModalSonStyle = styled.div`
    width:40%;
    height: 60%;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    h3{
       background-color: #52527a;
       color:white;
       width:100%;
       height:60px;
       display:flex;
       
        align-items:center;
        
    }
    #elementsPositionStyle{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
        /* background-color:red; */
        width:100%;
        height:250px;
      
        input{
            width:75%;
            height:50px;
            border-radius:5px;
            border-color:#a3a3c2;
            ::-webkit-input-placeholder { /* Edge */
            font-size:30px;
            
            
        }
        };
        select{
            width:70%;
            height:50px;
            border-radius:5px;
            border-color:black;
            font-size:30px;
            font-weight: bold;
        };
        button{
            width:20%;
            height:50px;
            font-size:25px;
            font-weight: bold;
            border-radius:5px;
            background-color:#e6e6e6;
            border-color:gainsboro;
        };
    }
`

export const ApprovedPayStyle = styled.div`
    width:40%;
    height: 200px;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    h3{
       background-color: #52527a;
       color:white;
       width:100%;
       height:60px;
       display:flex;
       
        align-items:center;
        
    }
`


export const DisapprovedPayStyle = styled.div`
    width:40%;
    height: 200px;
    background-color:red;
    display:flex;
    flex-direction:column;
    align-items:center;
    h3{
       background-color: #52527a;
       color:white;
       width:100%;
       height:60px;
       display:flex;
       
        
        
    }
`