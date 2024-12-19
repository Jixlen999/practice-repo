import { test, expect } from "@playwright/test";

test("has button", async ({ page }) => {
  await page.goto("/");

  const button = await page.getByRole("button", { title: "get note" });

  await expect(button).toBeVisible();

  await button.click();

  await expect(page.getByText("First Note")).toBeVisible();
  await expect(page.getByText("Second Note")).toBeVisible();
});
