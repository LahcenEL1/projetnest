# Projet de Gestion de Tâches avec NestJS et JWT

Ce projet est une application simple de gestion de tâches construite avec le framework NestJS. Il fournit une API REST pour la création, la récupération, la mise à jour et la suppression de tâches. L'authentification est gérée via JWT (JSON Web Tokens), garantissant que seules les requêtes authentifiées peuvent accéder aux endpoints sécurisés.

## Fonctionnalités

- **CRUD de Tâches** : Créer, lire, mettre à jour, et supprimer des tâches.
- **Authentification JWT** : Accès sécurisé aux endpoints via tokens JWT.
- **Documentation API avec Swagger** : Interface utilisateur Swagger pour tester et documenter l'API.

## Technologies Utilisées

- [NestJS](https://nestjs.com/) : Framework Node.js pour la construction d'applications server-side efficaces et fiables.
- [Passport](http://www.passportjs.org/) : Middleware d'authentification pour Node.js.
- [JWT](https://jwt.io/) : Standard ouvert pour la création de tokens d'accès qui permettent la propagation d'identité et de privilèges.
- [Swagger](https://swagger.io/) : Outil de documentation d'APIs.

## Prérequis

- Node.js (version 12 ou plus récente)
- npm ou yarn

## Installation

1. **Cloner le dépôt :**

```bash
git clone 
cd projet-gestion-taches
npm install 
npm run start:dev

/api pour avoir access au swagger
