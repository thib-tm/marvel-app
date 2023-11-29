[![Unit Tests](https://github.com/thib-tm/marvel-app/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/thib-tm/marvel-app/actions/workflows/unit-tests.yml)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=thib-tm_marvel-app&metric=coverage)](https://sonarcloud.io/summary/new_code?id=thib-tm_marvel-app)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=thib-tm_marvel-app&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=thib-tm_marvel-app)

# Marvel App

## Installation

Récupérer le projet en local et installer les dépendances

```
git clone url-du-projet
cd marvel-app
npm install
```

## Lancement

```
npm start
```

L'application est accessible à l'adresse http://localhost:3000

## Test

Execution des tests unitaires en mode watch, c'est à dire que les tests sont relancés à chaque modification de code.

```
npm test
```

Execution des tests uniquement une fois avec un rapport détaillé de la couverture

```
npm run test:coverage
```

## Conception

Les projet est composé de 4 pages :
-   Home (page d'acceuil) : Liste des personnages
-   Character : Page de détail d'un personnage
-   About : Page d'information sur l'application
-   Contact : Page de contact

```mermaid
graph LR
    A(Home) -- /about --> B(About) 
    A(Home) -- /contat --> B(Contact) 
    A(Home) -- /character/:id --> B((Character))
```
