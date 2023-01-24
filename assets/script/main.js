let interaction = document.querySelector("a:nth-of-type(11)");

interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);

function jumpHandler() {
  interaction.classList.toggle("jump");
}

//

let frontend = document.querySelector("a:nth-of-type(1)");

frontend.addEventListener("click", spin);
frontend.addEventListener("animationend", spin);

function spin() {
  frontend.classList.toggle("frontend");
}

//

let design = document.querySelector("a:nth-of-type(2)");

design.addEventListener("click", escape);
design.addEventListener("animationend", escape);

function escape() {
  design.classList.toggle("design");
}

//

let and = document.querySelector("a:nth-of-type(3)");

and.addEventListener("click", vergroting);
and.addEventListener("animationend", vergroting);

function vergroting() {
  and.classList.toggle("and");
}

//

let development = document.querySelector("a:nth-of-type(4)");

development.addEventListener("click", verkleining);
development.addEventListener("animationend", verkleining);

function verkleining() {
  development.classList.toggle("development");
}

//

let sprint5 = document.querySelector("a:nth-of-type(5)");

sprint5.addEventListener("click", vormveranderer);
sprint5.addEventListener("animationend", vormveranderer);

function vormveranderer() {
  sprint5.classList.toggle("sprint5");
}

//

let fix = document.querySelector("a:nth-of-type(6)");

fix.addEventListener("click", schudder);
fix.addEventListener("animationend", schudder);

function schudder() {
  fix.classList.toggle("fix");
}

//

let the = document.querySelector("a:nth-of-type(7)");

the.addEventListener("click", disco);
the.addEventListener("animationend", disco);

function disco() {
  the.classList.toggle("the");
}

//

let flow = document.querySelector("a:nth-of-type(8)");

flow.addEventListener("click", valler);
flow.addEventListener("animationend", valler);

function valler() {
  flow.classList.toggle("flow");
}

//

let user = document.querySelector("a:nth-of-type(9)");

user.addEventListener("click", springer);
user.addEventListener("animationend", springer);

function springer() {
  user.classList.toggle("user");
}

//

let interface = document.querySelector("a:nth-of-type(10)");

interface.addEventListener("click", vervormder);
interface.addEventListener("animationend", vervormder);

function vervormder() {
  interface.classList.toggle("interface");
}