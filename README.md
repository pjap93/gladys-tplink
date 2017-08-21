# Gladys TP-LINK 

Lampes : LB110,LB120,LB130

Prise  : HS110

Développé sur Gladys version 3.6.1

## Installation du module

- Suivre les étapes pour la configuration décrites dans la notice d'installation de votre produit fourni par TP-LINK pour les associer à votre routeur wifi
- Installer le module dans Gladys à l'aide du menu avancé (Nom, Version, URL Git, et slug) 

Exemple : 
    Nom: TP-Link,
    Version: 0.1.2, 
    URL Git: https://github.com/pjap93/gladys-tplink, 
    Slug: tplink
    
-	Redémarrer Gladys

## Importer les produits

- Dans le menu Modules dans Gladys, lancer l'importation en cliquant sur Configurer du module TP-LINK précédemment installer.
- Une fois terminée, allé dans le menu Devices pour configurer vos nouveaux accessoires (pièce, tag et catégorie).
- Réaliser ensuite vos différents scénarios pour vos produits.

## Utilisation dans un script

- Pour la commande de la lampe (ex: LB130)
```javascript
var option = {
    'ip': '192.168.0.19',
    'port': '9999',
    'id': 'n° du devicetype',
    'on_off': 1,
    'hue': 237,
    'saturation': 93,
    'color_temp': 0,
    'brightness': 100,
    'transition_period': 0
};
 
gladys.modules.tplink.sendLB(option);
```

- Pour la commande de la prise (ex: HS110)
```javascript
var option = {
    'ip': '192.168.0.19',
    'port': '9999',
    'id': 'n° du devicetype',
    'on_off': 0,
};

gladys.modules.tplink.sendHS(option);
```
