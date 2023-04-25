import React, { useEffect, useState } from "react";
import { UserPageStyled } from "./UserPageStyled";
import PayModal from "../Modals/PayModal";
import axios from "axios";



export default function UserPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', userData)
            .then(response => {
                setUserData(response.data);
                console.log(userData,'user data');
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const modalTrue = () => {
        setModalOpen(true);
    };
    const handleClickName = (userUnit) => {
        setUserName(() => userUnit.name);

    };
    const handleClickId = (userUnit) => {
        setUserId(() => userUnit.id);

    };

    if (modalOpen) {
        return <PayModal setModalOpen={setModalOpen} setUserName={userName} setUserId={userId} />
    };
    if(userData.length == []){
        return <UserPageStyled><h2 id='loadingUsers'>⏰ Carregando usuários...</h2></UserPageStyled> 
           
        
    }if(userData.length > 1){
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
                            <button onClick={() => {
                                handleClickName(userUnit);
                                handleClickId(userUnit);
                                modalTrue(true);

                            }}>
                                Pagar
                            </button>
                        </div>
                    </div>
                )

            })}
        </UserPageStyled>
    )
    }
    
}