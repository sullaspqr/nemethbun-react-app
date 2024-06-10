# React Bun runtime-al:

## Szeretnéd használni a bun -t a következő react projektedhez?


### A `bun` installálása:

Első körben ellenőrízd le, hogy a bun fut-e nálad vagy sem:

```sh
bun -v
```

Ha nincs a `bun` feltelepítve, akkor installáld a következő paranccsal:

Linux / MacOS alatt:
```sh
curl https://bun.sh/install | bash
```
Windows alatt PowerShell-el:
```sh
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Create a react app

Now run the following command to create a react app

```sh
bun create react [your-app-name]
```

It will create a new directory with the name of your app. To start the app run the following command

```sh
cd your-app-name
bun dev
```

### Build production bundle for react app

By default `bun` does not ship with `react-scripts` so you need to install it first.

```sh
bun a react-scripts -d
```

Here we install it as a dev dependency.

Then run the following command to build the production bundle

```sh
bun react-scripts build
```

When you run the command above it will build the production bundle and it will be stored in the `build` directory.

### Adding `scripts` to your package.json

We can add the following scripts to our package.json file

```json
{
  "scripts": {
    "start": "bun dev",
    "build": "react-scripts build"
  }
}
```

Now we can run the following command to start the app

```sh
bun start
```

And we can run the following command to build the production bundle

```sh
bun run build
```

### Bonus:

> By default `bun` creates react app with javascript but we can easily use typescript by changing the file extension from `.jsx` to `.tsx`
