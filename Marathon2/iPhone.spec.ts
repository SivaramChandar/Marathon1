import {expect, test} from "@playwright/test"

test("iPhone add to cart", async({page})=>{
    page.goto("https://dev363522.service-now.com/")

    await page.locator("#user_name").fill("admin")
    await page.locator("#user_password").fill("mf=3hp^0UJMZ")
    await page.getByRole("button",{name:"Log in"}).click()
    await page.getByRole("menuitem", {name:"All"}).click()
  
    await page.getByRole("link", {name: "Service Catalog 3 of 23"}).click()

    const iPhonee = await page.frameLocator("#gsft_main")

    await iPhonee.getByAltText("Mobiles").click()

    await iPhonee.getByRole("link", {name:"Apple iPhone 13 pro"}).click()
    
    await iPhonee.locator("//label[text()='Yes']").click()

    await iPhonee.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill("99")
    
    await iPhonee.locator("select[class='form-control cat_item_option ']").click()

    await iPhonee.getByRole("combobox", {name:'Monthly data allowance'}).selectOption("unlimited")

    await iPhonee.locator("//label[text()='Sierra Blue']").click()
    
    await iPhonee.locator("//label[contains(text(),'512 GB')]").click()

    await expect(iPhonee.getByRole("button", {name:'Order Now'})).toBeVisible()

    await iPhonee.getByRole("button", {name:'Order Now'}).click()

    await expect(iPhonee.locator("//span[text()='Thank you, your request has been submitted']")).toBeVisible({ timeout: 10000 })

    await page.screenshot({path:'ss/fullpageIphone.png',fullPage:true})

})
