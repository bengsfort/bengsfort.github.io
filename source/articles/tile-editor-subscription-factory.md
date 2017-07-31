---
layout: post.html
title:  "C# Subscription Factories for Events"
date:   2017-06-21T10:13:21Z
category: Articles
draft: true
tags:
  - Tile Pusher
  - C#
  - Event System
  - Factory Classes
description: A quick look at how I used subscription factories to manage event handlers for my tile map editor.
---

One of my current unadvertised personal projects is an open-source [tile map editor app](https://github.com/bengsfort/tile-pusher) built in Unity, and while it's no where near completion I'm starting to near the end of the proof of concept phase where all of my separate components need to start talking to each other to become a cohesive and functioning whole. Component communication in Unity projects is a pretty debated topic, and if you search around for suggestions on how to handle it you'll find a lot of conflicting answers; with most posts arguing about the usage of Singletons/statics and setting references manually. In my personal opinion all of the different approaches have their own use cases and I generally make my decision based on what I am trying to accomplish. In this particular instance I'm going to end up with a lot of different settings that will have an effect on a lot of different components; some of which will be coming and going as they see fit (such as settings popovers and toolbar tabs), so I decided to settle on a pattern where I have a single static manager instance that contains an event system that can easily be subscribed/unsubscribed from.

## High level overview

The basic high level overview of the implementation is pretty much the same as any event system, but it goes as follows:

- An `EventManager` class contains all event definitions as well as a method for subscribing and unsubscribing to events.
- The manager (`EditorManager`) contains a static instance of the current project state as well as an `EventManager` instance.
- Components can subscribe or unsubscribe to any given event at any time by passing a handler to the `EventManager`.
- Components can trigger events at any time by passing event arguments to a handler in the `EventManager`.

By using events instead of compo