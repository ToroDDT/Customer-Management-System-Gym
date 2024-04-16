import { server } from "@/mocks/server";
import fetchActiveSubsAmount from "../fetchActiveSubs";
import { describe, expect, test, it } from "@jest/globals";

describe("fetchTodos lib function", () => {
  it("should return the correct amount of subs", async () => {
    const subsAmount = await fetchActiveSubsAmount();
    expect(subsAmount.activeSubs).toBe(10);
  });
});
