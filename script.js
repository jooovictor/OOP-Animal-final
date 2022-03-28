import { Animal } from "./Classes/animal.js";
import { Papagaio } from "./Classes/papagaio.js";
import { Cachorro } from "./Classes/cachorro.js";
import { Gato } from "./Classes/gato.js";
import { Filo } from "./Classes/filo.js";

const papagaioFilo = new Filo ('Animalia', 'Chordata', 'Aves', 'Psitaciformes', 'Psittacidae', 'Amazona')
const cachorroFilo = new Filo ('Animalia', 'Chordata', 'Mammalia', 'Carnivora', 'Canidae', 'Canis')
const gatoFilo = new Filo ('Animalia', 'Chordata', 'Mammalia', 'Carnivora', ' Felidae', 'Felis')

const gato = new Gato('macho', false, true, 'preto', 'pelos', false, 'siames', gatoFilo);
const cao = new Cachorro('macho', false, true, 'caramelo', 'pelos', true, 'medio', 'comum', 'vira-lata', cachorroFilo)
const pagapaio = new Papagaio('macho', true, false, 'verde', 'penas', false, 'fino', papagaioFilo)

const chihuahua = new Cachorro('fêmea', false, true, 'marrom', 'pelos curtos', false, 'pequeno', 'curto', 'Chihuahua', cachorroFilo)

console.log(gato)
console.log(cao)
console.log(pagapaio)
console.log(chihuahua)

