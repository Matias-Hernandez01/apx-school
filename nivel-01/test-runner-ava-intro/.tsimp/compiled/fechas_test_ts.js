"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const fecha_1 = require("./fecha");
(0, ava_1.default)('diasDesde calcula correctamente la diferencia en días', t => {
    const hoy = new Date();
    const ayer = new Date(hoy);
    ayer.setDate(hoy.getDate() - 1);
    const resultado = (0, fecha_1.diasDesde)(ayer);
    t.is(resultado, "1 días");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVjaGFzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbWF0aWgvRG9jdW1lbnRzL1Byb2dyYW1hY2nDs24vYXB4LXNjaG9vbC9uaXZlbC0wMS90ZXN0LXJ1bm5lci1hdmEtaW50cm8vIiwic291cmNlcyI6WyJmZWNoYXMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUN2QixtQ0FBb0M7QUFFcEMsSUFBQSxhQUFJLEVBQUMsdURBQXVELEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDaEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN2QixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVoQyxNQUFNLFNBQVMsR0FBRyxJQUFBLGlCQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUMifQ==