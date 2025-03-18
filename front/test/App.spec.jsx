import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  beforeAll(() => {
    globalThis.import.meta = { env: { VITE_API_URL: "http://localhost:3000" } };
  });

  it("タイトルが表示されること", () => {
    render(<App />);

    expect(screen.getByText("URL短縮サービス")).toBeInTheDocument();
  });
});
