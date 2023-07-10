const puppeteer = require('puppeteer');

async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://manulife.service-now.com/");
    
    // await page.waitForSelector("#userNameInput")
    
    await page.evaluate(() => document.querySelector("#userNameInput").value = "username");
    await page.evaluate(() => document.querySelector("#passwordInput").value = "password");
    // await page.evaluate(() => document.querySelector("#submitButton").click());
    await page.click("span[id='submitButton']");
    
    await page.screenshot({ path: 'ss.png', fullPage: true });

    await browser.close();
}

run();