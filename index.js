function getFirstSelector(selector) {
  const getSelector = document.querySelector(selector)

  return getSelector;
}


function nestedTarget() {
  const getTarget = document.querySelector('#nested .target')

  return getTarget;
}



function deepestChild() {
  const node = document.getElementById("grand-node").querySelectorAll("div")
  return node[node.length - 1]
  }




function increaseRankBy(n) {
  let rank = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rank.length; i++) {
  rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
  return rank;
}
