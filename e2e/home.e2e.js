const { device, expect, element, by, waitFor } = require("detox");

describe("Home screen", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should scroll down list", async () => {
    await waitFor(element(by.text("Item 20")))
      .toBeVisible()
      .whileElement(by.id("flatlist"))
      .scroll(50, "down");
  });

  it("should filter by checked items", async () => {
    await element(by.id("switch_button")).tap();

    await expect(element(by.text("Item 6"))).toBeVisible();
    await expect(element(by.text("Item 1"))).not.toBeVisible();
  });
});
