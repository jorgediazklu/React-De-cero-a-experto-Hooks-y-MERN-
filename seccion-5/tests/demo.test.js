//describe: agrupar las pruebas
describe("Pruebas en <DemoComponet/>", () => {
  //test: hacer una prueba
  test("prueba1", () => {
    //inicialización
    const message1 = "Hola mundo";

    //2. estímulo
    //Elimina los espacios en blanco iniciales y finales de un string
    const message2 = message1.trim();

    //obserbar el comportamiento
    //expect:espera
    //toBe:que sea igual
    expect(message1).toBe(message2);
  });
});
