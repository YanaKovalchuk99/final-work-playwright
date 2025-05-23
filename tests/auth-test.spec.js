const { test, expect } = require("@playwright/test");
const {AuthPage} = require('../pages/authPage');

test("Авторизация", async ({ page }) => {
    const authPage = new AuthPage(page);
    
    await authPage.openPage();
    await authPage.auth('tester@inzhenerka.tech','LetsTest!');
    await authPage.checkLoadPage();
  });

