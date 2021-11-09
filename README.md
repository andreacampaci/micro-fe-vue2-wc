# Codemotion workshop

### Avvertenze
I comandi sono costruiti con sintassi `bash`, pertanto per chi usa Window in alcuni casi andrebbero riconvertiti.

### Pre-requisiti
Per poter installare correttamente il progetto, utilizza la versione node contenuta nel file .nvmrc

In seguito installa Lerna con il seguente comando:

```shell
npm i -g lerna@4.0.0
```

Una volta installato poi procedere con l'installazione dei moduli usando Lerna.

```shell
npm run bootstrap
```
> Per problemi legati alla vue cli per questo progetto non è possibile usare --hoist sul comando Lerna bootstrao

### Commands
####  Create new component
Comando per creare una nuova micro applicazione
```shell
npm run new-component -- {{componentName}}
```
Una volta eseguito con successo rilanciare `npm run bootrap`
#### Serve a micro app CDN

```shell
npm run serve-cdn
```
#### build all micro apps
```shell
lerna run build-apps
```
#### Move all micro apps to CDN
```shell
lerna run deploy-apps
```
#### Uninstall node modules
Comando usato per togliere tutte le cartelle node_modules
```shell
lerna clean
```

