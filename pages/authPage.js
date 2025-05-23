const { expect } = require("@playwright/test");
const allure = require("allure-js-commons");

export class AuthPage{

    constructor(page){
        this.page = page;
        this.login = page.getByPlaceholder("логин");
        this.password = page.getByPlaceholder("пароль");
        this.buttonLogin = page.locator("//button[contains(text(), 'Войти')]");
        this.buttonShowMain = page.getByTestId('show-main');
        this.hideCountertop = page.getByTestId('hide-countertop');
    }
    
    async openPage() {
        await allure.step("Открыть страницу", async () => {
            await this.page.goto("https://dev.topklik.online/");
          })
    }

    async auth(login, password){
        await allure.step("Ввести логин", async () => {
            await this.login.fill(login);
          })
          await allure.step("Ввести пароль", async () => {
            await this.password.fill(password);
          })
          await allure.step("Нажать кнопку Войти", async () => {
            await this.buttonLogin.click();
          })
    }

    async checkLoadPage() {
        await expect(this.page.locator("h1").first()).toHaveText(`Калькулятор столешниц`);  
    }
}