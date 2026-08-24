import { expect, test } from "@playwright/test";

test("shows the welcome page and authentication journey", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Welcome Authentication App");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Learn authentication one step at a time",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { level: 2, name: "Sign up" }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { level: 2, name: "Log in" }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { level: 2, name: "Log out" }),
  ).toBeVisible();

  await expect(
    page.getByText(
      "Application foundation in progress — authentication comes next.",
    ),
  ).toBeVisible();
});