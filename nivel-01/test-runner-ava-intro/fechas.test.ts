import test from 'ava';
import { diasDesde } from './fecha';

test('diasDesde calcula correctamente la diferencia en días', t => {
  const hoy = new Date();
  const ayer = new Date(hoy);
  ayer.setDate(hoy.getDate() - 1);

  const resultado = diasDesde(ayer);
  t.is(resultado, "1 días");
});
