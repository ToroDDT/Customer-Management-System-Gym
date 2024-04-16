import "@testing-library/jest-dom";
import "whatwg-fetch";
import { beforeAll, afterEach, afterAll } from "@jest/globals";
import { server } from "./mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
