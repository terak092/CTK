function Graph() {
  this.nodes = [];
  this.graph = {};
  this.end = null;
  this.start = null;
}

Graph.prototype.reset = function() {
  for (var i = 0; i < this.nodes.length; i++) {
    this.nodes[i].searched = false;
    this.nodes[i].parent = null;
  }
}

Graph.prototype.setStart = function(character) {
  this.start = this.graph[character];
  return this.start;
}

Graph.prototype.setEnd = function(character) {
  this.end = this.graph[character];
  return this.end;
}


Graph.prototype.addNode = function(n) {
  // Node into array
  this.nodes.push(n);
  var title = n.value;
  // Node into "hash"
  this.graph[title] = n;
}

Graph.prototype.getNode = function(character) {
  var n = this.graph[character];
  return n;
}
