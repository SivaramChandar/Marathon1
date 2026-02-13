import test from "@playwright/test"

test("PVR cinemas", async({page})=>{
    await page.goto("https://www.pvrcinemas.com/")
    await page.getByPlaceholder("Search for city").fill("Chennai")
    await page.locator("//li[text()='Chennai']").click()

    await page.locator("//span[text()='Cinema']").click()
    const cineSel = await page.locator("//span[text()='Select Cinema']")
    cineSel.click()

    await page.locator("//span[text()='INOX The Marina Mall, OMR, Chennai']").click()

    // await page.locator("//span[text()='Select Date']").click()

    // await page.locator("//span[contains(text,'Tomorrow')]").click()
    await page.getByText('Tomorrow').click()

    // await page.locator("//span[text()='Select Movie']").click()
    // await page.locator("#movie").click()

    await page.locator("(//span[text()='POOKIE'])[2]").click()

    await page.getByText("03:50 PM").click()
    // await page.getByText("Book").click()
    await page.locator("//div[@class='quick-lefts ']//span").click()
    await page.getByText("Accept").click()

    // await page.locator("['#EX.EXECUTIVE|J:16']").click()
    await page.locator("//span[@id='EX.EXECUTIVE|J:16']").click()

    // const seatInfo = await page.locator("//div['@class=seat-number']").innerText()
    const seatInfo = await page.locator(".seat-number").innerText()
    console.log(seatInfo)

    const amountT = await page.locator(".grand-prices").innerText()
    console.log(amountT)

    await page.locator("//button[text()='Proceed']").click()


})