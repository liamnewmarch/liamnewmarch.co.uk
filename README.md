# liamnewmarch.co.uk

This repository contains the source files for my [personal site](site). Page content and blog posts are authored in [Markdown][markdown] and can be found in the `content` folder. I use [Eleventy][11ty] to build the site from [Nunjucks][nunjucks] templates, found in the `templates` folder.

## Local development

To run the site locally first install the dependencies.

```shell
npm install
```

Next, use the __start__ task to run Eleventy. This will watch for changes and rebuild as necessary.

```shell
npm start
```

# Deploying to Google Cloud (automatic)

The repository uses the [Google Cloud Build][action] [GitHub Action][actions] to trigger a [Cloud Build][cloudbuild] when code is pushed to the [`master`][master] branch. The build pipeline, outlined in [`cloudbuild.yaml`][pipeline], installs dependencies, runs an Eleventy build, and deploys the result to [App Engine][appengine].

Because Cloud Build is triggered when code hits master I have adopted the strategy of working in feature branches and rebasing the changes into master.

## Deploying to Google Cloud (manual)

Manual deployments to App Engine are possible using the [gcloud][gcloud] CLI. This mimics the steps in [`cloudbuild.yaml`][pipeline].

```shell
npm run build
gcloud app deploy
```


[site]:
[11ty]: https://www.11ty.dev
[nunjucks]: https://mozilla.github.io/nunjucks/
[markdown]: https://daringfireball.net/projects/markdown/
[action]: https://github.com/marketplace/google-cloud-build
[actions]: https://github.com/features/actions
[cloudbuild]: https://cloud.google.com/cloud-build/
[master]: https://github.com/liamnewmarch/liamnewmarch.co.uk/tree/master
[pipeline]: https://github.com/liamnewmarch/liamnewmarch.co.uk/tree/master/cloudbuild.yaml
[appengine]: https://cloud.google.com/appengine/
[gcloud]: https://cloud.google.com/sdk/install
