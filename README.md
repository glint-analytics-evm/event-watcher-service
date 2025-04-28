# GLNT Event Watcher Service

The GLNT Event Watcher Service is a dedicated service designed to observe and track events associated with the Glint contracts. It utilizes WebSocket Secure (WSS) connections to monitor contract events from specified contract addresses. The service also ensures the persistence of these events by saving them to a database.

## Installation

```bash
$ yarn
```

## Modules

### Configuration Module

The Configuration Module is the backbone of the service. It sets up the provider and retrieves contract addresses from the `config.json` file. Additionally, it exports the WSS provider, making it accessible for other modules within the service.

### Event Module

This module is responsible for monitoring the Glint contracts events. It broadcasts these events across the project, making them available for use by other services.

### Transfer Event Db Module

This module is responsible for all database operations related to the `Transfer` event of [GLNTToken](https://github.com/blockscope-ai/glnt-nft-mint-contract/blob/main/contracts/GLNTToken.sol) NFT contract. It actively listens for `Transfer` events using the Event Module. Upon detection of a specified event, it ensures the event is saved to the database.

### Reward Distributed Event Db Module

This module is responsible for all database operations related to the `RewardDistributed` event of [RewardDistribution](https://github.com/blockscope-ai/glnt-reward-distribution-contract/blob/main/contracts/RewardDistribution.sol) contract. It actively listens for `RewardDistributed` events using the Event Module. Upon detection of a specified event, it ensures the event is saved to the database.

### Purchased Event Db Module

This module is responsible for all database operations related to the `Purchased` event of [Sale](https://github.com/blockscope-ai/glnt-subscription-sale-contract/blob/main/contracts/Sale.sol) contract. It actively listens for `Purchased` events using the Event Module. Upon detection of a specified event, it ensures the event is saved to the database.

### Subscribe Event Db Module

This module is responsible for all database operations related to the `Subscribe` event of [Subscription ](https://github.com/blockscope-ai/glnt-subscription-sale-contract/blob/main/contracts/Subscription.sol) contract. It actively listens for `Subscribe` events using the Event Module. Upon detection of a specified event, it ensures the event is saved to the database.

### Extend Subscription Event Db Module

This module is responsible for all database operations related to the `ExtendSubscription` event of [Subscription ](https://github.com/blockscope-ai/glnt-subscription-sale-contract/blob/main/contracts/Subscription.sol) contract. It actively listens for `ExtendSubscription` events using the Event Module. Upon detection of a specified event, it ensures the event is saved to the database.

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
