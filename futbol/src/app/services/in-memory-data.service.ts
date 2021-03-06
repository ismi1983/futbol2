//Simulate Data Base on the simulated server

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb () {
    const table = [
    {
        "id": 1,
        "name": "America",
        "location": "CDMX",
        "stadium": "Estadio Azteca",
        "logo": "america.png",
        "games_played": 1,
        "games_won": 4,
        "games_tied": 3,
        "games_lost": 1,
        "goals_in_favor": 11,
        "goals_against": 8,
        "goal_difference": 3,
        "points": 15,
        "position": 3
    },
    {
        "id": 3,
        "name": "Atlas",
        "location": "Guadalajara",
        "stadium": "Estadio Jalisco",
        "logo": "atlas.png",
        "games_played": 6,
        "games_won": 4,
        "games_tied": 2,
        "games_lost": 1,
        "goals_in_favor": 15,
        "goals_against": 9,
        "goal_difference": 6,
        "points": 11,
        "position": 4
    },
    {
        "id": 4,
        "name": "Atletico San Luis",
        "location": "San Luis Potosi",
        "stadium": "Estadio Alfonso Lastras",
        "logo": "sanluis.png",
        "games_played": 6,
        "games_won": 2,
        "games_tied": 2,
        "games_lost": 2,
        "goals_in_favor": 5,
        "goals_against": 8,
        "goal_difference": -3,
        "points": 8,
        "position": 13
    },
    {
        "id": 5,
        "name": "Cruz Azul",
        "location": "CDMX",
        "stadium": "Estadio Azteca",
        "logo": "cruzazul.png",
        "games_played": 7,
        "games_won": 2,
        "games_tied": 3,
        "games_lost": 2,
        "goals_in_favor": 9,
        "goals_against": 9,
        "goal_difference": 0,
        "points": 9,
        "position": 11
    },
    {
        "id": 6,
        "name": "Guadalajara",
        "location": "Guadalajara",
        "stadium": "Estadio Akron",
        "logo": "guadalajara.png",
        "games_played": 6,
        "games_won": 2,
        "games_tied": 1,
        "games_lost": 3,
        "goals_in_favor": 10,
        "goals_against": 10,
        "goal_difference": 0,
        "points": 7,
        "position": 14
    },
    {
        "id": 7,
        "name": "Juarez",
        "location": "Ciudad Juarez",
        "stadium": "Estadio Olimpico Benito Juarez",
        "logo": "juarez.png",
        "games_played": 5,
        "games_won": 1,
        "games_tied": 0,
        "games_lost": 4,
        "goals_in_favor": 2,
        "goals_against": 8,
        "goal_difference": -6,
        "points": 3,
        "position": 17
    },
    {
        "id": 8,
        "name": "Leon",
        "location": "Leon",
        "stadium": "Estadio Leon",
        "logo": "leon.png",
        "games_played": 6,
        "games_won": 3,
        "games_tied": 1,
        "games_lost": 3,
        "goals_in_favor": 10,
        "goals_against": 10,
        "goal_difference": 0,
        "points": 7,
        "position": 6
    },
    {
        "id": 9,
        "name": "Monterrey",
        "location": "Monterrey",
        "stadium": "Estadio BBVA",
        "logo": "monterrey.png",
        "games_played": 6,
        "games_won": 3,
        "games_tied": 0,
        "games_lost": 3,
        "goals_in_favor": 9,
        "goals_against": 9,
        "goal_difference": 0,
        "points": 9,
        "position": 10
    },
    {
        "id": 10,
        "name": "Morelia",
        "location": "Morelia",
        "stadium": "Estadio Morelos",
        "logo": "morelia.png",
        "games_played": 8,
        "games_won": 3,
        "games_tied": 1,
        "games_lost": 4,
        "goals_in_favor": 8,
        "goals_against": 9,
        "goal_difference": -1,
        "points": 7,
        "position": 10
    },
    {
        "id": 11,
        "name": "Necaxa",
        "location": "Aguascalientes",
        "stadium": "Estadio Victoria",
        "logo": "necaxa.png",
        "games_played": 7,
        "games_won": 3,
        "games_tied": 2,
        "games_lost": 2,
        "goals_in_favor": 14,
        "goals_against": 7,
        "goal_difference": 7,
        "points": 11,
        "position": 5
    },
    {
        "id": 12,
        "name": "Pachuca",
        "location": "Pachuca",
        "stadium": "Estadio Hidalgo",
        "logo": "pachuca.png",
        "games_played": 7,
        "games_won": 2,
        "games_tied": 2,
        "games_lost": 3,
        "goals_in_favor": 14,
        "goals_against": 12,
        "goal_difference": 2,
        "points": 8,
        "position": 12
    },
    {
        "id": 13,
        "name": "Puebla",
        "location": "Puebla",
        "stadium": "Estadio Cuauhtemoc",
        "logo": "puebla.png",
        "games_played": 5,
        "games_won": 0,
        "games_tied": 2,
        "games_lost": 3,
        "goals_in_favor": 4,
        "goals_against": 12,
        "goal_difference": -8,
        "points": 2,
        "position": 18
    },
    {
        "id": 14,
        "name": "Queretaro",
        "location": "Queretaro",
        "stadium": "Estadio Corregidora",
        "logo": "queretaro.png",
        "games_played": 8,
        "games_won": 5,
        "games_tied": 3,
        "games_lost": 1,
        "goals_in_favor": 11,
        "goals_against": 8,
        "goal_difference": 3,
        "points": 15,
        "position": 1
    },
    {
        "id": 15,
        "name": "Santos Laguna",
        "location": "Torreon",
        "stadium": "Estadio Modelo",
        "logo": "santos.png",
        "games_played": 7,
        "games_won": 5,
        "games_tied": 1,
        "games_lost": 1,
        "goals_in_favor": 15,
        "goals_against": 8,
        "goal_difference": 7,
        "points": 16,
        "position": 2
    },
    {
        "id": 16,
        "name": "Tijuana",
        "location": "Tijuana",
        "stadium": "Estadio Caliente",
        "logo": "tijuana.png",
        "games_played": 6,
        "games_won": 3,
        "games_tied": 1,
        "games_lost": 2,
        "goals_in_favor": 9,
        "goals_against": 9,
        "goal_difference": 0,
        "points": 10,
        "position": 7
    },
    {
        "id": 17,
        "name": "Toluca",
        "location": "Toluca",
        "stadium": "Estadio Nemesio Diez",
        "logo": "toluca.png",
        "games_played": 7,
        "games_won": 1,
        "games_tied": 2,
        "games_lost": 4,
        "goals_in_favor": 4,
        "goals_against": 9,
        "goal_difference": -5,
        "points": 5,
        "position": 16
    },
    {
        "id": 18,
        "name": "UANL",
        "location": "CDMX",
        "stadium": "Estadio Universitario",
        "logo": "uanl.png",
        "games_played": 7,
        "games_won": 3,
        "games_tied": 3,
        "games_lost": 1,
        "goals_in_favor": 11,
        "goals_against": 8,
        "goal_difference": 3,
        "points": 12,
        "position": 4
    },
    {
        "id": 19,
        "name": "UNAM",
        "location": "CDMX",
        "stadium": "Estadio Olimpico Universitario",
        "logo": "unam.png",
        "games_played": 6,
        "games_won": 3,
        "games_tied": 0,
        "games_lost": 3,
        "goals_in_favor": 6,
        "goals_against": 4,
        "goal_difference": 2,
        "points": 9,
        "position": 9
    },
    {
        "id": 20,
        "name": "Veracruz",
        "location": "Veracruz",
        "stadium": "Estadio Luis Pirata Fuente",
        "logo": "veracruz.png",
        "games_played": 6,
        "games_won": 0,
        "games_tied": 0,
        "games_lost": 3,
        "goals_in_favor": 6,
        "goals_against": 4,
        "goal_difference": 2,
        "points": 9,
        "position": 19
    }
];
return { table };
  }

  constructor() { }

}
