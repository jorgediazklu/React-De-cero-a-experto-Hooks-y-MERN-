import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    //toStrictEqual - toEqual:se usa para comarar valores no primitivos como los objetos
    expect(testUser).toStrictEqual(user);
  });
  test("getUsuarioActivo", () => {
    const name = "Jorge";

    const userActive = {
      uid: "ABC567",
      username: name,
    };

    const testGetUsuarioActivo = getUsuarioActivo(name);

    expect(testGetUsuarioActivo).toEqual(userActive);
    //otra manera:
    /*
    expect(testGetUsuarioActivo).toEqual({
        {
            uid: "ABC567",
            username: name,
        };
    });
    */
  });
});
