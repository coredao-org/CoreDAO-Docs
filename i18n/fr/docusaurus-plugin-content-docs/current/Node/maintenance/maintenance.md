---
sidebar_label: Maintenance des Node
hide_table_of_contents: false
sidebar_position: 2
---

# Maintenance des nodes

---

## Binaire

Il est conseillé à tous les clients de mettre à jour vers la dernière version disponible. La [dernière version](https://github.com/coredao-org/core-chain/releases/latest) est censée être plus stable et offrir de meilleures performances.

## Stockage

### Élagage de l'État

Selon les tests effectués, les performances des nodes complets se dégradent lorsque la taille de stockage atteint un volume élevé (environ 1,5 To, ce qui est une valeur expérimentale). Nous suggérons que les nodes complets maintiennent un stockage léger en élaguant les données stockées.

#### Règles pour l'Élagage

1. **Ne pas essayer d'élaguer un nœud d'archive.** Les nodes d'archive doivent conserver **TOUTES** les données historiques par définition.
2. Assurez-vous qu'il reste au moins **40 Go** d'espace de stockage disponible sur le disque qui sera élagué. Des échecs ont été signalés avec **environ 25 Go** d'espace libre.
3. Geth doit être entièrement synchronisé
4. Geth doit avoir terminé la création d'un instantané datant d'au moins **128 blocs**. Cela est vrai lorsque la "génération d'instantané de l'état" n'est plus rapportée dans les journaux.

#### Comment élaguer :

1. Arrêter le processus Geth

2. Exécuter la commande d'élagage

```bash
   nohup geth --datadir ~/node snapshot prune-state > . /prune.log 2>&1 &
```

3. Vérifier le fichier `prune.log`, attendre que l'opération d'élagage soit terminée, puis redémarrer Geth.

Les mainteneurs doivent toujours avoir quelques nodes de secours en cas d'élagage de l'un des nodes. L'équipement matériel est également important. **Assurez-vous que le SSD répond aux spécifications suivantes : 4 To d'espace disque libre, SSD, gp3, 8k IOPS, 250 Mo/s de débit, latence de lecture \<1ms**.

### Élagage des Données Anciennes en Temps Réel

Les données anciennes sont des données de blocs déjà considérées comme immuables. Cela est déterminé par un seuil actuellement fixé à **90 000**. Cela signifie que les blocs plus anciens que **90 000** sont considérés comme des données anciennes. Nous recommandons aux utilisateurs qui ne s'intéressent pas aux anciennes données d'utiliser l'option `--pruneancient`. Cela permet d'économiser de l'espace disque en ne conservant que les données des **90 000** derniers blocs.  Notez qu'une fois cette option activée, les données anciennes ne pourront plus être récupérées et vous ne pourrez pas exécuter votre nœud sans cette option dans la commande de démarrage.

Comment utiliser l'option flag:

```bash
./geth --tries-verify-mode none --config /server/config.toml --datadir /server/node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --pruneancient=true --syncmode=full
```

### Outils d'Élagage de Blocs

Core offre une fonctionnalité hors ligne pour élaguer les données de blocs anciens indésirables. Cela permet de supprimer les blocs, reçus et en-têtes de la base de données pour économiser de l'espace.

Comment élaguer:

1. Arrêter le processus Geth.
2. Exécuter la commande suivante

```bash
./geth snapshot prune-block --datadir /server/node --datadir.ancient ./chaindata/ancient --block-amount-reserved 1024
```

`block-amount-reserved` correspond au nombre de blocs anciens que vous souhaitez conserver après l'élagage.

## Stockage Léger

Lorsque le nœud plante ou est tué de force, il synchronisera à partir d'un bloc datant de quelques minutes ou heures. Cela est dû au fait que l'état en mémoire n'est pas persisté dans la base de données en temps réel, et le nœud doit rejouer des blocs depuis le dernier point de contrôle une fois redémarré. Le temps de relecture dépend de la configuration `TrieTimeout` dans le `config.toml`. Il est recommandé d'augmenter la valeur de `TrieTimeout`pour accommoder les temps de relecture longs, permettant ainsi au nœud de maintenir un stockage léger.

## Mise à Jour de Geth

Veuillez consulter [ce guide](network-upgrade.md)

