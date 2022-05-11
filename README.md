# oop-navbar

This is an exercise to construct a navigation bar in TypeScript using the principles of object-oriented programming (OOP).

The navigation bar itself and the items in the navigation bar are all objects. They share abstract properties and are all extensions of the same abstract class.

For an example implementation of this navigation bar, see [OOP Navigation Bar](https://jsfiddle.net/manototh/3nat2L5o/15/) on JSFiddle.

*I coded this project as part of a [Follow the Pattern](https://followthepattern.net/learn) course.*

## Creating your navigation bar

To create your navigation bar, follow these steps:

1. Create a copy of the file `source\oop-navbar.ts`, and open it with your text editor.
2. At the bottom of the file, delete the example.
3. Create a `NavBar` object, specifying the title of the navigation bar in a string-type parameter.
4. Create a `NavBarItem` object for each item in your navigation bar. Each `NavBarItem` object has two parameters. The first parameter is the parent item which must be another `NavBarItem` object. The second parameter is a string which specifies the text displayed in the navigation bar item. For the first level of items, the parent item is the navigation bar itself (the `NavBar` object).
5. Call the `SetItems` method of the `NavBar` object, specifying all the `NavBarItem` objects that you have created as the parameters.
6. Call the `Render` method of the `NavBar` object. This returns the rendered HTML elements. Add the return value to the DOM with a standard JavaScript method like `append`.
7. Compile the TypeScript code with a tool like Node.js.
8. Link the compiled Javascript code in the header of the HTML file where you want to add the navigation bar.
9. In the HTML file, load the Foundation framework. For more information, see the [Foundation documentation](https://get.foundation/sites/docs/installation.html).

As a result, you have created your navigation bar.