# [TypeScript Example](https://www.typescriptlang.org/)

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

TypeScript is a superset of JavaScript which gives you static types and powerful tooling in Visual Studio Code including autocompletion and useful inline warnings for type errors.

## 🚀 How to use

#### Creating a new project

- Install the CLI: `npm i -g expo-cli`
- Create a project: `expo init --template expo-template-blank-typescript`
- `cd` into the project

### Adding TypeScript to existing projects

- Copy the `tsconfig.json` from this repo, or new typescript template
- Add typescript dependencies: `yarn add --dev @types/react @types/react-native typescript`
- Rename files tpo TypeScript, `.tsx` for React components and `.ts` for plain typescript files

## 📝 Notes

- [Expo TypeScript guide](https://docs.expo.io/versions/latest/guides/typescript/)

# Workshop ✍️

## Modal

We want to present the Alert to the user when the user presses the `Show alert` button.

We will follow the official [documentation](https://reactnavigation.org/docs/modal) of react navigation.

## Slide Overlay

We want to present a SlideOverlayExample to the user.
To proceed we will have to implement custom cardStyleInterpolator. Check [the documentation here](https://reactnavigation.org/docs/stack-navigator/#animations)

## Tab navigator

Add a tabNavigator with 2 tabs: 'Today' and 'Profile'
Each tab is only one screen.

## ProfileNavigator

Replace the Profile screen with a ProfileStackNavigator containing the Profile screen and a SettingScreen

## Typings

We now want to add a description to the Alert component. Make sure the typings are safe.
