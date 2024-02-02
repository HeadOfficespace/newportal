import puppeteer from 'puppeteer';
import fs from 'fs';
import fetch from 'node-fetch';
import url from 'url';
import path from 'path';

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const siteUrl = 'https://demo.tailadmin.com/task-list';
    await page.goto(siteUrl);
    await page.waitForSelector('body');
    
    const html = await page.content();
    
    // Cria um diretório com o nome da página
    const dirName = url.parse(siteUrl).pathname.split('/').pop();
    fs.mkdirSync(dirName, { recursive: true });
    
    fs.writeFile(path.join(dirName, `${dirName}.html`), html, (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log(`HTML saved to ${dirName}/${dirName}.html`);
        }
    });
    
    const stylesheets = await page.$$eval('link[rel="stylesheet"]', links => links.map(link => link.href));
    
    stylesheets.forEach(async (stylesheetUrl, i) => {
        const response = await fetch(stylesheetUrl); 
        const text = await response.text(); 
        fs.writeFileSync(path.join(dirName, `${dirName}${i}.css`), text); 
    });
    
    console.log("CSS files downloaded");
    
    browser.close();
}

run();
