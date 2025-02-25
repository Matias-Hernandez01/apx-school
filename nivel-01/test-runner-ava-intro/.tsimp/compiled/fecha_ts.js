"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diasDesde = diasDesde;
function diasDesde(fecha) {
    const hoy = new Date();
    const fechaPasada = new Date(fecha);
    const diferencia = hoy.getTime() - fechaPasada.getTime();
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return `${dias} días`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVjaGEuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbWF0aWgvRG9jdW1lbnRzL1Byb2dyYW1hY2nDs24vYXB4LXNjaG9vbC9uaXZlbC0wMS90ZXN0LXJ1bm5lci1hdmEtaW50cm8vIiwic291cmNlcyI6WyJmZWNoYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhCQU1DO0FBTkQsU0FBZ0IsU0FBUyxDQUFDLEtBQUs7SUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN2QixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUM7QUFDeEIsQ0FBQyJ9