let id = 1

setInterval(function () {
  document.getElementById('radio' + id).checked = true
  id++
  if (id >= 4) {
    id = 1
  }
}, 3500)
