# [Rock Paper Scissors](https://louvang.github.io/rockpaperscissors/)

This is a website that allows you to click and play Rock Paper Scissors against the "Computer". The prompt comes from [TheOdinProject](https://theodinproject.com/) in an effort to refresh myself with JavaScript and DOM.

<p align="center"><a href="https://louvang.github.io/rockpaperscissors/" target="_blank"><img src="https://louvang.github.io/rockpaperscissors/img/preview.png" alt="Rock Paper Scissors Preview" width="750px" /></a></p>

## Gameplay

You, the player, must choose the 'weapon' of your choice to beat the computer. As with all games of Rock Paper Scissors, you never quite know what your opponent will play. It is simply by chance whether or not you will win.

Whichever player reaches 5 points first wins the game. Simply click on the "Play Again" button to start over.

## About Code

This game uses plain vanilla JavaScript. There are two JS files. The `console.js` file loops the game for 5 rounds and logs each play in the console. The working file hooked up to the index page is `script.js` which uses DOM to make changes on the browser.

## Thoughts

This isn't my first time doing a project like this. I've actually done this exact project before although in a much different fashion and when I was less-versed with JavaScript. This time around, I find myself cementing the `addEventListener()` method.

When I started learning React, I had a very basic understanding of `addEventListener()` and the parameters that functioned best with it. This time around, it's easier to understand that the method doesn't need you to call a function.

This is a no-no as it will execute the function as soon as the page loads:

```javascript
btn.addEventListener('click', alertFunction());
```

We want the function to execute when the button is clicked. So we need to take out the parentheses as follows:

```javascript
btn.addEventListener('click', alertFunction);
```

The second parameter is the 'listener'. It's an object and it's waiting for the button to be clicked. As soon as that happens, the listener fires off what it's been told to do.

Now because this 'listener' is an object and not a function, your parameters will have to be added through `e` aka the event. All you need to do is define a parameter and reference it:

```javascript
const playPaper = document.querySelector('#paper');
playPaper.addEventListener('click', playRound);
playPaper.selection = 'paper'; // your parameter

// to access the parameter in your function
const playRound = (e) => {
  console.log(e.currentTarget.selection); // logs "paper"
};
```

### Possible Future Projects

I feel like Rock Paper Scissors would be a good way to cement React and its state-changing mechanics. I struggle a bit with React so I may consider making a React version of the game.
