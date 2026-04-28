import { expect, test } from "@playwright/test";

// Golden-path test for the headline visitor journey from the site-exhibition specs.
// This test must remain in the suite as a durable spec contract.
test("headline journey: hero entry -> opening gallery -> chronology room -> companion proof room", async ({ page }) => {
  await page.goto("/index.html");

  await expect(page).toHaveTitle(/Welcome to The Comic Book Museum/i);
  await expect(
    page.getByRole("heading", { name: /The Comic Book Museum/i })
  ).toBeVisible();
  await expect(
    page.getByText(/For people curious about Marvel as history/i)
  ).toBeVisible();
  await expect(
    page.getByText(/Understand how Marvel became a connected universe and cultural force/i)
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /Begin the exhibition/i })).toHaveCount(1);

  await page.getByRole("link", { name: /Begin the exhibition/i }).click();

  await expect(page).toHaveURL(/\/home\.html$/);
  await expect(
    page.getByRole("heading", { name: /Marvel Comic Book Museum/i, level: 1 })
  ).toBeVisible();
  await expect(
    page.locator(".home-opening__copy .copy")
  ).toBeVisible();
  await expect(
    page.locator(".home-opening__copy .copy")
  ).toContainText(/Whether you're new to Marvel or curious about its history as\s+cultural system/i);
  await expect(
    page.getByRole("link", { name: /Entry Hero/i })
  ).toBeVisible();

  await page.getByRole("link", { name: /Golden Age/i }).first().click();

  await expect(page).toHaveURL(/\/eras\/golden-age\.html$/);
  await expect(
    page.getByRole("heading", { name: /Golden Age Origins/i, level: 1 })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /Entry Hero/i })).toBeVisible();

  await page.getByRole("link", { name: /Publication lineage/i }).first().click();

  await expect(page).toHaveURL(/\/reading-maps\/publication-lineage\.html$/);
  await expect(
    page.getByRole("heading", { name: /Key issues and release moments/i, level: 1 })
  ).toBeVisible();
  await expect(page.getByText(/proof object/i).first()).toBeVisible();

  await page.getByRole("link", { name: /Entry Hero/i }).click();

  await expect(page).toHaveURL(/\/index\.html$/);
  await expect(
    page.getByRole("heading", { name: /The Comic Book Museum/i })
  ).toBeVisible();
});
