import { expect, test } from "@playwright/test";

test("homepage shows deploy-first hero and external CTA", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /deploy clawx in 1 minute/i }),
  ).toBeVisible();

  const primaryCta = page.getByTestId("hero-primary-cta");
  await expect(primaryCta).toBeVisible();
  await expect(primaryCta).toHaveAttribute("href", "https://www.easyclaw.pro");

  await expect(
    page.getByText(/run a local-first ai research assistant/i),
  ).toBeVisible();
});

test("interactive demo updates the summary when options change", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByTestId("source-option-research-brief").click();
  await page.getByTestId("cadence-option-daily-08-30-utc").click();
  await page.getByTestId("channel-option-slack").click();

  await expect(page.getByTestId("demo-summary-heading")).toHaveText(
    "Research brief",
  );
  await expect(page.getByTestId("demo-summary-body")).toContainText(
    "daily Slack brief",
  );
});

test("marketing and legal routes are reachable", async ({ page }) => {
  const routes = [
    { url: "/deploy", heading: /running clawx workspace in 1 minute/i },
    { url: "/install", heading: /prefer the desktop path/i },
    { url: "/privacy-policy", heading: /^privacy policy$/i },
    { url: "/terms-of-service", heading: /^terms of service$/i },
  ];

  for (const route of routes) {
    await page.goto(route.url);
    await expect(page.getByRole("heading", { name: route.heading })).toBeVisible();
  }
});
