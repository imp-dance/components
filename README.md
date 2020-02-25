<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/imp-dance/components">
    <h1 align="center">hu-components</h1>
  </a>

  <h3 align="center">components</h3>

  <p align="center">
    A collection of small reusable and lightweight React components
    <br />
    <a href="https://github.com/imp-dance/components"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://haakon.underbakke.net/components">View Demo</a>
    ·
    <a href="https://github.com/imp-dance/components/issues">Report Bug</a>
    ·
    <a href="https://github.com/imp-dance/components/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started With Contributing](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Cloning the repositories](#cloning-the-repositories)
  - [Starting the dev-environment](#starting-the-dev-environment)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![hu-components Screen Shot][product-screenshot]](https://example.com)

I find most component frameworks to overly complex and large for most of my needs, so I decided to start publishing encapsulated, small and reusable components that have a clean and easily stylable design.

### Built With

The packages all use a template called [react-component-publish](https://github.com/zxol/react-component-publish#readme), and they only ever use eachother as dependencies

<!-- GETTING STARTED -->

## Getting Started With Contributing

To get a local test environment up and running follow these simple steps.

### Prerequisites

You need to clone both [imp-dance/components](https://github.com/imp-dance/components#readme) and [imp-dance/components-serve](https://github.com/imp-dance/components-serve#readme).

- **components-serve** is your test environment, and essentially a local copy of [haakon.underbakke.net/components](https://haakon.underbakke.net/components), where you will be doing most of your work.
- **components** is where you will add your changes or components and create a pull request.

### Cloning the repositories

```sh
mkdir hu-components
cd hu-components
git clone https://github.com/imp-dance/components.git

cd ../

mkdir hu-components-test
cd hu-components-test
git clone https://github.com/imp-dance/components-serve.git
```

### Starting the dev-environment

Assuming you are still in `./hu-components-test`, run the follwing commands

```sh
cd components-serve/components
npm install
```

After the packages have finished installing, you can start the test environment

```sh
npm run start
```

### Making changes

From [components-serve/components](https://github.com/imp-dance/components-serve/tree/master/components/), you can load in the examples from [src/components/reusable](https://github.com/imp-dance/components-serve/tree/master/components/src/components/reusable) instead of directly from NPM, then you can edit them directly to see the live changes.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/imp-dance/components/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Håkon Svennes Underbakke - [@impedansen](https://twitter.com/impedansen) - haakon@underbakke.net

Project Link: [https://github.com/imp-dance/components](https://github.com/imp-dance/components)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [react-component-publish](https://github.com/zxol/react-component-publish#readme)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/imp-dance/components.svg?style=flat-square
[contributors-url]: https://github.com/imp-dance/components/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/imp-dance/components.svg?style=flat-square
[forks-url]: https://github.com/imp-dance/components/network/members
[stars-shield]: https://img.shields.io/github/stars/imp-dance/components.svg?style=flat-square
[stars-url]: https://github.com/imp-dance/components/stargazers
[issues-shield]: https://img.shields.io/github/issues/imp-dance/components.svg?style=flat-square
[issues-url]: https://github.com/imp-dance/components/issues
[license-shield]: https://img.shields.io/github/license/imp-dance/components.svg?style=flat-square
[license-url]: https://github.com/imp-dance/components/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/imp-dance
[product-screenshot]: images/screenshot.png
