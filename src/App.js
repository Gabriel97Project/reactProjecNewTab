import React from "react";
import { AppStyled, TittleAndLogoStyled } from "./AppStyled";
import UserPage from "./UsersPage/UserPage";
import NewTabImage from "./images/LogoFrigma.png"


function App() {
  return(
    <AppStyled>
      <TittleAndLogoStyled>
         <img src={NewTabImage}></img>
                <h1>NewTab</h1>
      </TittleAndLogoStyled>
        <UserPage/>
    </AppStyled>

    
  )
    

}

export default App;
