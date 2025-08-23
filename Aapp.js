
// this is very confusing structure that's why we use JSX
const div = React.createElement(
  "div",
  {id:"parent"},
  React.createElement(
    'div',
    {id:"child"},
    [React.createElement('h1',{},"Hi There"),React.createElement('h1',{},"Hi There")]
  ));







const heading = React.createElement(
  "h1", {id:"heading"}, "Hello world from react"
);

console.log(heading); //object

//we have created our react element , now we need to render it, so we will use ReactDOM for that.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);



