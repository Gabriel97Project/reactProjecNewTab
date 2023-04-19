import React from "react";
import MainPage from "./MainPage/MainPage";
import UserPage from "./UsersPage/UserPage";
import { AppStyled } from "./AppStyled";
import PayModal,{ ApprovedModal, DisapprovedModal}  from "./Modals/PayModal";


function App() {
  return(
    <AppStyled>
        <MainPage/>
       {/*  <UserPage/> */}
        {/* <PayModal/> */}
      {/*  <ApprovedModal/>  */}
       {/* <DisapprovedModal/> */}
    </AppStyled>

    
  )
    

}

export default App;
