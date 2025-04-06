import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

beforeAll(() => {
  globalThis.import = {
    meta: { env: { VITE_API_URL: "http://localhost:3000" } },
  };
});

describe("App", () => {
  it("タイトルが表示されること", () => {
    render(<App />);
    expect(screen.getByText("URL短縮サービス")).toBeInTheDocument();
  });
});
