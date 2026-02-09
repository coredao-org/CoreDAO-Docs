---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Staking Non-Custodial de Bitcoin

Le staking Bitcoin (ou verrouillage temporel Bitcoin) permet aux détenteurs de Bitcoin de participer au consensus de Core en verrouillant temporairement leur Bitcoin à l'aide de sa fonction native CheckLockTimeVerify (CLTV), sans transférer la garde ou exposer leurs actifs au risque de contrat intelligent.

Le staking Bitcoin transforme le Bitcoin d'un actif statique en un actif productif qui génère des rendements tout en maintenant ses propriétés de sécurité. En incluant des métadonnées de sélection de validateurs dans les transactions de verrouillage temporel, les détenteurs de Bitcoin peuvent participer à l'élection des validateurs Core afin de gagner des récompenses en jetons CORE.

## Fonctionnement du Staking Bitcoin sur Core

Le protocole natif de Bitcoin inclut une fonction CLTV qui permet aux utilisateurs de rendre les Bitcoins non dépensables pendant une période spécifiée. Core tire parti de ce mécanisme pour permettre aux détenteurs de Bitcoin de participer au consensus tout en gardant le contrôle total de leurs actifs.

1. **Création de verrous temporels :** Les détenteurs de Bitcoin utilisent la fonction CLTV pour verrouiller temporairement leurs Bitcoin sur la blockchain Bitcoin pendant une période choisie (minimum 24 heures), rendant ces pièces temporairement indépensables.

2. **Inclusion de métadonnées :** Lors de la création du verrou temporel, les détenteurs incluent des métadonnées spécifiant leur validateur Core choisi et une adresse Core pour recevoir les récompenses CORE.

3. **Soutien des validateurs :** Le montant de Bitcoin verrouillé temporairement pour soutenir un validateur influence leur position dans l'élection des validateurs Core, ce qui impacte leurs chances d'être sélectionnés pour produire des blocs.

4. **Surveillance des relais :** Le réseau de relais Core surveille la blockchain Bitcoin pour les transactions de verrouillage temporel qui incluent des métadonnées de consensus valides.

5. **Distribution des récompenses :** Les validateurs élus sécurisent la blockchain Core en produisant des blocs et en validant les transactions. En fonction de la fiabilité du validateur et du montant de Bitcoin verrouillé temporairement délégué à leur soutien, le protocole Core distribue des récompenses en jetons CORE aux adresses Core spécifiées des stakers Bitcoin.

6. **Expiration du verrou temporel :** Lorsque la période de verrouillage temporaire se termine, le Bitcoin redevient dépensable et la participation au consensus Core cesse. Les récompenses CORE gagnées restent dans l'adresse Core du détenteur, mais aucune récompense supplémentaire ne sera gagnée à moins qu'un nouveau verrou temporel ne soit créé.

## Importance du staking de Bitcoin dans Satoshi Plus.

- **Activation de Bitcoin :** Transforme Bitcoin d'un actif statique en un actif productif qui génère des rendements sans compromettre la sécurité ni nécessiter de conversion.

- **Contribution à la sécurité :** Tire parti de l'immense valeur de Bitcoin pour renforcer le modèle de sécurité de Core sans exiger que Bitcoin quitte sa blockchain native.

- **Préservation de la garde :** Permet aux détenteurs de Bitcoin de participer au consensus de Core tout en conservant une auto-garde complète de leurs actifs.

#### **Conclusion**

Le staking de Bitcoin permet aux détenteurs de Bitcoin de gagner des rendements en contribuant à la sécurité de Core tout en maintenant la garde complète de leurs actifs. En tant que composant intégral du consensus Satoshi Plus, il fonctionne de concert avec DPoW et DPoS pour créer un cadre de sécurité robuste et multicouche. Ce mécanisme aligne les incitations entre les détenteurs de Bitcoin et le réseau Core, transformant Bitcoin d'une réserve de valeur statique en un actif productif sans qu'il ne quitte sa blockchain native.