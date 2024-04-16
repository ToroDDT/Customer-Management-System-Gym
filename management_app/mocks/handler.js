import { rest, http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://api.example.com/account", () => {
    return HttpResponse.json({
      activeSubs: 10,
    });
  }),
];
