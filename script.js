const menuItem = document.querySelectorAll(".menu-item");

const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

const fontSizes = document.querySelectorAll(`.choose-size span`);
const colorPalette = document.querySelectorAll('.choose-color span');
const bgPalette = document.querySelectorAll('.choose-bg div');

// REMOVE ACTIVE CLASS FROM ALL MENU ITEMS
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove(`active`);
    });
};

menuItem.forEach(item => {
    item.addEventListener(`click`, () => {
        changeActiveItem();
        item.classList.add(`active`);
        if (item.id !== `notifications`) {
            document.getElementById(`popup`).style.display = `none`;
        } else {
            document.getElementById(`popup`).style.display = `block`;
            document.querySelector(`#notifications .notification-count`).style.display = `none`;
        }
    });
});

//----------------------------MESSAGES------------------------
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector(`h5`).textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
            user.style.display = `flex`;
        } else {
            user.style.display = `none`;
        }
    });
};

messageSearch.addEventListener(`keyup`, searchMessage);

messagesNotification.addEventListener(`click`, () => {
    messages.style.boxShadow = `0 0 1rem var(--color-primary)`;
    messagesNotification.querySelector(`.notification-count`).style.display = `none`;
    setTimeout(() => {
        messages.style.boxShadow = `none`;
    }, 2000);
});

const openThemeModal = () => {
    themeModal.style.display = `grid`;
};

const closeThemeModal = (e) => {
    if (e.target.classList.contains(`customize-theme`)) {
        themeModal.style.display = `none`;
    }
};

themeModal.addEventListener(`click`, closeThemeModal);
theme.addEventListener(`click`, openThemeModal);

// Font Size
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        fontSizes.forEach(s => s.classList.remove('active'));
        size.classList.add('active');
        let fontSize;
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
        }
        // Change the font size of the root HTML element
        document.querySelector('html').style.fontSize = fontSize;
    });
});

// Primary Color
// Assuming colorPalette is a NodeList of the color elements
// Assuming root is the document root element (HTML)
const root = document.documentElement;

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        if(color.classList.contains('color-2')){
            primaryHue = 252;
        } else if(color.classList.contains('color-1')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-5')){
            primaryHue = 152;
        } else if(color.classList.contains('color-4')){
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
    });
});


// Background Color
document.addEventListener('DOMContentLoaded', () => {
    const bgPalette = document.querySelectorAll('.choose-bg div');

    bgPalette.forEach(bg => {
        bg.addEventListener('click', () => {
            bgPalette.forEach(b => b.classList.remove('active'));
            bg.classList.add('active');
            let lightColorLightness;
            let whiteColorLightness;
            let darkColorLightness;
            if (bg.classList.contains('bg-1')) {
                lightColorLightness = '95%';
                whiteColorLightness = '100%';
                darkColorLightness = '17%';
            } else if (bg.classList.contains('bg-2')) {
                lightColorLightness = '15%';
                whiteColorLightness = '20%';
                darkColorLightness = '95%';
            } else if (bg.classList.contains('bg-3')) {
                lightColorLightness = '0%';
                whiteColorLightness = '10%';
                darkColorLightness = '95%';
            }
            document.documentElement.style.setProperty('--light-color-lightness', lightColorLightness);
            document.documentElement.style.setProperty('--white-color-lightness', whiteColorLightness);
            document.documentElement.style.setProperty('--dark-color-lightness', darkColorLightness);
        });
    });
});

