import React, { useEffect, useState } from "react";
import { ApprovedOrReprovedPayStyle, PayModalSonStyle, PayModalStyle } from "./PayModalStyle";
import axios from "axios";


export default function PayModal({ setModalOpen, setUserName, setUserId }) {

    const [moneyValueStorage, setMoneyStorageValue] = useState(0);

    let cardsState = [
        {

            card_number: '1111111111111111',
            cvv: 789,
            expiry_date: '01/18',
            destination_user_id: setUserId,
            valueMoney: moneyValueStorage,

        },
        {
            card_number: '4111111111111234',
            cvv: 123,
            expiry_date: '01/20',
            destination_user_id: setUserId,
            valueMoney: moneyValueStorage,
        }
    ];
/* 
    useEffect(() => {
            cardsState(prevState => ({
                ...prevState,
                destination_user_id: setUserId,
                valueMoney: moneyValueStorage
            }));
        }, [moneyValueStorage, setUserId]);  */
    /* PrevState é uma função que vai pegar o estado anterior, e entao usamos ...prevState para pegar dados expecificos dentro do nosso objeto
    dessa forma podemos alterar somente os dados especificos que selecionamps, sem mudar os outros dados sentro do objeto.
    acima eu estou atualizando os valores do meu id e so meu value money sempre que o estado deles forem mudados, eu tive
    que fazer isso pois quando estava enviando a resposta para meu endpoint estava sendo enviado o valor inicial do ney moneyValueStorage (era 0);
    e entao dessa forma toda vez que meu estado do valor mudar, ValueMoney vai ser atualizado no mesmo instante, dessa forma sempre que o endpiont receber
    minha reposta os dados estaram atualizados. */

    const [selectedOption, setSelectedOption] = useState(0);

    /*   
        const optionChangeStateToValid = () => {
            setCardCurrentState({
                card_number: '1111111111111111',
                cvv: 789,
                expiry_date: '01/18',
                destination_user_id: setUserId,
                valueMoney: moneyValueStorage,
            });
    
        };
        const optionChangeStateToInvalid = () => {
            setCardCurrentState({
                card_numberTwo: '4111111111111234',
                cvv: 123,
                expiry_date: '01/20',
                destination_user_id: setUserId,
                valueMoney: moneyValueStorage,
            });
    
        }; */
    const [payModalScreen, setPayModalScreen] = useState(false)
    const showPayModal = () => {
        setPayModalScreen(true);
    };

    const handlePost = (evento) => {
        evento.preventDefault();
        axios.post(' https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989',
            {
                card_number: cardsState[selectedOption].card_number,
                cvv: cardsState[selectedOption].cvv,
                expiry_date: cardsState[selectedOption].expiry_date,
                destination_user_id: cardsState[selectedOption].destination_user_id,
                valueMoney: cardsState[selectedOption].valueMoney,
            }
        )
            .then(() => {
                if (cardsState[selectedOption].card_number ==  '1111111111111111' || '4111111111111234') {
                    showPayModal();
                } else {
                    alert("Erro detectado, tente novamente!");
                }

            })
            .catch(err => {
                alert("Erro detectado, tente novamente!",err);

            });
         
          
    };

    const [disabledState, setDisabledState] = useState(true);


    const handleChange = (event) => {

        let valueMaskInput = event.target.value;
        valueMaskInput = valueMaskInput.replaceAll('.', '').replace(',', '').replaceAll('R$', '');
        valueMaskInput = valueMaskInput.replace(/([0-9]{2})$/gi, '.$1');
        valueMaskInput = parseFloat(valueMaskInput);

        setMoneyStorageValue(valueMaskInput);


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


   /*  const showPayModal = () => {
        setPayModalScreen(true);
    }; */

    /*  if (payModalScreen == true) {
         return <ApprovedOrReprovedModal optionModalState={selectedOption} finalModalClose={modalChange} />
     };
  */
    function modalChange() {
        setModalOpen(false)
    };
    const handleOptionChangeState = (event) => {
        setSelectedOption(event.target.value);


    }
    return (
        <PayModalStyle>
            <button id="closeModalStyle" onClick={modalChange}>X</button>
            <PayModalSonStyle>

                <h3>Pagamento para {setUserName}</h3>
                <form id="elementsPositionStyle" >

                    <input type="text" value={moneyValueStorage == 0 ? "R$ 0,00" : moneyValueStorage} onChange={(evento) => handleChange(evento)}
                        onKeyDown={(event) => keyPressValidate(event)} onKeyUp={(event) => { keyPressSecondValidate(event) }} required />
                    <select value={selectedOption} onChange={handleOptionChangeState}>
                        {cardsState.map((cardUnit, index) => {
                            return <option value={index}  key={index}>Cartão com o final {cardUnit.card_number.slice(-3)}</option>
                        })}
                    </select>
                    <button disabled={disabledState} onClick={(event) => { handlePost(event); showPayModal(); }}>Pagar</button>
                </form>
                {payModalScreen == true && (
                    <ApprovedOrReprovedModal
                        optionModalState={selectedOption}
                        finalModalClose={modalChange}
                    />
                )}
            </PayModalSonStyle>
        </PayModalStyle>
    );

};

export function ApprovedOrReprovedModal({ optionModalState, finalModalClose }) {
    const modalClosing = () => {
        finalModalClose(false);
    }
    return (
        <PayModalStyle>
            <button id="closingFinalModalStyle" onClick={modalClosing}>X</button>
            <ApprovedOrReprovedPayStyle>
                <h3>Recibo de pagamento</h3>
                {optionModalState == 0 ?
                    <p className="dynamicTextClass"> Parabens, o pagamento foi efetuado com sucesso! </p> :
                    <p className="dynamicTextClass"> Não foi possivel efetuar o pagamento, o cartão está invalido! </p>}
            </ApprovedOrReprovedPayStyle>
        </PayModalStyle>

    );
};