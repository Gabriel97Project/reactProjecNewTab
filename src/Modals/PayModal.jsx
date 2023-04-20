import React, { useState } from "react";
import { ApprovedOrReprovedPayStyle, PayModalSonStyle, PayModalStyle } from "./PayModalStyle";
import axios from "axios";


export default function PayModal({ setModalOpen, setUserName, setUserId }) {

    const [moneyValueStorage, setMoneyStorageValue] = useState(0);

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

        };
        if (optionState == false) {
            axios.post(' https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', postDisapprovedData)
                .then(res => {
                    console.log(res.postDisapprovedData, "repostaaa");
                })
                .catch(err => {
                    console.log(err);
                });
        };
    };

    const [disabledState, setDisabledState] = useState(true);


    const handleChange = (event) => {

        let valueMaskInput = event.target.value;
        valueMaskInput = valueMaskInput.replaceAll('.', '').replace(',', '').replaceAll('R$', '');
        valueMaskInput = valueMaskInput.replace(/([0-9]{2})$/gi, '.$1');
        valueMaskInput = parseFloat(valueMaskInput);
        setMoneyStorageValue(valueMaskInput)
        setDisabledState(false);
    };



    const keyPressValidate = (keyDownEvent) => {


        if ('0123456789'.indexOf(keyDownEvent.key) == -1 &&
            keyDownEvent.key != 'Backspace' &&
            keyDownEvent.key != 'Alt' &&
            keyDownEvent.key != 'Ctrl') {
            alert("somente numeros sao aceitos nesse campo!");
            keyDownEvent.preventDefault();
        };
    };

    function keyPressSecondValidate(eventoUp) {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",

        });
        let valueMaskUp = eventoUp.target.value;
        valueMaskUp = valueMaskUp.replaceAll('.', '').replace(',', '').replaceAll('R$', '');
        valueMaskUp = valueMaskUp.replace(/([0-9]{2})$/gi, '.$1');
        valueMaskUp = parseFloat(valueMaskUp);
        eventoUp.target.value = formatter.format(valueMaskUp).replaceAll('R$', '');
    }

    const [payModalScreen, setPayModalScreen] = useState(false)
    const showPayModal = () => {
        setPayModalScreen(true);
    };

    if (payModalScreen == true) {
        return <ApprovedOrReprovedModal optionModalState={optionState} />
    };

    function modalChange() {
        setModalOpen(false)
    };
    return (
        <PayModalStyle>
            <button id="closeModalStyle" onClick={modalChange}>X</button>
            <PayModalSonStyle>

                <h3>Pagamento para {setUserName}</h3>
                <form id="elementsPositionStyle">

                    <input type="text" value={moneyValueStorage == 0 ? "R$ 0,00" : moneyValueStorage} onChange={(evento) => handleChange(evento)}
                     onKeyDown={(event) => keyPressValidate(event)} onKeyUp={(event) => { keyPressSecondValidate(event) }} required />
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

    return (
        <PayModalStyle>
            <ApprovedOrReprovedPayStyle>
                <h3>Recibo de pagamento</h3>
                {optionModalState == true ?
                 <p className="dynamicTextClass"> Parabens, o pagamento foi efetuado com sucesso! </p> :
                <p className="dynamicTextClass"> Não foi possivel efetuar o pagamento, o cartão está invalido! </p>}
            </ApprovedOrReprovedPayStyle>
        </PayModalStyle>

    );
};