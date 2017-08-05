---
layout: post.html
title:  "A new character emerges!"
date: 2017-08-05T19:00:00Z
project: Flying is Hard
category: Dev Logs
description: Gone is the weird pixelated space ship thing, in its place now is a radical spaceboarder.
---

In the last log I talked about my journey to come up with an overall aesthetic for the game worlds, but one thing was still untouched: the weird pixelated ship thing I was using for the player. Once I finished that I decided that this had to change before I switched back over to level design and gameplay programming, so I rolled up my sleeves, made myself a cup of tea, put on Mythbusters and opened up [Aseprite](https://www.aseprite.org/).

I decided to use Aseprite for this instead of [Sketch](https://www.sketchapp.com/) because the character is going to be much smaller than the environment assets, and Sketch is pretty terrible when it comes to controlling how it exports/antialiases small assets; especially when you are aiming for pixel-perfect.

My original idea for the character was to have him wearing a traditional-looking jetpack, and then have some sort of secondary engine attached to something on him for horizontal movement. I was pretty set on this so that's what I set out to make, and I wound up with the guy below.

<center>
![Jetpack man!](/assets/flying-is-hard-character/Player-256x256-v1.png)
</center>

He was alright, but I wasn't really feeling the jetpack now that it was out of my head. Plus, visualizing the reason behind the horizontal movement would be way too hard with this sort of character. Luckily [BeefEX](https://github.com/BeefEX) on [Pixeland](https://pixeland.io) sent me a video from [Tested.com](https://www.youtube.com/user/testedcom) with a flight suit ([video here](https://www.youtube.com/watch?v=vI8E4cda_ww)) which sparked some madness in my brain. In the video, the flight suit has two jet engines on each hand which apparently helps with stability, so I thought I could try to replicate something like that for visualizing the horizontal movement. I started with trying to add some jet engines to the dudes feet, but as I was drawing that up I thought "well, why can't it be like a jet powered skateboard thing?" and, well... that sounded way cooler.

<center>
![Spaceboarder](/assets/flying-is-hard-character/Player-256x256_idle.gif)
</center>

I also recorded a timelapse of the process, which you can check out below!

<iframe width="560" height="315" src="https://www.youtube.com/embed/8efk3Aq-SP4" frameborder="0" allowfullscreen></iframe>

I added some states for falling (raises him up a bit), moving upwards (crouches a bit), moving left and right while falling, moving left and right while thrusting upwards, and an idle state then imported him into Unity. I then decided to write my own animator since the state logic would have been a little bit frustrating to deal with in the Animator and the animations were very basic, for example in some instances just a single frame. Since the script was a simple system it was pretty fast to implement, leaving me enough time to play around with adding particles systems into the mix before passing out from exhaustion, so that's exactly what I did!

<div class="streamable-container" style="max-width:260px;">
	<div style="width: 100%; height: 0px; position: relative; padding-bottom: 177.723%;"><iframe src="https://streamable.com/s/svhiw/ycnzuv" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe></div>
</div>

I attached two particle systems and hooked them up to a script that adjusts their speed, size, and emission rate based on a normalized amount of player input. I recorded yet another timelapse when implementing this one as well, which you can see below!

<div class="streamable-container">
	<div style="width:100%;height:0px;position:relative;padding-bottom:62.500%;"><iframe src="https://streamable.com/s/b4zoc/xmeghp" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
</div>

It's not quite finished yet, for example I still need to hook up particle systems to the characters arm jet engines as well as tweak a few things here and there; but with this the design/aesthetic of the game has evolved quite a lot in the past week and its finally starting to look like something cohesive, which I am incredibly happy about. In terms of visuals at this time my current `@todo` includes:

- Update tree swaying shader to react to player
- Add water/river shader to make rivers in the worlds more lively
- Come up with starting platform design for first world
- Hook up a particle system to the main characters hand jet engines

I may put these on the backburner for a little bit and move to level design or gameplay programming to give myself a break from artwork and change things up. I need to figure out whether or not I'm going to keep the stage timer (not sure its really relevant, unless maybe for speed run strats) and finish up some game manager/game state code that I've been ignoring for a few weeks.

That's all for this log though, stay tuned for more Flying is Hard logs, and maybe follow along on twitter [@bengsfort](https://twitter.com/bengsfort).