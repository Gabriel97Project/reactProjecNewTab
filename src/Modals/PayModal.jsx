import React, { useEffect, useState } from "react";
import { ApprovedPayStyle, DisapprovedPayStyle, PayModalSonStyle, PayModalStyle } from "./PayModalStyle";
import axios from "axios";



export default function PayModal({ setModalOpen, setUserName, setUserId }) {
    /*     let cards = [
            // valid card
            {
              card_number: '1111111111111111',
              cvv: 789,
              expiry_date: '01/18',
            },
            // invalid card
            {
              card_number: '4111111111111234',
              cvv: 123,
              expiry_date: '01/20',
            },
          ]; */

    function modalChange() {
        setModalOpen(false)
    }


    const [postApprovedData, setPostApprovedData] = useState({


        // Card Info
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',

        // Destination User ID
        destination_user_id: setUserId,

        // Value of the Transaction
        value: 'number',


    });
    const [postDisapprovedData, setPostDisapprovedData] = useState({


        // Card Info
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',

        // Destination User ID
        destination_user_id: setUserId,

        // Value of the Transaction
        valueMoney: 'number',


    });

    const handlePost = () => {
        if (optionState == true) {
            axios.post(' https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', postApprovedData)
                .then(res => {
                    console.log(res.postApprovedData, "repostaaa");
                })
                .catch(err => {
                    console.log(err);
                });
            /* console.log(handlePost, 'função handle post') */

        };
        if (optionState == false) {
            axios.post(' https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', postDisapprovedData)
                .then(res => {
                    console.log(res.postDisapprovedData, "repostaaa");
                })
                .catch(err => {
                    console.log(err);
                });
           /*  console.log(handlePost, 'função handle post') */
        };
    };
    const handleChange = (event) => {
        if (optionState == true) {
            setPostApprovedData({
                ...postApprovedData,
                [event.target.value]: event.target.value,
                [event.target.destination_user_id]: event.target.value

            });
            console.log(event, "Aprovado");

        }
        if (optionState == false) {
            setPostDisapprovedData({
                ...postDisapprovedData,
                [event.target.value]: event.target.value,
                [event.target.destination_user_id]: event.target.value

            });
            console.log(event, "Reprovado");
        }


    };

    const [optionState, setOptionState] = useState(true);
    const optionChangeState = () => {
        setOptionState(current => !current);
        /* console.log(optionState,'estadoooooooooo') */

    };
    const [payModalScreen,setPayModalScreen] = useState(false)
    const showPayModal = () =>{
        setPayModalScreen(true);
    };
    useEffect(() => { console.log(optionState, 'aaaaaaaaaaaa') }, [optionState]); 


    if (payModalScreen == true) {
        return <ApprovedOrReprovedModal optionModalState={optionState}/>
    };
    return (
        <PayModalStyle>
            <PayModalSonStyle>
                <h3>Pagamento para {setUserName}</h3>
                <div id="elementsPositionStyle">
                    <input placeholder="R$ 0,00" onChange={(evento)=>handleChange(evento)} type="text" required />
                    <select onChange={optionChangeState} >
                        <option value={postApprovedData}>Cartão com o final 111</option>
                        <option value={postDisapprovedData}>Cartão com o final 234</option>
                    </select>
                    <button onClick={()=>{handlePost();showPayModal();}}>Pagar</button>
                </div>
            </PayModalSonStyle>
        </PayModalStyle>
    );

};

export function ApprovedOrReprovedModal({optionModalState}) {
   /*  console.log(optionModalState,"modal estado") */
    return (
        <PayModalStyle>
            <ApprovedPayStyle>
                {optionModalState == true ? "Parabens, o pagamento foi efetuado com sucesso!": "Não foi possivel efetuar o pagamento, o cartão está invalido!"}
            </ApprovedPayStyle>
        </PayModalStyle>

    );
};
/* 

export function DisapprovedModal() {
    return (
        <PayModalStyle>
            <DisapprovedPayStyle>
                <h3>Recibo de pagamento</h3>
                <p>O pagamento não foi concluído com sucesso</p>
            </DisapprovedPayStyle>
        </PayModalStyle>

    )
}; */