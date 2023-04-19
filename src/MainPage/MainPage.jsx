import React from "react";
import { MainPageStyled } from "./MainPageStyled";
import UserPage from "../UsersPage/UserPage";
import NewTabImage from "../images/LogoFrigma.png"
export default function MainPage() {
    return (
        <>
            <MainPageStyled>
                <img src={NewTabImage}></img>
                <h1>NewTab</h1>
            </MainPageStyled>
            <UserPage />
        </>



    )
}