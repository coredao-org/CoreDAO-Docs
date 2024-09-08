---
sidebar_label: Délégation de Hashage
hide_table_of_contents: false
sidebar_position: 2
---

# Délégation de Hashage

---

En utilisant leurs clés publiques et privées, les mineurs de BTC peuvent déléguer leur puissance de hachage à un validateur Core ou se la déléguer eux-mêmes s'ils choisissent de gérer un validateur, en vérifiant et synchronisant leur identité (adresses) sur les blockchains BTC et Core. Lorsque les relayeurs soumettent des transactions, ils synchronisent les blocs minés par le mineur BTC avec le réseau Core. À chaque cycle, le réseau Core calcule la puissance de hachage BTC associée à chaque validateur en comptant le nombre de blocs produits par chaque mineur sur le réseau BTC pendant la même journée de la semaine précédente. L'architecture de la communication de la chaîne de mappage est illustrée dans le schéma ci-dessous. En déléguant leur puissance de hachage BTC aux validateurs, les mineurs de BTC peuvent aider à sécuriser le réseau et à partager les récompenses du système.

![delegate-hash](../../static/img/delegate/miner-power-relaying.png)

## Processus d'installation pour les mineurs

Voyons comment les mineurs de BTC ou les pools de minage peuvent déléguer leur puissance de hachage à la blockchain Core en ajoutant une sortie `OP_RETURN` dans la transaction coinbase de BTC.

:::info
Pour plus d'informations sur la blockchain Core et le consensus Satoshi Plus, veuillez consulter le [Livre Blanc Technique](https://whitepaper.coredao.org/).
:::

### Implémentation

Les mineurs et pools de minage de Bitcoin doivent composer les informations suivantes dans ce format et les placer dans le bloc Bitcoin :

`OP_RETURN + LENGTH + CORE + VERSION + Delegate Information`

Voici une brève description de chaque élément :

- OP\_RETURN: `0x6a`
- LENGTH: `0x2d`, which represents the total byte length after the `OP_RETURN` opcode
- CORE: `0x434f5245`
- VERSION: `0x01`
- The `Delegate Information` contains two Core addresses, each 20 bytes. The first address is the Validator address that will receive your PoW delegation. The second address is the Core address at which you want to receive your reward distributions.

To illustrate, let's assume the Validator address is:

- &#x20`0x0a53b7e0ffd97357e444b85f4d683c1d8e22879a`&#x20

And the reward address is:

- &#x20`0xBD13F9435f8B327C222d1D1930C17ea6719e8a33` &#x20

Combining the constant `OP_RETURN + LENGTH + CORE + VERSION`, we see that the prefix for this (and any other) byte string will be `0x6a2d434f5245010`.

Remember that the full `Delegate Information` comes from the combination of the Validator and reward addresses, so that would be:

- `0x0a53b7e0ffd97357e444b85f4d683c1d8e22879aBD13F9435f8B327C222d1D1930C17ea6719e8a33`

By adding the constant prefix to our example Delegate Information, we get a complete and valid example byte string:

- `0x6a2d434f5245010a53b7e0ffd97357e444b85f4d683c1d8e22879aBD13F9435f8B327C222d1D1930C17ea6719e8a33`

Simply include this byte string as a new output of the Bitcoin coinbase transaction to delegate your hash power and receive rewards.

:::note
Please note that your Validator and reward address will be different than above and must be substituted into the `Delegate Information` portion of the byte string in order to correctly delegate hash power and receive rewards.
:::

### Additional Information

- The Core blockchain uses Bitcoin network block records from seven days ago for hybrid score calculations. Additionally, after a validator is elected, staking rewards are distributed on the second day of the switched round. Therefore, after delegating their hash power, miners/mining pools will have their hash power used in the Validator election calculation N+7 days later and will have claimable rewards N+8 days later.
- In order to improve rewards received from Core blockchain, we encourage miners/mining pools to delegate to more than one Validator and distribute their hash powers evenly. The optimal solution is to delegate **\~5%** of your overall hash rate to each validator.
- Validator information for Core mainnet can be found [here](https://stake.coredao.org/). Validator information for Core testnet can be found[ here](https://stake.test.btcs.network/). Use the operator address of the Validator to fill the part in the byte string described above.
- Your reward address must be EVM-compatible. After creating an Ethereum formatted address to use as your reward address, add it after the Validator address in the byte string as described above. Later you will use your reward address to claim rewards from Core blockchain using MetaMask or your preferred web wallet. For more information about adding Core to MetaMask, please refer to our guide on [adding Core to MetaMask](https://medium.com/@core\_dao/add-core-to-metamask-7b1dd90041ce).
