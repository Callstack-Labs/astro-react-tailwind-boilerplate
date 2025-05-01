# Astro + React + Tailwindcss boilerplate

- ✅ Astro v5
- ✅ Tailwindcss v4
- ✅ React v19
- ✅ TypeScript is implicitly supported by Astro
- ✅ Code formating for Astro, css, and tsx/js files
- ✅ Tailwind classes sorting

## Why

Astro has great documentation and tooling to do what this boilerplate have, but setting up prettier with code formating and tailwind classes sorting could be annoying. If you are someone that kick starts many Astro+React+Tailwind projects, this working minimal boilerplate out of the box will help a ton.
Also, if you are a beginner playing around with Astro and want to have a nice starting point, this boilerplate is the way.

## How To Use This Boilerplate

Just clone the repo to your system

### Enable code formating on Save

1. Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VSCode
2. Open VSCode settings (File > Preferences > Settings or `Cmd+,` on Mac, `Ctrl+,` on Windows)
3. Search for "Format On Save" and check the box to enable it
4. Alternatively, add this to your VSCode settings.json file:
   ```json
   {
     "editor.formatOnSave": true,
     "[astro]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[typescriptreact]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
   }
   ```

This boilerplate already includes the necessary Prettier plugins for Astro, Tailwind, and other file types in the package.json.

## 🚀 Astro Documentation

Find Astro docs [here](https://docs.astro.build).

## ✨ Tailwindcss Documentation

Find Tailwindcss Docs [here](https://tailwindcss.com/docs/installation).

## Request Features

Open issues to request any features that you think are helpfull for a minimal boilerplate.

## To Support

<a href="https://www.buymeacoffee.com/hassib" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
