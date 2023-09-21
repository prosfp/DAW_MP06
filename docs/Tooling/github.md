# Repositoris, Git i Github

## Què és un Repositori?

En el món de la programació i el desenvolupament de programari, un **repositori** és un emmagatzematge o lloc on es guarda tot el codi font, els arxius i els recursos d'un projecte. Els repositoris serveixen per dur el seguiment de les versions del codi, col·laborar amb altres desenvolupadors i gestionar els canvis de manera eficient.

## Git: El Sistema de Control de Versions

**Git** és un sistema de control de versions distribuït que permet als desenvolupadors gestionar el seguiment de canvis en els seus projectes de programació. Amb Git, pots:

- Registrar canvis en el codi i mantenir una història completa de modificacions.
- Col·laborar amb altres desenvolupadors de manera eficient.
- Crear branques per a desenvolupar noves funcionalitats o solucionar problemes sense afectar el codi principal.
- Realitzar seguiment dels canvis i resoldre conflictes de manera senzilla.

## Diferències entre Git i GitHub

### Git

- **Sistema de Control de Versions (SCV)**: Git és un SCV de codi obert dissenyat per gestionar el seguiment de canvis en el codi font i la col·laboració entre desenvolupadors.

- **Local**: Git es pot utilitzar localment en el teu ordinador sense necessitat de connexió a Internet. Això et permet gestionar els canvis i historial del teu projecte de forma independent.

- **Comandes de Terminal**: Utilitza comandes de terminal per a tasques com `git init` (iniciar un repositori), `git commit` (guardar canvis), i `git push` (enviar canvis a un repositori remot).

- **Branching i Merging**: Permet crear branques (branches) per a desenvolupar funcionalitats de forma aïllada i mesclar (merge) els canvis quan estiguin llestos.

### GitHub

- **Plataforma en Línia**: GitHub és una plataforma web que utilitza Git com a sistema de control de versions. Proporciona una interfície en línia per gestionar els teus repositoris Git.

- **Repositoris Remots**: GitHub és un lloc on pots emmagatzemar els teus repositoris Git de forma remota a la núvol. Això permet la col·laboració en projectes amb altres desenvolupadors.

- **Gestió de Tasques**: GitHub inclou funcionalitats com les "issues" (problemes) i "pull requests" (sol·licituds de tirar) per gestionar tasques, seguiment de bugs i col·laboració.

- **Desplegament i Integració Continua**: Ofereix eines com GitHub Actions per a la integració contínua i desplegament automatitzat (CI/CD) dels teus projectes.

- **Col·laboració Social**: Pots seguir altres desenvolupadors, col·laborar en projectes de codi obert i rebre notificacions sobre canvis en repositoris que et segueixes.

- **Visibilitat Pública i Privada**: GitHub permet tenir repositoris públics (visibles per a tothom) i privats (només accessibles als col·laboradors autoritzats).

Amb aquesta descripció, els usuaris podran entendre millor les diferències entre Git i GitHub i com funcionen junts en el món del desenvolupament de programari.

## Github Classroom

### Actualitzar repositori personal (alumne) amb canvis d'un repositori remot (profe)

Aquesta guia explica com els alumnes poden actualitzar els seus repositoris personals (Repo Alumne) amb les noves carpetes i exercicis afegits al repositori original del professor (Repo Profe). En cas per exemple que s'afegeixin exercicis, aquests apareixeran directament sobre el mateix repositori en el que estàs treballant.

1.  **Clonar el Repositori Personal (Repo Alumne):**

    Si has acceptat "l'assginment" a través de l'enllaç del professor, això és fa automàticament. Hauràs clonat el repositori al teu compte de Github. Pots clonar-lo per treballar en local amb VSCode. Pots fer servir la propia IDE de VSCode o utilitzar aquesta comanda per fer-ho:

    ```bash
    git clone <URL_del_repo_alumne>
    ```

