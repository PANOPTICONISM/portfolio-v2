import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";

test("render app", () => {
  render(<App />);
  const AppElement = screen.getAllByTestId("todo-1");
  expect(AppElement).toBeInTheDocument();
});
