import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("prueba a <FirstApp/>", () => {
  const title = "title";

  test("match con snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test("mostar el title", () => {
    render(<FirstApp title={title} />);
    //  el screen es el html generado por el render
    //  not: negacion
    //  expect(screen.getByText(title)).not.toBeTruthy()
    expect(screen.getByText(title)).toBeTruthy();
  });
  test("mostar el title en h1", () => {
    render(<FirstApp title={title} />);
    //getByRole: obtiene las etiqutas html
    //heading: obtiene la etiqueta h1,h2,h3,h4,h5,h6
    //level: obtiene la primera etiqueta h1 que encuentre
    //innerHtml: lo que esta escrito
    //toContain: que contenga el title
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });
});
