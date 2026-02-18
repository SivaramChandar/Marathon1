import {expect, test} from "@playwright/test"

test("Decathalon site", async({page})=>{
    await page.goto("https://www.decathlon.in/")
    const currentPage = await page.title()
    expect(currentPage).toContain('Sporting')

    //await page.getByText("Search for  ").click()
    await page.locator("(//span[text()='Search for  '])[1]").click()
    const searchText = await page.getByRole("textbox")

    const searchOpt = await page.getByText('TRENDING SEARCHES')
    await expect(searchOpt).toHaveText('TRENDING SEARCHES')

    await searchText.fill("shoes")
    await searchText.press('Enter')
    
    await expect(page).toHaveTitle("Search | shoes")

    // await page.getByText("Running").click()
    await page.locator("//span[contains(text(),'Men')]").click()
    await page.locator("//span[contains(text(),'Running')]").click()
    await page.locator("//span[contains(text(),'Uk 10.5')]").click()
    await page.getByText("Most Relevant").first().click()
    await page.getByText("Price: High to Low").click()

    // await page.locator(".ais-InfiniteHits-item").first().click()
    // await page.getByAltText('Men Running and Trail Running Shoes, Kiprun JF 190 Grip - Silver Grey').click()

    await page.getByText('Men Running and Trail Running Shoes, Kiprun JF 190 Grip - Silver Grey').click()
    await page.getByText("UK 10.5 - EU 45").click()
    await page.getByLabel('addToCart').click()

    await page.locator("//p[text()='Cart']").click()
    const totalVal = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']").innerText()
    console.log(totalVal)




})