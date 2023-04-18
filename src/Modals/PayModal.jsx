import React, { useEffect, useState } from "react";
import { ApprovedOrReprovedPayStyle, PayModalSonStyle, PayModalStyle } from "./PayModalStyle";
import axios from "axios";


   /*  function modalChange() {
        setModalOpen(false)
    }
 */

export default function PayModal({ setModalOpen, setUserName, setUserId }) {

    const [moneyValueStorage, setMoneyStorageValue] = useState(0);
  /* c */
    const postApprovedData = {

        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
        destination_user_id: setUserId,
        valueMoney: moneyValueStorage,

    };

    const postDisapprovedData = {

        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
        destination_user_id: setUserId,
        valueMoney: moneyValueStorage,

    };

    const [optionState, setOptionState] = useState(true);
    const optionChangeState = () => {
        setOptionState(current => !current);
        /* console.log(optionState,'estadoooooooooo') */

    };

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

    const [disabledState, setDisabledState] = useState(true);
  /*   const formatter = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",

    }); */

    const handleChange = (event) => {
       /*  if (optionState == true) {
            setPostApprovedData({
                ...postApprovedData,
                [event.target.valueMoney]: formatter.format(moneyValueStorage).replaceAll('R$', ''),
     

            });
            setMoneyStorageValue(event.target.value)
            console.log(event, "Aprovado");

        }
        if (optionState == false) {
            setPostDisapprovedData({
                ...postDisapprovedData,
                [event.target.valueMoney]: formatter.format(moneyValueStorage).replaceAll('R$', ''),
              

            }); */
            let valueMask = event.target.value;
            valueMask = valueMask.replaceAll('.', '').replace(',', '').replaceAll('R$', '');
            valueMask = valueMask.replace(/([0-9]{2})$/gi, '.$1');
            valueMask = parseFloat(valueMask);
            setMoneyStorageValue(valueMask)
            console.log(event, "Reprovado");
             setDisabledState(false);
             console.log(event,"handle aqui")
        }

       

    const keyPressValidate = (keyDownEvent) => {


        if ('0123456789'.indexOf(keyDownEvent.key) == -1 &&
            keyDownEvent.key != 'Backspace' &&
            keyDownEvent.key != 'Alt' &&
            keyDownEvent.key != 'Ctrl') {
            alert("somente numeros sao aceitos nesse campo!");
            keyDownEvent.preventDefault();
        };
    }

    function keyPressSecondValidate(eventoUp) {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",

        });
        let valueMask = eventoUp.target.value;
        valueMask = valueMask.replaceAll('.', '').replace(',', '').replaceAll('R$', '');
        valueMask = valueMask.replace(/([0-9]{2})$/gi, '.$1');
        valueMask = parseFloat(valueMask);
        eventoUp.target.value = formatter.format(valueMask).replaceAll('R$', '');
    }


    const [payModalScreen, setPayModalScreen] = useState(false)
    const showPayModal = () => {
        setPayModalScreen(true);
    };
    useEffect(() => { console.log(moneyValueStorage, 'aaaaaaaaaaaa') }, [moneyValueStorage]);


    if (payModalScreen == true) {
        return <ApprovedOrReprovedModal optionModalState={optionState} />
    };

    /*    function submitOnClick(event){
           event.preventDefaut()
       } */

    /*  const showButton = () =>{
         setDisabledState(false);
     } */
    return (
        <PayModalStyle>
            <PayModalSonStyle>
                <h3>Pagamento para {setUserName}</h3>
                <form id="elementsPositionStyle"/*  onSubmit={(eventoSubmit)=>submitOnClick(eventoSubmit)} */ >

                    <input type="text" value={moneyValueStorage} placeholder="R$ 0,00" onChange={(evento) => handleChange(evento)} onKeyDown={(event) => keyPressValidate(event)} onKeyUp={(event) => { keyPressSecondValidate(event) }} required />
                    <select onChange={optionChangeState} >
                        <option value={postApprovedData}>Cartão com o final 111</option>
                        <option value={postDisapprovedData}>Cartão com o final 234</option>
                    </select>
                    <button type="submit" disabled={disabledState} onClick={() => { handlePost(); showPayModal(); }}>Pagar</button>
                </form>
            </PayModalSonStyle>
        </PayModalStyle>
    );

};

export function ApprovedOrReprovedModal({ optionModalState }) {
    /*  console.log(optionModalState,"modal estado") */
    return (
        <PayModalStyle>
            <ApprovedOrReprovedPayStyle>
                <h3>Recibo de pagamento</h3>
                {optionModalState == true ? <p className="dynamicTextClass"> Parabens, o pagamento foi efetuado com sucesso! </p> : <p className="dynamicTextClass"> Não foi possivel efetuar o pagamento, o cartão está invalido! </p>}
            </ApprovedOrReprovedPayStyle>
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