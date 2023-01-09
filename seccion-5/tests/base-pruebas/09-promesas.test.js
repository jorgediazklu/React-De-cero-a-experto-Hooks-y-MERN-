import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("pruebas 09-promesas", () => {
  test("getHeroeByIdAsync", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      //Esto lo que hace es decirle a jest que se espere hasta que el codigo termine
      done();
    });
  });
  test("getHeroeByIdAsync error", (done) => {
    const id = 18888;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toEqual("No se pudo encontrar el héroe " + id);
      //Esto lo que hace es decirle a jest que se espere hasta que el codigo termine
      done();
    });
  });
});
