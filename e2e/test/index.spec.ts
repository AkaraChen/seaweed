import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:8131/');
    const button = page.getByRole('button', { name: 'Hello' });
    await button.click();
    await button.click();
    await expect(button).toBeFocused();
});
