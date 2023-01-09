import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("pruebas en 08-imp-exp", () => {
  test("getHeroeById", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById undefined", () => {
    const id = 100;
    const hero = getHeroeById(id);
    //toBeFalsy: retorne null | undefined | false
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner DC", () => {
    const owner = "DC";
    const hero = getHeroesByOwner(owner);
    expect(hero.length).toBe(3);
    expect(hero).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    //esta es mejor porque si en algun momentos esta constante es cambiada lanza el error
    /*
        expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner));
     */
  });
  test("getHeroesByOwner Marvel", () => {
    const owner = "Marvel";
    const hero = getHeroesByOwner(owner);

    expect(hero.length).toBe(2);
  });
});
