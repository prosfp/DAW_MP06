# Arquitectures i eines de programació

## Introducció a l'Arquitectura Web

L'arquitectura web és la base de tot el que experimentem mentre naveguem per internet. En aquesta introducció, explorarem a fons aquesta arquitectura, des de les seves arrels històriques fins als navegadors web moderns.

### Història i Evolució dels Navegadors

Els primers dies d'internet es caracteritzaven per la seva simplicitat. La web era principalment una col·lecció d'hipervincles i documents escrits en HTML que es mostraven de manera estàtica. Els primers navegadors com el Mosaic i el Netscape Navigator van ser pioners en la visualització d'aquests documents.

La dècada dels 90 va veure la famosa "guerra dels navegadors" entre Netscape i Internet Explorer. Aquesta competència va portar a moltes innovacions i canvis en la manera en què es renderitzaven les pàgines web. A finals dels anys 90, Mozilla Firefox va sorgir com una alternativa de codi obert a Internet Explorer. Aquest navegador va portar la innovació i la seguretat a l'experiència de navegació.

!!! info inline end "Comparativa navegadors Moderns"
    [Aqui pots consultar una gran quantitat de detalls sobre els principals navegadors en ús que trobaràs](https://eylenburg.github.io/browser_comparison.htm#)

Avui en dia, els navegadors web com Chrome, Firefox, Safari i Edge són els líders del mercat. Tots aquests navegadors utilitzen motors d'interpretació de JavaScript, com V8 (utilitzat per Chrome) o SpiderMonkey (utilitzat per Firefox), per processar i executar codi JavaScript a les pàgines web.

### Motors d'Interpretació de JavaScript

Els motors d'interpretació de JavaScript són components essencials dels navegadors que permeten l'execució de codi JavaScript. Aquests motors són responsables de convertir el codi JavaScript en accions i resultats visibles a les pàgines web.

| Nom del Motor        | Navegadors que ho Utilitzen   | Any d'Aparició | Informació Addicional                             |
|----------------------|-----------------------------|----------------|---------------------------------------------------|
| V8                   | Google Chrome, Opera        | 2008           | Desenvolupat per Google.                          |
| SpiderMonkey         | Mozilla Firefox             | 1995           | El motor original de JavaScript de Mozilla.       |
| JavaScriptCore (Nitro) | Safari                    | 2003           | Desenvolupat per Apple.                           |
| Chakra (abans)       | Internet Explorer           | 2008           | Utilitzat en versions antigues d'Internet Explorer. Abandonat en favor de V8 per a Microsoft Edge. |
| JavaScriptCore (JavaScriptCore) | Microsoft Edge (abans) | 2015      | Abandonat en favor de V8 per a Microsoft Edge.    |
| JavaScriptCore (WebKit) | Safari (abans)           | 2003           | Abandonat en favor de JavaScriptCore (Nitro) per a Safari. |


``` mermaid 
graph TB
  A[Entrada de l'URL] --> B[Resolució DNS]
  B --> C[Solicitud HTTP]
  C --> D[Rebre el Contingut]
  D --> E[Interpretació HTML]
  D --> F[Càrrega de Recursos Externs]
  E --> G[Renderitzat de la Pàgina]
  G --> H[Interpretació JavaScript]
  F --> H
  E --> I[Gestió de l'Estil]
  H --> J[Pintura i Composició]
  I --> J
  J --> K[Interacció de l'Usuari]
  K --> L[Xarxes Socials i Altres Recursos]
  L --> M[Cicle de Vida de la Pàgina]
  M --> N[Tancament i Alliberament de Recursos]
  N --> O[Emmagatzematge Local i Cookies]

```
nav:
  - Documentació per aprendre JavaScript:
    - Tutorials:
      - W3Schools JavaScript Tutorial: https://www.w3schools.com/js/
      - MDN JavaScript Tutorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
      - Ada Lovecode Videotutorials: [Enllaç al teu recurs de videotutorials]
    - Referències:
      - W3Schools JavaScript Reference: https://www.w3schools.com/jsref/
      - MDN JavaScript Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
    - Exercicis i proves:
      - W3Schools JavaScript Exercises: https://www.w3schools.com/js/js_exercises.asp
      - W3Schools JavaScript Quiz: https://www.w3schools.com/js/js_quiz.asp
      - Problemes per resoldre (i resolts):
        - CheckiO JavaScript Exercises: https://checkio.org/
        - A smarter way to learn JavaScript: [Enllaç al teu recurs]
        - W3resource JavaScript Exercises (with solutions): https://www.w3resource.com/javascript-exercises/
        - Exercism (with solutions): https://exercism.io/tracks/javascript/exercises
    - Dubtes i problemes:
      - StackOverflow: https://stackoverflow.com/questions/tagged/javascript
  - Altres tutorials i referències:
    - HTML:
      - W3Schools HTML5 Tutorial: https://www.w3schools.com/html/
      - W3Schools HTML5 Tags by Category: https://www.w3schools.com/tags/
      - W3Schools HTML5 Attributes: https://www.w3schools.com/html/html_attributes.asp
    - CSS:
      - W3Schools CSS Tutorial: https://www.w3schools.com/css/
      - W3Schools CSS Reference: https://www.w3schools.com/cssref/
      - W3Schools CSS Selectors: https://www.w3schools.com/css/css_selectors.asp
      - W3Schools CSS Units: https://www.w3schools.com/css/css_units.asp
      - W3Schools CSS Color Values: https://www.w3schools.com/css/css_colors.asp



