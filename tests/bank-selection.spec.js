import { test, expect } from '@playwright/test';

test('Bank selection page shows a search component', async ({ page }) => {
  await page.goto(
    'https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com'
  );

  // Wait for page to render something meaningful
  await page.waitForTimeout(3000);

  // Look for ANY search-like element
  const searchLikeElements = page.locator(
    'input, [role="search"], [placeholder*="bank"], [class*="search"]'
  );

  // Soft assertion: we expect at least one search-related element
  await expect.soft(searchLikeElements.first()).toBeVisible();
});
