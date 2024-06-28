describe('Saucedemo login test', () => {
    it('Successful login', async () => {
        await browser.url(process.env.BASE_URL)

        // login page element definition
        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@value="Login"]')

        
        // Dashboard page element definition
        const cartIcon = await browser.$("#shopping_cart_container")


        // login page step
        await usernameTextbox.waitForDisplayed({ timeout: 3000 })
        await usernameTextbox.setValue("standard_user")
        await passwordTextbox.setValue(process.env.PASSWORD)
        await loginButton.click()

        // dashboard page step
        await expect(cartIcon).toBeDisplayed()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  
    });

    it('Successful login using visual-user', async () => {
        await browser.url('https://www.saucedemo.com/')

        // login page element definition
        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@value="Login"]')

        
        // Dashboard page element definition
        const cartIcon = await browser.$("#shopping_cart_container")


        // login page step
        await usernameTextbox.waitForDisplayed({ timeout: 3000 })
        await usernameTextbox.setValue("visual_user")
        await passwordTextbox.setValue("secret_sauce")
        await loginButton.click()

        // dashboard page step
        await expect(cartIcon).toBeDisplayed()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  
    });
});
