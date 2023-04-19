import styled from "styled-components";

export const PayModalStyle = styled.div`
    width:100vw;
    height:100vh;
     background-color:gray;
    position: fixed;
    top:0px;
    opacity:0.8;
    display:flex;
    align-items:center;
    justify-content:center;
    #closeModalStyle{
        position:absolute;
        top:70px;
        right:300px;
    };

`

export const PayModalSonStyle = styled.div`
    width:40%;
    height: 60%;
    background-color:white;
    border:solid 2px;
    border-color:black ;
    display:flex;
    flex-direction:column;
    align-items:center;
    h3{
       background-color: #52527a;
       color:white;
       width:100%;
       height:60px;
       display:flex;
       margin:0px;
        align-items:center;
        
    };

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
            ::-webkit-input-placeholder{ 
            font-size:50px;   
             };
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
     
    
    };
`

export const ApprovedOrReprovedPayStyle = styled.div`
    width:40%;
    height: 200px;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:solid 2px;
    border-color:black ;
    h3{
       background-color: #52527a;
       display:flex;
        align-items:center;
       color:white;
       width:100%;
       height:60px;
       display:flex;
       margin:0px;
       padding:0px;
    };
    .dynamicTextClass{
        font-size:20px;
        text-align:center;
        margin-top:40px;
        font-weight:bold;
    }
`