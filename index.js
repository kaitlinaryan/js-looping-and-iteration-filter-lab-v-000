// Code your solution in this file
function findMatching (list, name) {
return list.filter(function(name) {
      return name.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
