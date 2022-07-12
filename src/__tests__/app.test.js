import App from "../App";
import GetSection from "../components/GetSection/view";
import PostSection from "../components/PostSection/view";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

test("render user testing", () => {
  const testText = "hello";
  render(<PostSection />);

  const input = screen.getByTestId("Title");
  expect(input).toBeInTheDocument();

  userEvent.type(input, testText);

  const textElement = screen.getByDisplayValue(testText);
  expect(textElement).toBeInTheDocument();
});

test("render data", async () => {
  render(<GetSection />);
  const click = screen.getByRole("button", { name: /get all/i });
  expect(click).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: /get all/i }));

  expect(screen.getByTestId('pre-test')).toBeInTheDocument();


});

test("render text", async () => {
  render(<App />);

  const linkElement = screen.getByText("React Axios GET");
  expect(linkElement).toBeInTheDocument();

  const linkElement1 = screen.getByText("React Axios POST");
  expect(linkElement1).toBeInTheDocument();
});
