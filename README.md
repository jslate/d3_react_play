This project is just a handful of charts I created with D3 and React for wow week.

The basic ideas come from this great tutorial (subscription required): https://frontendmasters.com/teachers/shirley-wu/

There are 5 charts:

1. The [simplest chart](src/Chart.js) I could make in the 20 minutes or so before demo.
2. A [temperature chart], rendering the axes with D3, as described in the tutorial. I did something not quite right, and to get the axes to show up, you have to cause an update by clicking on one of the points.
3. A [slightly different temperature chart](src/TemperatureChart.js), attempting to render the axes with React. You can see there are a few random tweaks (`x="-7"`) to make that work. I liked the idea of having all the rendering done in React, and maybe it would be possible to do it w/out the random tweaks with a bit of care.
4. A [thrive experience report](src/ThriveExperienceReport.js) -- similar to the second temperature report, but using data actually related to the point of this excercise.
5. [Twitter scatterplots](src/TwitterCharts.js) of likes vs. replies just for fun.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
