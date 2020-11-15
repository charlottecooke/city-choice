# Things I would change if I had time:

Woah, 4 hours is not long!

I made a pretty simple single page Vue application, and I used a couple of free APIs to get the requested data.

I just made the calls directly within the components - I would not do this if I had more time! I would have written a typesafe transformer outside of the app and then put the data into the store for consumption by the front end. I thought it was more useful to get it up as a PoC in the time allowed.

I would also have added tests, probably jest / ava unit tests and then also cypress tests.

I would have used the config properly, and not put the (albeit free) tokens into the raw url.

I had a couple of further ideas around the actual site, certainly it could be more attractive! But it also could be mobile first, which its not (well not really) and I would also make sure it is accessible, which I'm also pretty sure its not.

I haven't used vuex or nuxt at all, and I only very rudimentally used handlebars, which I could have done more with.

It's also only a one page application, so that could have been taken further. You can see also that my images are coming straight from the url source, which is not secure.

I would also have used a linter, maybe prettier?, and also not have used babel, and I would have re-written the start scripts, I don't like the presets!

To take this project to a production ready form, I would do all of the above, but this also has no infrastructure. I would probably put the above secrets (tokens) into AWS secrets manager or similar.


