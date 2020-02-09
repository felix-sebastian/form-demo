## Running this application

You will need to have [Node.js](https://nodejs.org/) installed on your computer to run this project. Once installed, you can either run this project locally or build it which will create minified files ready to be deployed on a server.

To run it locally just open the project directory in your terminal and run `npm start`. You can open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Running `npm test` launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Running `npm run build` builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

To see the form submission, go to [this webhook.site url](https://webhook.site/#!/64461740-176d-4c96-987c-7c1d5038b081).

## The problem

The challenge was to create a simple form which is split between 2 pages. The form needed to have client side validation and moving between the 2 pages should not cause the form to lose the information the user already entered. The user should be able to navigate back and forth using the browser's back/forward buttons. The code should be well structured and include automated tests.

## The solution

I've opted to build most of the form components from scratch such as the select box. I could have easily used some libraries for this, but I didn't want to compromise on having a consistent style accross the UI, and was afraid if I didn't do this there wouldn't be much code left to write! This probably wouldn't have been the best trade off in a commercial context but for this task I was happy to do that.

I'm using react, jest for testing, react-router to achieve the back/forward behavior and styled-components for CSS.

My testing strategy involves creating snapshots, which render the HTML for components in different states and make sure that nothing changes when it shouldn't. I'm also using react's hooks which are very testable.