2.  **Afegir el Repositori del Professor com a Remot:**

    Afegir el repositori original del professor (Repo Profe) com a remot permet obtenir els canvis del repositori remot, en aquest cas per exemple del professor. Utilitza aquesta comanda per afegir el remot:

    ```bash
    git remote add profe <URL_del_repo_profe>
    ```

3.  **Obtenir els Canvis del Repositori del Professor:**

    Per obtenir els canvis del repositori del professor, els alumnes han de fer un "fetch" de la branca que desitgin (normalment, "main" on s'afegeixen nous exercicis). Utilitza aquesta comanda

    ```bash
    git fetch profe main
    ```

    Aquí hem anomenat aquesta branca remota "profe" però tu pots decidir com dir-li.

4.  **Revisar els Canvis Abans del Merge:**

    Abans de fusionar els canvis del professor amb el seu repositori personal, és recomanable revisar-los. Utilitza aquesta comanda per veure les diferències entre les branques:

    ```bash
    git diff main..profe/main
    ```

    Això mostra les diferències entre les dues branques i permet als alumnes veure els canvis abans de prendre una decisió.

5.  **Fer el Merge Utilitzant `--allow-unrelated-histories`:**

    Un cop hagis revisat els canvis i estiguis satisfet amb ells, pots fer el merge utilitzant l'opció `--allow-unrelated-histories`. Aquesta opció permet la fusió de dues històries que es consideren "sense relació" i és necessària quan afegim nous continguts al repositori del professor. Utilitza aquesta comanda:

    ```bash
    git merge --allow-unrelated-histories profe/main
    ```

    El motiu d'utilitzar aquesta opció és que els canvis es consideren sense relació ja que la branca del professor i la branca personal dels alumnes no han compartit canvis en el passat.

6.  **Confirmar els Canvis Locals\*\*:**

    Després de fer el merge, podràs confirmar els canvis locals:

    ```bash
    git commit -am "Actualització des de la branca del professor"
    ```

7.  **Enviar els Canvis al Repositori Personal Remot:**

    Finalment, pots enviar els canvis al repositori personal remot (Repo Alumne) per posar-lo al dia i mantenir-lo sincronitzat:

    ```bash
    git push origin main
    ```

Fes un cop d'ull a [Syncing with Git](https://www.atlassian.com/es/git/tutorials/syncing) per entendre les principals comandes de sincronització a GIT

## Recursos per aprendre

### TOP

1. **Codecademy**: Codecademy ofereix un [curs gratuït sobre Git](https://www.codecademy.com/learn/learn-git) que cobreix els conceptes bàsics i les millors pràctiques.

2. **Learn the Basics of Git in Under 10 Minutes**: Un article ràpid i pràctic de FreeCodeCamp que introdueix els conceptes bàsics de Git en menys de 10 minuts. [Llegir l'article](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)

3. **Tutorials de Git a W3Schools**: W3Schools ofereix una sèrie de tutorials sobre Git que cobreixen diversos aspectes i comandes. [Explora els tutorials](https://www.w3schools.com/git/default.asp?remote=github)

### Altres

4. **Documentació oficial de Git**: La [documentació oficial de Git](https://git-scm.com/doc) proporciona informació detallada sobre com utilitzar les diferents comandes i característiques de Git.

5. **Llibre "Pro Git"**: [Pro Git](https://git-scm.com/book/en/v2) és un llibre en línia gratuït que ofereix una guia completa sobre Git. És una lectura excel·lent per a principiants i usuaris avançats.

6. **GitKraken Git GUI**: Si prefereixes una interfície gràfica per a Git, pots utilitzar [GitKraken](https://www.gitkraken.com/), una eina GUI que facilita la gestió de repositoris Git.

7. **GitHub Guides**: La secció de [GitHub Guides](https://guides.github.com/) ofereix guies senzilles per a temes com a pull requests, branching i col·laboració en GitHub.s
