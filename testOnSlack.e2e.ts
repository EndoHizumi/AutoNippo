import { Page } from 'puppeteer-core';
import loginToSlack from './loginToSlack';
const puppeteer = require('puppeteer-core');

let incognitoPage: Page;

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        dumpio: true,
        args: [
        '--incognito' /* ブラウザをシークレットモードで起動 */
        ]
    })
    incognitoPage = await browser.newPage();
    await incognitoPage.setExtraHTTPHeaders({
        'Accept-Language': 'en-US', // 言語を固定
    });

    await incognitoPage.setViewport({ width: 800, height: 600 });
    await incognitoPage.goto('https://app.slack.com/signin?slack_workspace_login_url');
    await loginToSlack('WORKSPACE_NAME', 'ACCOUNT_ID', 'ACCOUNT_PW', incognitoPage);
    await incognitoPage.screenshot({ path: './page.png' })
})