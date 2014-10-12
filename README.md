Stem idler
===================

### Installation

1. `npm install git://github.com/alvinl/stem-idler.git`
2. Add `"stem-idler"` to your plugins array in `config.json`

### Commands

- `idle <on / off>` Toggles idling

### Config

```json
{

  "idler": {

    "idleOnLogin": false,
    "games": ["440", "730"]

  }

}

```

- `idleOnLogin` Whether or not to idle when the bot starts up (defaults to false)
- `games` An array of appID's of the games you want to idle
- You can search for a games appID [here](http://steamdb.info/search/?a=app&q=).
