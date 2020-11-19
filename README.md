# Incremental Build && Fast Serve

This project has an application composed out 44 libraries (more than 2000 components). If you run `nx dep-graph`, you will see the following:

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx-incremental-large-repo/master/dep-graph.png"></p>

> **Note:** this is experimental right now and will be released in Nx v11. [Check out our roadmap.](https://github.com/nrwl/nx/issues/3377)

## Two Applications

There are two applications in the repo: app0 and app1. They are identical. They import the same libraries. The only difference is app1 is built using normal webpack builder, where all the libraries are built from source and app0 is built differently: every library here is built in its own process.

## Serving App1

- `nx serve app1` takes about 1 minute (on my machine).
- Once `nx serve app1` is running, an incremental change of a child lib takes about 9 seconds.

## Serving App0

- `nx serve app0` takes a few seconds.
- Once `nx serve app0` is running, an incremental change of a child lib takes about 15 seconds.

Why is running `nx serve app0` so fast? Because the results of building most libraries are retrieved from the Nx Cloud cache (or your local cache). If you don't have the cache, rebuilding everything takes about 1 minute. Most of the time, however, you are getting the artifacts from Nx Cloud because your CI or your co-workers already built the version of the repo you are working against.

Why is making an incremental change takes 15 seconds?

- Every library has 50 components, so it's relatively big. This is intentional because we want to illustrate that the time will be reasonable even without splitting the app into hundreds of libraries.
- We use ngpackagr to build the library. It generates several bundles we don't actually use. Having a different builder could cut this time in half.

Given that, by providing a custom builder, we could cut the incremental change time down to 10 seconds.

### Bigger Apps

If we double the app size to 4000 components, the following will be the case:

- `nx serve app1` will take about 2 minutes.
- Once `nx serve app1` is running, an incremental change will take about 15 seconds.
- `nx serve app0` will still take a few seconds.
- Once `nx serve app0` is running, an incremental change will take about 20 seconds.

So `app0` scales a lot better as the codebase grows. **The initial `nx serve` will only take a few seconds regardless of the size of the app.** In this repo's example, the incremental change of `app0` is somewhat slower, but the difference is getting less substantial as the app grows. And by using a builder that simply invokes ngc instead of ngpackgr, it's possible to make the incremental change of `app0` faster than app1 for any large app.

## Testing and Linting

- Run `nx test app0 --with-deps` to run all the tests.
- Run `nx lint app0 --with-deps` to run all the lint checks.

## How does it work?

This works, thanks to a combination of existing and newly introduced Nx features:

- dependency graph used to resolve all dependencies that need to be built
- task orchestrator that is able to resolve and properly build all dependencies when using `--with-deps`
- "buildable" libraries, that use a lightweight version of ng-packagr to speed up re-builds
- computation caching and especially [Nx Cloud](https://nx.app) distributed caching

Keep an eye on [our Twitter account](https://twitter.com/nxdevtools) and [our blog](https://blog.nrwl.io) for a more in-depth explanation once v11 is released.

## Try it!

- Clone the repo and run `nx serve app0`
