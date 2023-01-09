import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("pruebas en 07-deses-arr", () => {
  test("retornaArreglo", () => {
    const [letters, numbers] = retornaArreglo();

    // expect(letters).toBe("ABC");
    // expect(numbers).toBe(123);
    //expect.any(String): espera cualquier tipo de string
    expect(letters).toEqual(expect.any(String));
  });
});
