

export class CulcPage{

    constructor(page){
        this.page = page;
        this.buttonOpenReport = page.getByTestId('open-report-button');
    }
    
    async openReport() {
        const [newPage] = await Promise.all([
          this.page.context().waitForEvent('page'),
          this.buttonOpenReport.click(),
        ]);
        await newPage.waitForLoadState();
        return newPage;
      }
}