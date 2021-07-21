import { loginSelectors } from './selectors';
import { Page } from 'puppeteer-core';

export default async function loginToSlack(workSpaceName: string, id: string, pw: string, page: Page) {
  await page.waitForSelector(loginSelectors.CONTINUE_BUTTON_SELECTOR); // continueボタンがロードされるまで待つ
  await page.type(loginSelectors.WORKSPACE_INPUT_SELECTOR, workSpaceName); // ワークスペース名をテキストボックスに入力
  await page.click(loginSelectors.CONTINUE_BUTTON_SELECTOR); // Continueボタンをクリック

  await page.waitForSelector(loginSelectors.EMAIL_INPUT_SELECTOR);  // emailのテキストボックスのロードを待つ
  await page.type(loginSelectors.EMAIL_INPUT_SELECTOR, id); // emailの入力
  await page.type(loginSelectors.PASSWORD_INPUT_SELECTOR, pw); // passwordの入力
  await page.click(loginSelectors.SIGNIN_BUTTON_SELECTOR); // sign inボタンをクリック
  await page.waitFor(7000); // ログイン完了まで適当な時間待つ　時間は適時調整する
}
