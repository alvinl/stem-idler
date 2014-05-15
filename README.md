Stem idler
===================

### Installation

1. `npm install git://github.com/alvinlz/stem-idler.git`
2. Add `"stem-idler": {}` to plugins.json

### Commands

- `idle on / off` Toggles idling

### Config

```json
{

  "stem-idler": {

    "idleOnLogin": false,
    "games": ["440"]

  }

}

```

- `idleOnLogin` Whether or not to idle when the bot starts up (defaults to false)
- `games` An array of appID's of the games you want to idle