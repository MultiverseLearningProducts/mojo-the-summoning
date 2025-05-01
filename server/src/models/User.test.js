const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User } = require(".");
const db = require("../db/config");

// clear db before tests
beforeAll(async () => {
  await db.sync({ force: true });
});

// close db after tests
afterAll(async () => {
  await db.close();
});

describe("User", () => {
  it("has an id", async () => {
    const user = await User.create({ username: "gandalf" });
    expect(user).toHaveProperty("id");
  });

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
});
