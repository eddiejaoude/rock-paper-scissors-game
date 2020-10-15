import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { GlobalProvider } from "./context/globalContext";

test("renders learn react link", () => {
  const { getByText } = render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
  const testElement = getByText(/Rock Paper Scissor Game/i);
  expect(testElement).toBeInTheDocument();
});

it("should work", () => {
  const { getByTestId, getByText } = render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
  const Rock = getByTestId("rock");
  fireEvent.click(Rock);
  const computerChoice = getByText("Computer Choice");
  expect(computerChoice).toBeInTheDocument();
  const ok = getByTestId("ok");
  fireEvent.click(ok);
  const testElement = getByText(/Rock Paper Scissor Game/i);
  expect(testElement).toBeInTheDocument();
});
