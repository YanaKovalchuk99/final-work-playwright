const { test} = require("@playwright/test");
const {AuthPage} = require('../pages/authPage');
const { MainPage } = require("../pages/mainPage"); 
 
test.beforeEach( async ({ page}) => {
    const authPage = new AuthPage(page);

    await authPage.openPage();
    await authPage.auth('tester@inzhenerka.tech','LetsTest!');
});

test("Проверка работы переключателя 'Скрыть столешницу'", async ({ page }) => {
    const mainPage = new MainPage(page);
    
    await mainPage.clickHideCountertop();
    await mainPage.checkHideCountertop();
});

test("Проверка работы переключателя 'П-образная столешница'", async ({ page }) => {
    const mainPage = new MainPage(page);
    
    await mainPage.clickCountertopTypeU();
    await mainPage.checkCountertopImgType('/static/media/countertop-p.095c44faedc9795e1fcf.png');
    await mainPage.checkEdgesCount(7);
});

