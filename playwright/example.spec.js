import { test, expect } from "@playwright/test";

test("has button", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("button", { title: "get note" })).toBeVisible();

  await expect(page).toHaveScreenshot("button.png");
});
