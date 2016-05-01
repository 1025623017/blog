###
square = (x) -> x * x
cube = (x) -> square(x) * x
myName = "Murphy"
fill = (head, text = "nothing") ->
  "filling the #{head} with #{text} ..."
song = [
  "do", "re", "mi", "fa", "so"
]
singers = {
  leung: "rock",
  lee: "roll"
}
kids =
  elder:
    name: "leung"
    age: 11
  younger:
    name: "jenny"
    age: 8
$("#header").attr
  "class": "on"
console.log fill(myName)
outer = 1
changeNumber = ->
  inner = 24
  outer = 0
inner = changeNumber()
singing = happy = high = goHome = null
myName = "Jenny" if singing?
if happy and high
  clap()
  hahaha()
else
  goHome
date = if "friday" then "yep" else "nup"
$("h1").click ->
  $(this).css
    "border": "1px red solid"
  alert("我是h1！")
###
