# Réponse aux questions MAILLET Thibault Théo

## Git 

-   Quel est l'intérêt de commiter régulièrement et de manière atomique ?

L'intérêt et de ne pas perdre son travail en cas d'erreur ou autre ce qui nous permet de revenir en arrière rapidement 

-   A quoi sert une branche de type feature dans un développement logiciel de type git flow ?

Une branche sert à créer une nouvelle version d'application avec des développements qui fonctionne ou pas sans perdre notre code de base

-   Quelle est la différence entre une branche main et une branche develop ?

La branche main est la branche principale elle doit toujours fonctionner et est très peu souvent mergée tandis que la branche developp est la branche de base pour effectuer nos développements

-   Quelle est la différence entre git add, git commit et git push ?

Git add permet d'ajouter dans un premier temps les fichiers modifiés dans une sorte de canal en attente d'être rééllement modifié sur github (staged changes)
Git commit permet d'ajouter rééllement les modifications de fichiers de notre git add
Enfin Git push permet d'envoyer vers github nos modification de fichiers

## github

-   Quel est l'intérêt d'une protection de branche ?

Protéger une branche permet d'avoir une action en plus lorsqu'on veut merger une branche vers une autre, cela peut nous éviter de faire des bétises.
Dans certains cas la protection peut fonctionner avec la validation d'une personne par exemple la personne doit valider le merge d'une branche avant qu'elle soit rééllement mergée

-   Quel est l'intérêt d'une pull request ?

Une pull request permet sur github de merger une branche vers une autre. C'est à dire par exemple de passer les infos de la branche developp sur la main afin qu'elles deviennent similaires 

## versionning

-   Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?

Lorsqu'on effectue des corrections de bugs ou des modifications mineures qui n'affectent pas la fonctionnalité globale de notre application.

-   Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?

Cela indique généralement qu'on a ajouté de nouvelles fonctionnalités qui n'affectent pas la compatibilité avec les versions précédentes de notre application

-   A quoi sert une version release candidate ?

C'est une version qui est fonctionnelle est prête à étre utilisée

## test

-   Quel est l'intérêt des tests unitaires ?

Leurs intérêts est de détecter de potentiels bugs, améliorer la qualité du code (nous indique lorsque des importations n'ont pas été utilisés...)...