---
layout: post.html
title:  "Introducing: Flying is Hard"
date: 2017-07-20T19:00:00Z
project: Flying is Hard
category: Dev Logs
description: A 3d-touch movement-based puzzle game for iOS.
---


I get bored of projects really easily. My computer is literally a graveyard of game prototypes in various stages of completion. A month or so ago I was thinking about 3D Touch on iOS and in what ways you could utilise it for interesting controls in a game, and after a whole lot of not coming up with anything the idea of jet engines and thrust kept popping into my head; so I decided to play around with that concept. What I got was the following; a little alien blasting around with upward thrust being mapped to 3d touch and horizontal movement mapped to moving your finger left and right.

<div class="streamable-container" style="max-width: 260px;">
	<div style="width:100%;height:0px;position:relative;padding-bottom:177.723%;">
		<iframe src="https://streamable.com/s/8d6j9/wqofpu" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
	</div>
</div>

As it turns out, this combination makes for some pretty enjoyable movement! I decided to try to expand upon the idea by throwing in a sort of section/waypoint system and some obstacles for the alien to avoid. Unsurprisingly it only improved things!

<div class="streamable-container" style="max-width: 260px;">
	<div style="width:100%;height:0px;position:relative;padding-bottom:175.980%;"><iframe src="https://streamable.com/s/zq3lh/fzabfc" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
</div>

My plan is to have the core loop involve different worlds, each one with multiple stages that are made up of a series of sections, each section being a sort of movement puzzle that takes up only a single screen. The context is you are trying to escape certain situations; and completing each section will _unlock_ the next until there are no more left in that stage. I think this will allow me to have some fun with level design and I think it will give me a lot of options in terms of obstacles.

I made a temporary little pixel art space ship to replace Kenney's alien dude to try to start capturing that mood, and prototyped out a potential first 3 sections for the first stage. These are meant to be used for teaching the player how to control the character in some mostly safe environments.

<div class="streamable-container" style="max-width: 260px;">
	<div style="width:100%;height:0px;position:relative;padding-bottom:177.723%;"><iframe src="https://streamable.com/s/iqd2s/zjeash" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
</div>

I also added some variable intensity pixel art flames in for good measure!

<div class="streamable-container" style="max-width: 260px;">
	<div style="width:100%;height:0px;position:relative;padding-bottom:177.723%;"><iframe src="https://streamable.com/s/mq6ly/wzsjss" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
</div>

I haven't decided whether or not the game will be brutally difficult or not; that said I am planning on also forking the codebase and having a PC/Mac/Linux port of the game with bigger stages and more exploration, so perhaps that may be a better avenue to add increased difficulty.

That's all for now! Stay tuned for more Flying is Hard logs, and maybe follow along on twitter [@bengsfort](https://twitter.com/bengsfort).