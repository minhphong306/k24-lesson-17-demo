import { test, expect } from '@playwright/test';

test('Home page - expect title display', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole("heading", { name: "E-commerce site testing"})).toBeVisible();
});

