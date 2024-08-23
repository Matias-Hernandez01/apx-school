import { reverse } from 'lodash';

class Producto {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class ProductoElectrónico extends Producto {
  apps: string[] = [];
  useBatteries: boolean = false;
  constructor(name: string, price: number, useBatteries: boolean, apps: string[]) {
    super(name, price);
    this.useBatteries = useBatteries;
    this.apps = apps;
  }
  setUseBatteries(usa: boolean) {
    this.useBatteries = usa;
  }

  setApps(apps: string[]) {
    this.apps = apps;
  }

  getAppsReverse() {
    return reverse(this.apps);
  }
}

class ProductoAlimenticio extends Producto {
  fechaCaducidad: Date;
  constructor(name: string, price: number, fechaCaducidad) {
    super(name, price);
    this.fechaCaducidad = fechaCaducidad;
  }

  checkCaducidad(): boolean {
    const hoy = new Date();

    const fechaCaducidadString = this.fechaCaducidad.toString();
    const fechaCaduca = new Date(fechaCaducidadString);
    if (hoy > fechaCaduca) {
      return true;
    } else {
      return false;
    }
  }
}

function main() {
  // const producto1 = new Producto('Heladera', 400500);
  const productoElectronico = new ProductoElectrónico('Televisor', 300000, true, []);
  productoElectronico.setApps(['Canales gratis', 'Netflix', 'Amazon Prime', 'Disney', 'Futbol libre']);
  // console.log(productoElectronico.getAppsReverse());
  const fechaDeHarina = new Date('2024-06-27');
  const harina = new ProductoAlimenticio('Harina', 1500, '2024-06-27');
  console.log(harina.checkCaducidad());
}

main();
