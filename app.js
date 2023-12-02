// Rendering Element using Javascript 

// how to create nested html using js

// ReactElement(Object) => HTML(Browser Understands)

/**
 * <div>
 *    <div id:"child1">
 *          <h1></h1>
 *   </div>
 *  <div id:"child2">
 *          <h1></h1>
 *   </div>
 * </div>
 */

// Simple
// const parent = React.createElement("h1",{},"Kamusta")

// with one child 

// const parent = React.createElement("div",{id:"paremt"},
// React.createElement("div",{id:"child"}, 
// [
//     React.createElement("h1",{id:"elder"},"Nestesd" ),
//     React.createElement("h1",{id:"younger"},"Nestesd Sibling" )
// ]
// )
// )

// with two child

const parent = React.createElement("div",{id:"paremt"},
[
    React.createElement("div",{id:"child1"}, 
[
    React.createElement("h1",{id:"elder"},"Nestesd" ),
    React.createElement("h1",{id:"younger"},"Nestesd Sibling" )
]
),
React.createElement("div",{id:"child2"}, 
[
    React.createElement("h1",{id:"elder2"},"Nestesd2" ),
    React.createElement("h1",{id:"younger2"},"Nestesd Sibling2" )
]
)
]
)


const heading = React.createElement(
    "h1",
{id:"title" ,xyz: "roger"},
"Hello from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
             
root.render(parent);

console.log(parent)