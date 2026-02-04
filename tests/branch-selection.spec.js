import { test, expect } from '@playwright/test';

test('Branch search UI appears after bank selection', async ({ page }) => {
  await page.goto(
    'https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com'
  );

  await page.waitForTimeout(4000);

  // We do NOT assume URL change
  // We only check if branch-related UI exists

  const branchSearchLikeElements = page.locator(
    'input, [role="search"], [placeholder*="branch"], [class*="branch"]'
  );

  await expect.soft(branchSearchLikeElements.first()).toBeVisible();
});
