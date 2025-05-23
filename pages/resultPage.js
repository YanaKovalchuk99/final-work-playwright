const { expect } = require("@playwright/test");

export class ResultPage{

    constructor(page){
        this.page = page;
        this.typeCountertop = page.locator('//div/table[2]/tbody/tr[2][td[2][contains(text(), "Тип столешницы")]]/td[3]')
        this.materialValue = page.locator('//div/table[1]/tbody/tr[2][td[2][contains(text(), "Материал")]]/td[3]');
        this.optionValue = page.locator('//div/table[2]/tbody/tr[5][td[2][contains(text(), "Опции")]]/td[3]');
        this.finalPrice = page.locator('//div/table[10]/tbody/tr[6][td[2][contains(text(), "Стоимость итоговая")]]/td[5]')
    }
    
    async checkMaterial() {
        await expect(this.materialValue).toHaveText('acryl:Neomarm:N-103 Gray Onix');
    }
    
    async checkTypeCountertop() {
        await expect(this.typeCountertop).toHaveText('П-образная');
    }

    async checkOption() {
        await expect(this.optionValue).toHaveText('Проточки для стока воды');
    }

    async checkFinalPrice(){
        await expect(this.finalPrice).toHaveText('407000.00 ₽');
    }
}