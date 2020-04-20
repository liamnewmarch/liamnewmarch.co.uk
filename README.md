# Personal blog

## About

This repository contains the source files for [liamnewmarch.co.uk](site). Pages and blog posts are authored in [Markdown][markdown] and can be found in the `content` folder. I use [Eleventy][11ty] to build the site from [Nunjucks][nunjucks] templates, found in the `templates` folder.

## Local development

The site is hosted on [Google Cloud][cloud] and uses [GitHub Actions][actions] to trigger a build when code is pushed to the [`master`][master] branch. This makes it possible to deploy content changes without installing anything locally.

To make styling or template changes, first install the dependencies.

```shell
npm install
```

Next, use the __start__ task to run Eleventy. This will watch for changes and rebuild as necessary.

```shell
npm start
```

## Deploying to Google Cloud (automatic)

This repository is configured to use the [Google Cloud Build][action] [GitHub Action][actions]. It will trigger a [Cloud Build][cloudbuild] every time code is pushed to the [`master`][master] branch. The build pipeline, outlined in [`cloudbuild.yaml`][pipeline], installs dependencies, runs an Eleventy build, and deploys the result to [App Engine][appengine].

Because Cloud Build is triggered when code hits master I have adopted the strategy of working in feature branches and rebasing the changes into master.

## Deploying to Google Cloud (manual)

Manual deployments to App Engine are possible using the [gcloud][gcloud] CLI. This mimics the steps in [`cloudbuild.yaml`][pipeline].

```shell
npm run build
gcloud app deploy
```


[site]: https://liamnewmarch.co.uk
[11ty]: https://www.11ty.dev
[nunjucks]: https://mozilla.github.io/nunjucks/
[markdown]: https://daringfireball.net/projects/markdown/
[cloud]: https://cloud.google.com
[action]: https://github.com/marketplace/google-cloud-build
[actions]: https://github.com/features/actions
[cloudbuild]: https://cloud.google.com/cloud-build/
[master]: https://github.com/liamnewmarch/liamnewmarch.co.uk/tree/master
[pipeline]: https://github.com/liamnewmarch/liamnewmarch.co.uk/tree/master/cloudbuild.yaml
[appengine]: https://cloud.google.com/appengine/
[gcloud]: https://cloud.google.com/sdk/install
