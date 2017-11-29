import React from 'react';

//connnect to app.jsx and import d3 function from apjsx
//call 
const reactComponents = {};

reactComponents.getData = function() {
let nodeList = [];  
let mytree;

class TreeNode {
  constructor(name) {
    this.label = name;
    this._children = [];
  }
}

React.Component.prototype.componentWillMount = function() {
  
  nodeList.push(new TreeNode(this.constructor.name));
  // console.log(` Will Mount: ${this.constructor.name}`)
  this.componentDidMount = function() {
   console.log('hello')
    for (let i = 0; i < nodeList.length; i += 1) {
      if (nodeList.length === 1) {
    
        // mytree = nodeList.pop();
        break;
      }
      if (nodeList[i].label === this.constructor.name) {
        nodeList[i - 1]._children.push(nodeList[i])
   
        nodeList.splice(i, 1);
      }
    }
    // console.log(` Did Mount: ${this.constructor.name}`)
    if (this.constructor.name === 'App') {
      console.log(mytree);
    }    
  }
 }
 return nodeList;
}

function changeLabels(obj) {
  for (let property in obj) {
   if (obj.hasOwnProperty(property)) {
    if (typeof obj[property] == "object") {
     //console.log( " it is an object ",  obj[property])
     changeLabels(obj[property]);
     if (property === "_children") {
      obj["children"] = obj[property];
      delete obj[property];
     }
    } else {
 
     if (property === "label") {
      obj["name"] = obj[property];
      delete obj[property];
     }
 
     //console.log(property , "   " , obj[property]);
 
    }
 
   }
 
  }
 
 }


 const Component = React.Component;
 
 export default reactComponents;
 export { React, Component };

  



