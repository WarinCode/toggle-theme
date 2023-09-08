"use strict";
const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('header');
const btn = document.querySelector('button');
const spanEl = document.querySelector('.material-symbols-outlined');
const icon = ['light_mode', 'nights_stay'];
const themeProvider = {
    light: "light-theme",
    dark: "dark-theme",
};
const { light, dark } = themeProvider;
const [sun, moon] = icon;
btn.addEventListener('click', (e) => {
    if (bodyEl.className === light) {
        bodyEl.className = dark;
        headerEl.textContent = dark;
        spanEl.textContent = moon;
    }
    else {
        bodyEl.className = light;
        headerEl.textContent = light;
        spanEl.textContent = sun;
    }
});
