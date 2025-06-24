Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
    A popup alert box appears showing the message Hello world!

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
    A popup alert box appears showing the message Hello world! with the text input field to enter a value
What is the return value of `prompt`?
    If I entered a value (and clicked OK), then prompt() would return the value.
    If I click cancel, the prompt() would return null.
    If I click ok without entering value then prompt() will return "".


