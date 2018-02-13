You have been given a real JSON response our engineers work with every day. Two chunks of it have been selected for you to use. One of them are the "Program Blueprints", a list of available programs for that user and that client. The others are the "Goals", which some programs have, and some programs do not.

The code challenge is as follows:

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

### TECH
- Construct a boilerplate angular app with two views and two controllers: the dashboard view/controller and the details view/controller.
- There should be no views or controllers outside of of these two. You may create as many services / directives as you need.

### LOOKS
- As we are mobile first, the app should be optimized for 360px x 640px, portrait mode.
- For the purpose of this exercise it will only be judged at that size, so don't worry about a tablet or desktop version.
- A screenshot of our current details page is provided for guidance. The dashboard is up to you.


### INSTRUCTIONS
- Using the program_blueprints.json, construct a grid (2 or 3 columns per row, preferably using flexbox) of program icons using the blueprint's icon_url as the image, and the display_type as the unique identifier.
- Use the blueprint's title attribute to display a name underneath the icon.
- Pay special attention to the program's display order, and make sure to display them in order.

### THE MEAT
- Each icon when clicked should go a details page, where we will be given:

  - The program's icon, title, and description (where available).
  - The program's "incentive_description", telling us what we can earn and how.
  - If the "incentive_description" is null, assume there are no rewards / earnings.

- Check for any goals the program might have. To do this you must look in the goals array of the blueprint, and match up the GUID you find with a GUID in the goals.json. Inside these goals you will find an "incentive_value".
  - If the program has multiple goals, tally up the "incentive_value"s of all the goals.
  - If the program has one goal, use the incentive_value of that goal
  - Display the total incentive value in the details page. Bonus points if you also list the goals and their individual values.

- A back button should let the user go back to the dashboard to pick other programs.

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

### EXTRA CREDIT
- We will give heavy favor to candidates using native angular methods such as ng-repeat, ng-switch, ng-if, etc.
- We will also give extra credit for those using native JS methods like .reduce, .map, and .filter.

Any questions please email us. There is no time limit on this challenge, but we expect you to be done with it within a few days.