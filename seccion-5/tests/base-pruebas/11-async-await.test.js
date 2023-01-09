import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("prueba de 11-async-await", () => {
  test("getImagen", async () => {
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe("string");
  });
});
