import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/components/CounterApp";

describe("CounterApp.test", () => {
  const value = 100;

  test("<CounterApp/> match snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("<CounterApp/> match snapshot", () => {
    const { getByText } = render(<CounterApp value={value} />);
    expect(getByText(value).innerHTML).toEqual("100");
  });

  test("incrementar con el boton +1 ", () => {
    render(<CounterApp value={100} />);
    //fireEvent: ejecutar eventos
    fireEvent.click(screen.getByText("+1"));
    //espera que alla incrementado
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("incrementar con el boton -1 ", () => {
    render(<CounterApp value={100} />);
    //fireEvent: ejecutar eventos
    fireEvent.click(screen.getByText("-1"));
    //espera que alla incrementado
    expect(screen.getByText("99")).toBeTruthy();
  });
  test("resetear", () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("reset"));
    expect(screen.getByText(355)).toBeTruthy();
  });
});
