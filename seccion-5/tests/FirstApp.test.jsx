import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("prueba a <FirstApp/>", () => {
  test("match snapshot", () => {
    const title = "titulo";
    const { container } = render(<FirstApp title={title} />);

    //lo que hace es crear el codigo html directamente en una carpeta llamada __snapshot__
    expect(container).toMatchSnapshot();
  });
  test("match h1", () => {
    const title = "titulo";
    const { container } = render(<FirstApp title={title} />);
    const h1 = container.querySelector("h1");
    //toContain: esto es para saber si esta el titulo y tabien que no de error si hay un espacio entre el inicio o el final de la etiqueta
    expect(h1).toContain(title);
  });
  test("match text", () => {
    const title = "titulo";
    const { container, getByText } = render(<FirstApp title={title} />);

    //getByText: que busque el text que se le pasa como parametro
    //toBeTruthy: que exsista o que si se renderize
    expect(getByText(title)).toBeTruthy();
  });
});
