/**
 * <div id="parent">
 * <div id="child1">
 * <h1></h1>
 * <h2></h2>
 * </div>
 * <div id="child2">
 * <h1></h1>
 * <h2></h2>
 * </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


const heading=  React.createElement("div", {id:"parent", className:"abc"},[React.createElement("div",{id:"child1", className:"abc"},[React.createElement("h1", {}, "I am an H1 tag"),React.createElement("h2", {}, "I am an H2 tag")]),React.createElement("div",{id:"child1", className:"abc"},[React.createElement("h1", {}, "I am an H1 tag"),React.createElement("h2", {}, "I am an H2 tag")])]);
console.log(heading);


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
