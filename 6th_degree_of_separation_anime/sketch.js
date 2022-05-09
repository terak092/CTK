//based on Daniel Shiffman's Breadth-First Search
var data;
var graph;
var dropdown;
var dropdown_2;
let callCount = 0;

function preload() {
  data = loadJSON('anime.json');
}

function setup() {
  noCanvas();
  graph = new Graph();
  dropdown = createSelect();
  dropdown.changed(bfs);
  dropdown_2 = createSelect();
  dropdown_2.changed(bfs);

  console.log(data);

  var shows = data.shows;
  
  console.log(shows)
  
  for (var i = 0; i < shows.length; i++) {
    var show = shows[i].title;
    var cast = shows[i].cast;
    var showNode = new Node(show);
    graph.addNode(showNode);

    for (var j = 0; j < cast.length; j++) {
      // if(show[i].character){
        var character = shows[i].cast[j].character;
        var actor = shows[i].cast[j].actor;
        var characterNode = graph.getNode(character);
        var actorNode = graph.getNode(actor);
        if (characterNode == undefined) {
          characterNode = new Node(character);
          dropdown.option(character);
          dropdown_2.option(character);
        }
        if (actorNode == undefined) {
          actorNode = new Node(actor);
        }
      
        graph.addNode(characterNode);
        graph.addNode(actorNode);
        // characterNode.addEdge(showNode)
        showNode.addEdge(characterNode);
        actorNode.addEdge(characterNode);
      }
  }
}

function bfs() {
  graph.reset();
  var start = graph.setStart(dropdown.value());
  var end = graph.setEnd(dropdown_2.value());
  print(graph)
  print(start)
  print(end)
  if(start && end){
    console.log(start);

    var queue = [];


    start.searched = true;
    queue.push(start);

    while (queue.length > 0) {
      var current = queue.shift();
      if (current == end) {
        console.log("Found " + current.value);
        break;
      }
      var edges = current.edges;
      for (var i = 0; i < edges.length; i++) {
        var neighbor = edges[i];
        if (!neighbor.searched) {
          neighbor.searched = true;
          neighbor.parent = current;
          queue.push(neighbor);
        }
      }
    }

    var path = [];
    path.push(end);
    var next = end.parent;
    while (next != null) {
      path.push(next);
      next = next.parent;
    }
    
    var txt = '';
    for (var i = path.length - 1; i >= 0; i--) {
      var n = path[i];
      txt += n.value
      if (i != 0) {
        txt += ' -> '
        callCount += 1;
      }
    }
    createP(txt);
    
    var removeChild;
    let menu = document.getElementById('menu');
  }
function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
      txt
    ],
    // Make a container element for the list
    listContainer = document.createElement('div'),
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
    for (c= 10; c <numberOfListItems;){
      
    }
}


}