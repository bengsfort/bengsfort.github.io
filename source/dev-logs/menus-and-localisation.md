---
layout: post.html
title:  "Menus and Localisation"
date: 2017-08-01T19:00:00Z
project: Flying is Hard
category: Dev Logs
description: Continuing on the gameplay coding hiatus with some menu creation and a dash of localisation.
---

With the first iteration of in-game UI behind me I decided to continue my gameplay programming break and try to get a prototype main menu made up so the project would feel more like an actual game. Even though it's a prototype menu I wanted it to feel cohesive with the stuff that's already been done, so I tried whipping together a title screen logo using the same colour palette and assets.

<center>
![Flying is Hard logo](/assets/menus-and-localisation/flying-is-hard-logo.png)
</center>

I'm actually quite pleased with it and may keep the concept for this logo around but will probably end up changing up the typography. From there I needed to set up the rest of the menu structure, and for this mostly placeholder iteration decided to keep it super basic and didn't really spend any time on design outside of moving some text around within Unity. I used the same colour palette and fonts I've been using throughout the project to tie everything together.

![Menus](/assets/menus-and-localisation/menus.png)

While this is a quick prototype menu I do want it to be the foundation of the final menu design, so I tried placing things in a pleasing way. My vision for the final menu includes one of the worlds in the background with a slight blur/frosted glass overlay for some ambience, so I tried positioning things with that in mind.

Even though technically that was all I needed to do, I couldn't help but want to spice it up a bit. So with spiciness in mind I added some basic transitions to the different navigation states and threw some localisation into the mix.

<div class="streamable-container" style="max-width: 260px;">
	<div style="width:100%;height:0px;position:relative;padding-bottom:177.867%;"><iframe src="https://streamable.com/s/555dd/tqgmse" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
</div>

I made the transitions using the in-editor Animator, so those are pretty basic. The localisation wasn't too hard to add either, and actually kind of fun to implement. I have an `enum` of languages I can support, then that `enum` gets stored in a localisation manager as well as player prefs for cross-session persistence. From there, each translatable string gets assigned a `MonoBehaviour` that pulls the active language from the localisation manager on initialization and subscribes to a `LanguageChanged` event that is exposed by the localisation manager. Whenever the player switches languages it then updates Player prefs and dispatches a `LanguageChanged` event to all translatable strings with the new active language.

```csharp
// LocalisationText
namespace FlyingIsHard.Assets.Bengsfort.Localisation.Components
{
    // @todo: this should be managed better and should maybe read from a json or 
    // xml file with word/phrase lookups so that it isn't handled per-object in-editor.
    public class LocalisationText : MonoBehaviour
    {
		// The UI label
        public Text label;
		// Essentially a multi-dimensional array of strings + language ID
        public LocalisedString[] options;
		// Dictionary of strings for easier lookup
        private Dictionary<AvailableLanguages, string> m_StringDict = new Dictionary<AvailableLanguages, string>();

		// Subscribe to the LocalisationManager on awake and build the string dictionary
        private void Awake()
        {
            // Subscribe to change events
            LocalisationManager.languageChanged += OnLanguageChanged;
            // Build the dictionary of strings
            for (int i = 0; i < options.Length; i++)
                m_StringDict.Add(options[i].language, options[i].content);
        }

		// Update the label on start
        private void Start()
        {
            UpdateLabelWithLanguage(LocalisationManager.GetCurrentLanguage());
        }

		// Update the label whenever the language gets changed
        public void OnLanguageChanged(object sender, LanguageChangedEventArgs e)
        {
            UpdateLabelWithLanguage(e.activeLanguage);
        }

        // Update the label based on a new language
        public void UpdateLabelWithLanguage(AvailableLanguages language)
        {
            label.text = m_StringDict.ContainsKey(language)
                ? m_StringDict[lang]
                : m_StringDict[AvailableLanguages.English];
        }
    }
}
```

The core functionality of the localisation manager works, but the current translatable strings implementation isn't very scalable as it requires me to put every translation on every instance of text, which is very error prone. What I will end up doing is hooking the translatable strings up to some sort of dictionary that will have all of the translations for a given text ID, that way I only have to update one file as opposed to a lot of individual game objects.

Aaaaand cut! Stay tuned for more Flying is Hard logs, and maybe follow along on twitter [@bengsfort](https://twitter.com/bengsfort).