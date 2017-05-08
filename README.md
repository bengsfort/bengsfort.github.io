# bengsfort.github.io

Yet another incarnation of my blog (there has to be at least 3 or 4 different projects/rewrites at this point); this time ~~using [Hexo](https://hexo.io/)~~ and hosted on [github pages](https://pages.github.com/) to save dem €€€'s.

This readme is out of date and its too late in the evening for me to want to change it. Currently using metalsmith for this.

```
# building
make build

# browser sync for local dev
make watch

# deploying
make publish
```

**@todo:** fix ordering of stuff.

## Installation

### Basic usage

```
// Clone repo
$ git clone git@github.com:bengsfort/aesinv-jekyll-blog.git
$ git checkout develop // development directory

// Install Hexo CLI and the project
$ npm install -g hexo-cli
$ npm install
$ hexo server
```

### Fancy usage + Pow

```
// Clone repo
$ git clone git@github.com:bengsfort/aesinv-jekyll-blog.git
$ git checkout develop // development directory

// Install Hexo CLI and project
$ npm install -g hexo-cli
$ npm install

// Generate the site
$ hexo generate

// Install pow and symlink the project dir
$ curl get.pow.cx | sh
$ cd ~/.pow
$ ln -s ~/path/to/bengsfort.github.io/
```

You can then check out the built project at [bengsfort.github.io.dev](http://bengsfort.github.io.dev/).

## Deploying
The blog uses the [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) module for deploying to gh-pages, so deploying is very straightforward.

```
$ hexo deploy
```

The module will build the site to .deploy_git then force-push that to the `master` branch.

##Todo