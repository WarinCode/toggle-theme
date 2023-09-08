const bodyEl: HTMLBodyElement = document.querySelector('body')!;
const headerEl: HTMLHeadElement = document.querySelector('header')!;
const btn: HTMLButtonElement = document.querySelector('button')!;
const spanEl: HTMLSpanElement = document.querySelector('.material-symbols-outlined')!;

type googleFonts = [string , string];
const icon:googleFonts = ['light_mode' ,'nights_stay']

interface Theme {
    readonly light: string , 
    readonly dark:string
}
const themeProvider: Theme = {
    light: "light-theme",
    dark: "dark-theme",
}
const { light , dark }:Theme= themeProvider;
const [ sun , moon ]:googleFonts = icon;

btn.addEventListener('click', (e: Event):void => {
    if (bodyEl.className === light) {
        bodyEl.className = dark;
        headerEl.textContent = dark;
        spanEl.textContent = moon;
    } else {
        bodyEl.className = light;
        headerEl.textContent = light;
        spanEl.textContent = sun;
    }
})