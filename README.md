# Gladys TP-LINK 

Lampes : LB110,LB120,LB130

Prise  : HS110

Développé sur Gladys version 3.6.1

## Installation du module

- Suivre les étapes pour la configuration décrites dans la notice d'installation de votre produit fourni par TP-LINK pour les associer à votre routeur wifi
- Installer le module dans Gladys à l'aide du menu avancé (Nom, Version, URL Git, et slug) 

Exemple : 

    Nom: TP-Link
	
    Version: 0.1.5
	
    URL Git: https://github.com/pjap93/gladys-tplink
	
    Slug: tplink
    
-	Redémarrer Gladys

## Importer les produits

- Attention dans cette phase les produits doivents être tous sous tension avant de lancer la suite des étapes

- Dans le menu Modules dans Gladys, lancer l'importation en cliquant sur Configurer du module TP-LINK précédemment installer.
- Une fois terminée, allé dans le menu Devices pour configurer vos nouveaux accessoires (pièce, tag et catégorie).
- Réaliser ensuite vos différents scénarios pour vos produits.

-> Possibilité de pouvoir commander chaque paramètre (intensité, couleur, on/off) par l'interface des Devices.
-> Possibilité de pouvoir les piloter par un scénario.

## Utilisation dans un script

- Pour la commande de la lampe (ex: LB130)
```javascript
var option = {
    'id': 'n° du device',
    'on_off': 1,                 //variable obligatoire 0 ou 1
    'hue': 237,                  //valeur optionnel
    'saturation': 93,            //valeur optionnel
    'color_temp': 0,             //valeur optionnel
    'color': 'blue',             //valeur prioritaire sur les variables 'hue' et 'saturation' (uniquement pour les LB130)
    'brightness': 100,           //valeur de l'intensité de la lumière
    'transition_period': 0
};
 
gladys.modules.tplink.sendLB(option);
```

- Liste pour la variable 'color' avec les paramètres déjà définis
```
	blue,
	cyan,
	magenta,
	white,
	red,
	lime,
	yellow
```

- Pour la commande de la prise (ex: HS110)
```javascript
var option = {
    'id': 'n° du device',
    'on_off': 0,
};

gladys.modules.tplink.sendHS(option);
```
