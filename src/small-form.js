const refs = {
    backdrop: document.querySelector('.steps__form-backdrop'),
    
    modalInput: document.querySelectorAll('.steps__input'),
    modalFormBtn: document.querySelector('.steps__btn'),
    modalCloseBtn: document.querySelector('.steps__form-close-btn'),
    body: document.querySelector('body'),
    clientName: document.querySelector('.modal__thanks-name'),
    
}
  const TOKEN = '6279094717:AAEINNI-WB8PTYW-nQglKgNdX6lALH6T6A0';
        const CHAT_ID = '-1001887598395';
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


document.addEventListener('DOMContentLoaded', function () {
    const modalFormS = document.querySelector('.steps__form');


    modalFormS.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(modalFormS);
        let formData = new FormData(modalFormS);

        if (formData) {
        }


        formData.forEach((x, y) => {
            console.log(x);
            console.log(y);
        
        });


        if (error === 0) {
            onModalFormBtnClick();
            let messageToTg = `<b>New small action</b>\n`;
            function sendMessage() {
       
            
            
        
                for (let entry of formData.entries()) {
                    console.log(entry);

                    if (entry[1] != '') {
                        messageToTg += ` ${entry.join(" : ")}\n`;
                        console.log(messageToTg);
                    }

            
                }
                return messageToTg;
            };

            sendMessage();
            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: messageToTg,
            });
        }

    };


    function formValidate(modalFormS) {
         const mistake = {
    tel: document.querySelector('.small-mistake-tel-message'),
    mail: document.querySelector('.small-mistake-mail-message'),
    name: document.querySelector('.small-mistake-name-message'),
    address: document.querySelector('.small-mistake-address-message'),
    }

        let error = 0;
        let formReq = document.querySelectorAll('._req');
         console.log(formReq);
        

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
             if (input.classList.contains('_req-name')) {
                if (nameTest(input)) {
                    formAddError(input);
                    error++;
                    mistake.name.classList.add('_mistake');
                    
                } else  {
                    mistake.name.classList.remove('_mistake');
                }
            } 
             if (input.classList.contains('_req-tel')) {
                if (telTest(input)) {
                    formAddError(input);
                    error++;
                    mistake.tel.classList.add('_mistake');
                    
                } else  {
                    mistake.tel.classList.remove('_mistake');
                }
            }
            if (input.classList.contains('_req-email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                    mistake.mail.classList.add('_mistake');
                } else  {
                    mistake.mail.classList.remove('_mistake');
                }
            }
            else {
				if (input.value === '') {
					formAddError(input);
                    error++;
                    mistake.address.classList.add('_mistake');
                }
                 else  {
                    mistake.address.classList.remove('_mistake');
                }
			}
            
            //  if (input.classList.contains('_req-address')) {
            //     if (addressTest(input)) {
            //         formAddError(input);
            //         error++;
            //         mistake.address.classList.add('_mistake');
                    
            //     } else  {
            //         mistake.address.classList.remove('_mistake');
            //     }
            // } 
        }
        return error;
    }

    function formAddError(input) {
        input.classList.add('_error');
        input.classList.add('_error');
       
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
        input.classList.remove('_error');
        // mistake.tel.classList.remove('mistake');
    }
    function nameTest(input) {
        return !/^([A-zа-яё-]+[\s]{0,1}[A-zа-яё-]+)$/.test(input.value);
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    function telTest(input) {
        return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
    }

    // function addressTest(input) {
    //     return !/^^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(input.value);
    // }



}

  
);







function onModalFormBtnClick(event) {
    console.log('qqqq');
    refs.backdrop.classList.toggle('is-hiden');

    refs.backdrop.addEventListener('click', onBackdropClick);
    refs.modalCloseBtn.addEventListener('click', (onModalCloseBtnClick));

    refs.clientName.textContent = `Dear ${refs.modalInput[0].value},`;
    window.addEventListener('keydown', onEscKeyPress);
    // refs.modalFormBtn.removeEventListener('click', (onModalFormBtnClick));
}

function onModalCloseBtnClick(event) {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.backdrop.removeEventListener('click', onBackdropClick);

    refs.modalCloseBtn.removeEventListener('click', (onModalCloseBtnClick));
    refs.modalCloseBtn.removeEventListener('click', (onModalCloseBtnClick));
    refs.backdrop.classList.toggle('is-hiden');

}
function onBackdropClick(event) {

    if (event.target === event.currentTarget) {

        onModalCloseBtnClick();
    }
};

function onEscKeyPress(event) {   
    
    if (event.code==="Escape") {
        onModalCloseBtnClick();
    }
    
}