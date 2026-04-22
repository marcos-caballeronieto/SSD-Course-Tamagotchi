import { test, expect } from '@playwright/test';

test.describe('Dev Menu QA Tools', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
    
    // Start the game initially
    const input = page.getByPlaceholder('Name your pet...');
    const submitBtn = page.getByRole('button', { name: 'Start Journey' });
    
    // Sometimes local storage persists between clean states in dev, let's make sure we reset if needed
    if (await input.isVisible()) {
      await input.fill('Debugger');
      await submitBtn.click();
    }
  });

  test('can open dev menu and manipulate time to trigger evolution', async ({ page }) => {
    // Open Dev Menu
    await page.keyboard.press('Shift+D');
    
    const devMenu = page.getByTestId('dev-menu');
    await expect(devMenu).toBeVisible();

    // Verify it starts as baby
    await expect(page.locator('.badge').filter({ hasText: /^Baby$/ })).toBeVisible();

    // Fast forward 10 minutes
    await page.getByRole('button', { name: '+10m (Adult)' }).click();

    // Verify it changes to Adult
    await expect(page.locator('.badge').filter({ hasText: /^Adult$/ })).toBeVisible();
  });

  test('can toggle sick status manually', async ({ page }) => {
    await page.keyboard.press('Shift+D');
    
    const normalBadge = page.locator('.badge').filter({ hasText: /^Normal$/ });
    await expect(normalBadge).toBeVisible();

    // Toggle Sick
    await page.getByRole('button', { name: /Toggle Sick/ }).click();

    // Verify status changed to sick
    const sickBadge = page.locator('.badge').filter({ hasText: /^Sick$/ });
    await expect(sickBadge).toBeVisible();
  });

  test('global reset returns user to naming screen', async ({ page }) => {
    await page.keyboard.press('Shift+D');
    
    // Click Global Reset
    await page.getByRole('button', { name: 'Global Reset' }).click();

    // Verify Naming Screen is back
    const input = page.getByPlaceholder('Name your pet...');
    await expect(input).toBeVisible();
  });
});
