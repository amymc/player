# The Playlist Page

We would like you to create an interactive playlist viewing experience, making use of our [open source player](https://developer.vimeo.com/player). A rough design of the page is below, but feel free to take creative liberties with the look and feel.

## Your Spec

### Layout

```
 ----------------------    ----------------
|                      |   | [next video] |
|       [player]       |   ----------------
|                      |   | [next video] |
 ----------------------    ----------------
    Title                  | [next video] |
    Description            ----------------
                           | [next video] |
                           ----------------
```

### Criteria
- Choose your favorite channel on https://vimeo.com/channels
- Make an API application for your page ([documentation](https://developer.vimeo.com/api/start))
- `GET` the list of videos from channels endpoint ([`https://api.vimeo.com/channels/{channel_id}/videos`](https://developer.vimeo.com/api/endpoints/channels#GET/channels/{channel_id}/videos))
- The player should be our [open source player](https://developer.vimeo.com/player), automatically loaded with the first video in the channel
- All subsequent videos go in the list to the right of the player
- Clicking a video in the list loads it into the player and scrolls the list appropriately
- Aside from the view libraries provided (React + CSS Modules), please write everything else from scratch
    - No libraries or frameworks, but icon sets (FontAwesome, ionicoons) are fine to use


## Things We Care About
- Semantic HTML
- Purposeful CSS (clean syntax, use of the cascade, etc.)
- Modular, reusable JavaScript
- Page responsiveness
- Layouts using modern CSS (really _flex_ your skills)
- Purposeful transitions & animations

## Things We Don't Care About
- Legacy browser support

## Bonus Points For
- Loading states
- Follow Vimeo styles from our site
- General playfulness

## Getting started

1. Install yarn
    ```
    $ curl -o- -L https://yarnpkg.com/install.sh | bash
    ```
2. Install dependencies
    ```
    $ yarn install
    ```
3. Run the development server (includes live reloading)
    ```
    $ yarn serve
    ```
4. Open the page
    ```
    $ open http://localhost:8080
    ```

## Submission

1. Please answer the following questions in your README:

    1. Was the question/problem clear? Did you feel like something was missing or not explained correctly? No, it was clear.
    2. How much time did you spend on each part: understanding, designing, coding, testing? 
        - understanding, reading the API docs etc ~ 30mins
        - designing, considering the architecture of the app, layout, responsiveness etc - this was all done in tandem with coding, I tried out things to see how they worked, if it wasn't working well then I changed it as I was progressing.
        - coding (+ designing, + testing in browser) ~ 6 hrs. One of the biggest issues I had was scrolling the selected video to the top of the list on click. It took a while to figure out how to pass the correct ref from the ListItem element to the parent Playlist component. To be honest I'm not sure this is the best approach so if you have alternative suggestions let me know!
        - testing
            - testing in browser - again this was done in tandem with coding.
            - unit testing and e2e testing ~ 2 hrs. I had some problems with babel and the presets I used for jest. I'm not experienced with Cypress, so it took a bit of time to read the docs.
    3. What would you have done differently if you have more time or resources? I had a few issues that I didn't get resolved:
        - I was new to CSS modules, I wanted to create global variables for the media query breakpoints but I didn't figure it out yet. So far I just managed to create local variables but not global ones. 
        - Having said that, if I was setting up the project myself my preference would be for a CSS-in-JS solution like styled components or emotion. I like the idea of a self-contained module in one file. I guess it's not relevant for this project in particular, but with styled components/emotion there's no webpack setup involved and it's stright-forward to dynamically change CSS based on component props.
        - I had some problems loading an svg, eventually I bypassed the webpack setup and just imported it like this `import Spinner from 'react-svg-loader!./assets/spinner.svg';`. Obviously that's not ideal. As a rule I would prefer to keep all loader setup in the webpack config.
        - In the e2e tests I would have liked to check that the playlist item had been scrolled by checking this `$item.offsetTop === $item.offsetParent.scrollTop`. I'm not experienced with Cypress so I didn't figure out how to do this, instead I check that the position of the $item from the top is less than 5. It's a bit fragile, if there are changes to the css this could break. 
    4. Are there any performance bottlenecks with your solution? if so, what are they and what can you do to fix them/minimize their impact? Fetching the data on page load is slow. We could use a service worker and cache the response. This would also facilitate offline access.
    5. How would your solution cope if the API was slow, broken, or returned incorrect data? At the moment, it doesn't, it just throws an error. As above, if we cached the response we could view that until the API was functional again.
    6. Anything else you want to share about your solution or the problem? You can run the unit test with `yarn test` ans the e2e tests with `yarn cypress`. You can view the app online [here](http://www.amymccarthy.co/player/)

2. Run the submit script to create a gist of your work to send back to us

    ```
    $ yarn submit
    ```

    **_PS:_** The `yarn gist` command will flatten your directory structure into the file name in the gist, that is ok.

    **_PPS:_** Your built assets (bundle.js & bundle.css) will be included in the gist, that's also ok.
