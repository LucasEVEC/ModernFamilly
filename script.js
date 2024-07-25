// SIDE BAR
const menuItem = document.querySelectorAll(".menu-item");


const messagesNotification = document.querySelector("#messages-notification")
const messages = document.querySelector(".messages")
const message = document.querySelectorAll(".message")
const messageSearch = document.querySelector("#message-search")


const theme = document.querySelector("#theme")
const themeModal = document.querySelector(".customize-theme")


const fontSizes = document.querySelectorAll(`.choose-size span`)


// REMOVE ACTIVE CLASS FRFOM ALL MENU ITEM
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove(`active`)
    })
}

menuItem.forEach(item => {
    item.addEventListener(`click`, ()=> {
        changeActiveItem();
        item.classList.add(`active`);
        if(item.id != `notifications`){
            document.getElementById(`popup`).style.display = `none`;
    } else {
        document.getElementById(`popup`).style.display = `block`;
        document.querySelector(`#notifications .notification-count`).style.display = `none`
    }
    })
})


//----------------------------MESSAGES------------------------
const searchMessage = ()=> {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelectorAll(`h5`).textContent.toLowerCase();
        if(name.idexOf(val) != -1){
            user.style.display = `flex`;
        } else {
            user.style.display = `none`;
        }
    })
}

messageSearch.addEventListener(`keyup`, searchMessage)



messagesNotification.addEventListener(`click`, ()=> {
    messages.style.boxShadow = `0 0 1rem var(--color-primary)`;
    messagesNotification.querySelector(`.notification-count`).style.display = `none`;
    setTimeout(() => {
        messages.style.boxShadow = `none`
    }, 2000);
})




const openThemeModal = ()=> {
    themeModal.style.display = `grid`
}

const closeThemeModal = (e)=> {
    if(e.target.classList.contains(`customize-theme`)){
        themeModal.style.display = `none`
    }
}

themeModal.addEventListener(`click`, closeThemeModal)

theme.addEventListener(`click`, openThemeModal)



