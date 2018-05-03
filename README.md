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

    1. Was the question/problem clear? Did you feel like something was missing or not explained correctly?
    2. How much time did you spend on each part: understanding, designing, coding, testing?
    3. What would you have done differently if you have more time or resources?
    4. Are there any performance bottlenecks with your solution? if so, what are they and what can you do to fix them/minimize their impact?
    5. How would your solution cope if the API was slow, broken, or returned incorrect data?
    6. Anything else you want to share about your solution or the problem?

2. Run the submit script to create a gist of your work to send back to us

    ```
    $ yarn submit
    ```

    **_PS:_** The `yarn gist` command will flatten your directory structure into the file name in the gist, that is ok.

    **_PPS:_** Your built assets (bundle.js & bundle.css) will be included in the gist, that's also ok.
