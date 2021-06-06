import React from 'react';
import puppeteer from 'puppeteer';

describe('End-To-End-Test', () => {
  let browser, page;
  beforeAll( async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  }, 30000);

  afterAll(() => {
    browser.close()
  });

  // All test below are ran on the first element which is valid through atomic design 
  test('An event element is collapsed by default', async () => {
    const allDetailsHidden = await page.$eval('.details', d => {
      return d.hasAttribute('hidden') ? true : false;
    });
    expect(allDetailsHidden).toBeTruthy();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.show-details');
    const oneDetailShown = await page.$eval('.details', d => {
      return !d.hasAttribute('hidden') ? true : false;
    });
    expect(oneDetailShown).toBeTruthy();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.show-details');
    const oneDetailShown = await page.$eval('.details', d => {
      return d.hasAttribute('hidden') ? true : false;
    });
    expect(oneDetailShown).toBeTruthy();
  });
});
