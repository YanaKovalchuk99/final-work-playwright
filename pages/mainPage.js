const { expect } = require("@playwright/test");

export class MainPage{
    constructor(page){
        this.page = page;
        this.hideCountertop = page.getByTestId('hide-countertop');
        this.buttonShowMain = page.getByTestId('show-main');
        this.countertopTypeU = page.getByTestId('countertop-type-u');
        this.edge = page.getByTestId('edge-or-plinth');
        this.countertopImg = page.locator('img.style_ctopImg__vjPZm');
        this.thickness = page.getByTestId('countertop').getByTestId('select-thickness');
        this.chooseThickness = page.locator('button.styles_options__1Rp-f');
        this.topButton = page.getByTestId('top-button').last();
        this.buttonIsland = page.getByTestId('product-item').first();
        this.buttonWaterFlow = page.getByTestId('options-item').nth(2);
        this.stoneBlockGray = page.getByTestId('stone-block').nth(2);
        this.buttonCulc = page.getByTestId('calc-button');
    }
    
    //методы работы с кнопками
    async clickHideCountertop() {
        await this.hideCountertop.click();  
    }


    async clickCountertopTypeU() {
        await this.countertopTypeU.click();  
    }

    async clickTopButton() {
        await this.topButton.click();  
    }

    async selectThickness() {
        await this.thickness.click(); 
        await this.chooseThickness.click(); 
    }

    async clickAddIsland() {
        await this.buttonIsland.click();  
    }
  
    async clickAddWaterFlow() {
        await this.buttonWaterFlow.click();  
    }

    async clickStoneBlockGray() {
        await this.stoneBlockGray.click();  
    }

    async clickCulcButton() {
        await this.buttonCulc.click();  
    }

    //методы проверок
    async checkEdgesCount(edgesCount) {
        await expect(this.edge).toHaveCount(edgesCount);  
    }

    async checkHideCountertop(){
        await expect(this.buttonShowMain).toBeVisible();
     }

    async checkCountertopImgType(expectedSrc) {
        await expect(this.countertopImg).toHaveAttribute('src', expectedSrc);  
    }


}