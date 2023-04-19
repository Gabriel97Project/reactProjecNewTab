import React, { useEffect, useState } from "react";
import { UserPageStyled } from "./UserPageStyled";
import userData from "../json/users.json"
import PayModal from "../Modals/PayModal";



export default function UserPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();

    const modalTrue = () => {

        /* setModalOpen(current => !current) */
        setModalOpen(true);
    };
    const handleClickName = (userUnit) => {
        setUserName(()=>userUnit.name)

        console.log("pagina carregou",userName)
    };
    const handleClickId = (userUnit) => {
        setUserId(()=>userUnit.id)

        console.log("pagina carregou",userId)
    };
    useEffect(() => {
        console.log(userName)
        console.log(userId)
    }, [userName,userId,"usuarios"])

    if (modalOpen) {
        return <PayModal setModalOpen={setModalOpen} setUserName={userName} setUserId={userId} />
    };
    return (
        <UserPageStyled>
            {userData.map((userUnit) => {

                return (
                    <div id="userMapStyled" key={userUnit.id}>
                        <div id="userPhotoStyled" >

                            <img className="userImageStyle" src={userUnit.img} key={userUnit.id}></img>
                        </div>
                        <div id="userDataStyled" >
                            Nome do usuário: {userUnit.name}
                            <div className="userNameStyle" key={userUnit.id}>
                                ID:{userUnit.id} - Username: {userUnit.username}
                                
                            </div>
                        </div>
                        <div id="userPayButtonStyled" >
                            <button  onClick={() => {
                                handleClickName(userUnit);
                                handleClickId(userUnit); 
                                modalTrue(true);

                            }}>Pagar</button>
                        </div>
                    </div>
                )

            })}




        </UserPageStyled>
    )
}