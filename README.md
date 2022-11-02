# LE PROJET GIZ-GUIDE : DE LA JOURNE GERMANO-CAMEROUNAISE

Le projet Giz-guide est une plate-forme de présentation intéractive des activités autour de la journée germano-camerounaise. Il a pour objectif de présenter une interface interactive et fonctionnelle adaptée aux écrans de téléphone mobile(responsive) permettant de présenter :
- l'agenda de la journée
- Les points d'intérêt sur le site (Musée national du Cameroun), les pôles prioritaires de la coopération et autres informations pratiques pour les participants  Contacts, dossiers de presse, Photos avec légende de projet par pôle prioritaire,...
- Le contenu (texte, image, chronograme de la journée, infos médias)

## Pour Commencer

### Pré-requis et Développement local
Les développeurs qui utilisent ce projet doivent déjà avoir React, et node installés sur leurs machines locales.

### Configuration du backend(server-giz-guide)

Depuis le dossier server-giz-guide, exécutez `npm install `. Toutes les dépendences requises inclus dans le fichier package.json seront installées. il s'agir principacelement : 
- `express` : pour créer notre serveur web
- `nodemon` : pour relancer automatique notre app après une miseà jour en mode développement
- `sequelize` et `sequelize-cli` qui est un ORM mysql facilitant les requêtes et les migrations
- `mysql2` : pour pemettre l'interaction entre mysql et Node.js
- `cors`: pour autoriser l'échange des données entres deux entités (backend et frontend)

Avant de lancer l'application backend, assurrez-vous d'avoir :
1. Un utlisateur mysql avec les droits de création d'une base de données
2. Creer une base de donnée mysql nommée : `giz_guide`
3. Allez dans le dossier `config` et ouvrez le fichier `config.json`, puis remplacer les paramètres de connexion à mysql par ceux créer plus haut.

Pour lancer l'application, exécutez la commande : 
```
npm start
```

Ces commandes demarre notre server tout en créant les models définis dans notre dossier `models`.

L'application est exécutée sur `http://127.0.0.1:5000/` par défaut et est un proxy dans la configuration du frontend. 

### Configuration du Frontend (client-giz-guide)

Depuis le dossier client-giz-guide, exécutez les commandes suivantes pour démarrer le client : 
```
npm install // une seule fois pour installer les dépendances
npm start 
```

Par défaut, le frontend sera exécuté sur localhost:3000.


## Référence API

### Pour Commencer
- URL de base : Actuellement, cette application ne peut être exécutée que localement et n'est pas hébergée en tant qu'URL de base. L'application backend est hébergée à l'adresse par défaut, `http://127.0.0.1:5000/`, qui est définie comme un proxy dans la configuration du frontend. 
- Authentification : Cette version de l'application ne nécessite pas d'authentification ou de clés API. 

### Gestion des erreurs
Les erreurs sont renvoyées sous forme d'objets JSON au format suivant :
```
{
    "success" : False, 
    "error" : 404,
    "message" : "resource not found"
}
```
L'API renvoie deux types d'erreur lorsque les demandes échouent :
- 404 : resource not found
- 422 : unprocessable

### Points de Terminaisons  et Comportements

#### GET /journee

`GET '/journee'`

- Général :
    - Renvoie un objet avec une seule clé, « journees », qui contient un objet ....
    - Récupère un dictionnaire de journee dans lequel les clés sont les ID, et la valeur est la chaîne correspondante de la journée
    - Arguments de la requête : aucun
- Exemple : `curl http://127.0.0.1:5000/journee`

```json 
{

}
```

---
### GET /journee/${id}/evenements

`GET '/journee/${id}/evenements'`


## Deployment N/A
### Git
le nom de la brache git par défaut est : `initiale`

## Authors
CHEDJOU SOFFO Rocelin & KONGNE FAH Eric

## Acknowledgements 
L'équipe formidable de la GIZ.