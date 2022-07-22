Questionnaire : 

1. Afin d’indiquer à Angular que je souhaite faire des requêtes http dans mon application,
quel module dois-je impérativement importer dans le app.module.ts ?

Je dois importer : HttpClientModule dans la section "imports"


2. Que permet de faire cette ligne de code :
[class.red]="compteur < 0"

Elle permet de mettre le text en rouge une fois que le compteur est négatif.

3. Je viens de faire un « git clone » sur un projet Angular, je dois lancer une commande
afin de récupérer le dossier « node_modules », lequel ?

Commande à faire : npm install

4. Quelle est la différence entre let et const pour la déclaration de variables ?

Let permet la modification de la variable tandis que const est une constante ce qui ne permet pas de changer la valeur de celle-ci une fois définie.

5. Un component est constitué de 4 fichiers distinct, quels sont leur rôle respectif ?
Préciser leur extension de fichier à chaque fois (3 me suffisent)

Imaginons que je créais un component sous le nom de "Pokedex"
Un fichier va me créer 4 fichiers : 
- pokedex.component.html -> Il permet de visualiser la page créée
- pokedex.component.scss -> Il permet la mise au point visuelle de la page html (expliquée au dessus)
- pokedex.component.spec.ts -> Il permet de faire des tests unitaire des fichiers sources, il est ajouté normalement pour chaque fichier .ts, ils sont executé grâce au fichier "karma" (je suis pas trop sûr de la description ...)
- pokedex.component.ts -> Il permet d'avoir du TypeScript (javascript typé) dans la page html

6. Je suis dans la partie html d’un component, j’écris ce code :
<button (click)=’’superFonctionDeClic()’’></ button>
Que fait-il ?

Dès qu'une personne clique sur le bouton mit à disposition, une fonction va être appelée, ce qui va produire un résultat pour l'utilisateur.

7. Avec quelle commande créée-t-on un component ?

ng g c <nom du component>
ng generate component <nom du component>

8. Dans une classe, je peux préciser un indice de visibilité sur un attribut ou une méthode,
il en existe 3 lesquels ?

Private
public
protected

- Que font-ils ?
Le "private" permet de privé un attribut ou une méthode à la class même, si elle n'est pas déclaré dans le constructeur et qu'un "get" n'est pas attribué alors elle reste utilisable que dans la class.
Le "public" rend une méthode ou un attribu public, ce qui signifie que dans la class est instantié dans une autre class alors on peut prendre la méthode/attribu demandé(e)
Le "protected" est accessible dans la classe qui le définit