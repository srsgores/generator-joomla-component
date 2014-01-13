# generator-joomla-component [![Build Status](https://secure.travis-ci.org/srsgores/generator-joomla-component.png?branch=master)](https://travis-ci.org/srsgores/generator-joomla-component)

A component generator for [Yeoman](http://yeoman.io).

## What It Does (Better)
Using this generator, you can quickly and effortlessly *scaffold* out a new [joomla](http://joomla.org) component,
using recommended MVC design pattern and coding standards.  These include:

* Internationalization language files
* Tabs for indents
* CamelCase variable notation
* Proper MVC architecture
* PHPDocumentor stubs for every method, as well as page-level doc blocks
* Uses ``'`` over ``"``, because that's what the official Joomla library uses

So rather than manually creating your own ``config.xml`` and other config files,
you just need to load up this generator, type in your options, and everything is set up for you.  If you want to add
a new model, view, or controller, just use the subgenerators!

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-joomla-component from npm, run:

```
$ npm install -g generator-joomla-component
```

Finally, initiate the generator:

```
$ yo joomla-component
```

## Subgenerators
There are currently **4** subgenerators:

1. *model*: ``yo joomla-component:model "model-name"``
2. *view*: ``yo joomla-component:view "view-name"``
3. *controller*: ``yo joomla-component:controller "controller-name"``
4. *helper*: ``yo joomla-component:helper "helper-name"``

Each generator creates a new file with phpdocumentor and joomla standards, packaged and subpackaged as needed

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)