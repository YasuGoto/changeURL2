import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("タイトルが表示されること", () => {
    render(<App />);

    expect(screen.getByText("URL短縮サービス")).toBeInTheDocument();
  });
});
