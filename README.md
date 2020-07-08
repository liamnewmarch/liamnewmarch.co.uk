# Personal blog

## About

This repository contains the source files for [liamnewmarch.co.uk](site). Pages and blog posts are authored in [Markdown][markdown] and can be found in the `content` folder. I use [Static][static], my static site generator, to build the site from [Nunjucks][nunjucks] templates which can be found in the `templates` folder.

## Local development

The site is hosted on [Firebase][firebase] and uses [GitHub Actions][actions] to trigger a build when code is pushed to the [`main`][main] branch. This makes it possible to deploy content changes without installing anything locally.

To make styling or template changes, first install the dependencies.

```shell
npm install
```

Next, use the __start__ task to run Static. This will watch for changes and rebuild as necessary.

```shell
npm start
```

## Deploying to Firebase (automatic)

This repository is configured to use the [Google Cloud Build][action] [GitHub Action][actions]. It will trigger a [Cloud Build][cloudbuild] every time code is pushed to the [`main`][main] branch. The build pipeline, outlined in [`cloudbuild.yaml`][pipeline], installs dependencies, runs a Static build, and deploys the result to [Firebase][firebase].

Because Cloud Build is triggered when code hits main I have adopted the strategy of working in feature branches and rebasing the changes into main.

## Deploying to Firebase (manual)

Manual deployments to Firebase are possible using the [Firebase][firebase] CLI. This mimics the steps in [`cloudbuild.yaml`][pipeline].

```shell
npm run build
firebase deploy
```


[site]: https://liamnewmarch.co.uk
[static]: https://github.com/liamnewmarch/static
[nunjucks]: https://mozilla.github.io/nunjucks/
[markdown]: https://daringfireball.net/projects/markdown/
[firebase]: https://firebase.google.com
[action]: https://github.com/marketplace/google-cloud-build
[actions]: https://github.com/features/actions
[cloudbuild]: https://cloud.google.com/cloud-build/
[main]: https://github.com/liamnewmarch/liamnewmarch.co.uk/tree/main
[pipeline]: https://github.com/liamnewmarch/liamnewmarch.co.uk/tree/main/cloudbuild.yaml
