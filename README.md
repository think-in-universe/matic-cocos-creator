# Matic Plugin for Cocos Creator

## Introduction

1. [Matic](https://matic.network/): Matic Network is a sidechain based scaling solution for public blockchains. It is based on an adapted implementation of Plasma framework. Matic provides scalability while ensuring a superior user experience in a secured and decentralized manner.
2. [Cocos Creator](https://cocos2d-x.org/creator): A set of integrated tools for game development with the core of content creation.

This project provides game developers the Matic Plugin for Cocos Creator.

## How it Works

Since JavaScript is the 1st class programming language in Cocos Creator, we did minimal change to matic.js to make it compatible with Cocos Creator.

The developers could reuse all the existing APIs as provided by [matic.js](https://github.com/maticnetwork/matic.js)


## Environment Requirements

**Cocos Creator 2.0+**

Download and install from https://www.cocos.com/creator if not ready.

## Install the Matic Plugin for Cocos Creator

1. Put this matic package into `packages` directory of Cosos Creator project.

A recommended way to add the plugin is via git submodule, e.g.

```bash
git submodule add https://github.com/think-in-universe/matic-cocos-creator <project>/packages/matic
```

2. Open the Cocos Creator project, and you'll find the `Matic` menu item understand `Extension` menu. Click `install` to install the plugin.

![image](https://user-images.githubusercontent.com/46699230/65697412-76497380-e0ad-11e9-9444-54da373d12c1.png)


3. After installation, reopen the project in Cocos Creator. You'll find the `matic` folder is automatically included under the `assets` folder.

![image](https://user-images.githubusercontent.com/46699230/65697471-94af6f00-e0ad-11e9-9965-0fcf5ea569ff.png)


That's it! Now you can start use matic.js methods to bring blockchain capability to your game. Enjoy!

To learn more about Matic Network, check out the document here: https://docs.matic.network

## Game Development Tutorials

For game developers who want to start with Matic and Cocos, you might be interested to check out [Matic Cosos Starter Kit](https://github.com/think-in-universe/matic-cocos-starter-kit) to speed up the environment setup and game development. 


## Versions Mapping

| Matic Plugin for Cocos Creator | Matic.js |
| --------------- | ---------- |
| 0.0.1           | 1.0.0-beta.14 |

The current version of Matic plugin is generated from the latest stable version of Matic.js
