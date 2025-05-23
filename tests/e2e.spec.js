const { test } = require("@playwright/test");
const {AuthPage} = require('../pages/authPage');
const { MainPage } = require("../pages/mainPage"); 
const { CulcPage } = require("../pages/culcPage");
const { ResultPage } = require("../pages/resultPage");
const allure = require("allure-js-commons");
 
test.beforeEach( "Авторизоваться", async ({ page}) => {
    const authPage = new AuthPage(page);

    await authPage.openPage();
    await authPage.auth('tester@inzhenerka.tech','LetsTest!');
});

test("Проверка полного пути (e2e сценарий)", async ({ page }) => {
    const mainPage = new MainPage(page);
    const culcPage = new CulcPage(page);
    
    await allure.step("Выбрать п-образную столешницу", async () => {
      await mainPage.clickCountertopTypeU();
    })
    await allure.step("Выбрать толщину 4", async () => {
      await mainPage.selectThickness();
    })
    await allure.step("Убрать плинтус", async () => {
      await mainPage.clickTopButton(); 
    })
    await allure.step("Добавить остров", async () => {
      await mainPage.clickAddIsland();
    })
    await allure.step("Добавить проточки для стока воды", async () => {
      await mainPage.clickAddWaterFlow();
    })
    await allure.step("Выбрать нужный цвет", async () => {
      await mainPage.clickStoneBlockGray();
    })
    await allure.step("Нажать кнопку 'Рассчитать'", async () => {
      await mainPage.clickCulcButton();
    })
    
      const resultPageHandle = await culcPage.openReport();
      const resultPage = new ResultPage(resultPageHandle);
    

      await resultPage.checkMaterial();
      await resultPage.checkTypeCountertop();
      await resultPage.checkOption();
      await resultPage.checkFinalPrice();
    

});