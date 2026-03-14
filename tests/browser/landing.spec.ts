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
  await expect(page.getByText(/ai command center already running/i)).toBeVisible();

  await expect(page).toHaveTitle(/clawx/i);
  await expect(page.locator("head meta[name='description']")).toHaveAttribute(
    "content",
    /clawx/i,
  );
  await expect(page.locator("head link[rel='canonical']")).toHaveAttribute(
    "href",
    /^https?:\/\/[^/]+\/?$/,
  );
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

test("robots and sitemap expose production SEO endpoints", async ({ page }) => {
  const robots = await page.request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  expect.soft(await robots.text()).toContain("/sitemap.xml");

  const sitemap = await page.request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  expect.soft(await sitemap.text()).toContain("/privacy-policy");
  expect.soft(await sitemap.text()).toContain("/terms-of-service");
});

test("mobile homepage keeps the command-center layout without horizontal overflow", async ({
  page,
}) => {
  test.skip(test.info().project.name !== "mobile", "mobile only");

  await page.goto("/");

  await expect(page.getByText(/ai command center already running/i)).toBeVisible();

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );

  expect(overflow).toBeLessThanOrEqual(1);
});
