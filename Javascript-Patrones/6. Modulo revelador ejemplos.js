// Caso práctico módulo revelador
const SWAPI = (() => {
  const BASE_URL = 'https://swapi.dev/api/';

  return {
    getPeople: () => {
      fetch(`${BASE_URL}people/1/`)
        .then((data) => data.json())
        .then((json) => {
          console.log('PEOPLE');
          console.log(json);
        });
    },
    getPlanets: () => {
      fetch(`${BASE_URL}planets/1/`)
        .then((data) => data.json())
        .then((json) => {
          console.log('PLANETS');
          console.log(json);
        });
    },
  };
})();

SWAPI.getPeople();
SWAPI.getPlanets();
