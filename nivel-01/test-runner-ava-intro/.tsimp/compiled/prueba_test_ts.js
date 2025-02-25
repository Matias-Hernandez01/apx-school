"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
//Ejemplo 1: Verificar la igualdad
(0, ava_1.default)("Dos más dos es igual a cuatro", (t) => {
    t.is(2 + 2, 4); // Este test pasa porque 2 + 2 es 4
});
//Ejemplo 2: Verificar verdadero o falso.
(0, ava_1.default)("Verdadero es verdadero", (t) => {
    t.true(true); // Este test pasa porque verdadero es verdadero
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJ1ZWJhLnRlc3QuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbWF0aWgvRG9jdW1lbnRzL1Byb2dyYW1hY2nDs24vYXB4LXNjaG9vbC9uaXZlbC0wMS90ZXN0LXJ1bm5lci1hdmEtaW50cm8vIiwic291cmNlcyI6WyJwcnVlYmEudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUFzQjtBQUV0QixrQ0FBa0M7QUFDbEMsSUFBQSxhQUFJLEVBQUMsK0JBQStCLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLG1DQUFtQztBQUU1RixDQUFDLENBQUUsQ0FBQTtBQUVILHlDQUF5QztBQUV6QyxJQUFBLGFBQUksRUFBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFO0lBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFBLCtDQUErQztBQUNqRyxDQUFDLENBQUMsQ0FBQSJ9