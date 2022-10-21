const reviews = [
  {
    id: 1,
    name: "link",
    job: "héros du temps",
    img: (src = "./link.png"),
    text: "Link (リンク Rinku) est le protagoniste de la série The Legend of Zelda. Il a été créé en 1986 par Shigeru Miyamoto en tant que héros du premier jeu de la série, The Legend of Zelda. Son nom vient du mot anglais link (lien), car il est un lien entre le joueur et le personnage du jeu. Il est cependant possible de modifier son nom au début du jeu. Il représente en fait plusieurs incarnations d’un même personnage à travers le temps et à travers les jeux. ",
  },
  {
    id: 2,
    name: "zelda",
    job: "princesse d'Hyrule",
    img: (src = "./zelda.jpg"),
    text: "La Princesse Zelda (ゼルダ姫 Zeruda Hime) est un personnage central de la série The Legend of Zelda. Bien que la série doive son nom à ce personnage, il ne s'agit pas d'un personnage jouable dans la série principale et elle n'est pas non plus le personnage principal. Il y a même certains jeux où elle n'apparaît pas ou très peu (comme Majora's Mask ou encore Tri Force Heroes). Il s'agit d'un membre de la famille royale d'Hyrule. Elle est la plupart du temps enlevée par Ganondorf, Vaati ou un autre antagoniste et Link doit la secourir. Comme Link, elle a de nombreuses incarnations au fil des jeux. ",
  },
  {
    id: 3,
    name: "ganon",
    job: "seigneur du mal",
    img: "https://i.pinimg.com/originals/c1/f4/9d/c1f49d9c75079547213f22c31595f8e7.jpg",
    text: "Ganondorf Dragmire (ガノンドロフ Ganondorofu), est l'antagoniste le plus connu de la série Zelda. Il est présent dans la saga depuis The Legend of Zelda sous sa forme bestiale, Ganon. Il apparaît la première fois sous sa forme humaine dans Ocarina of Time, bien qu'elle ait été mentionnée dans A Link to the Past. ",
  },
  {
    id: 4,
    name: "Sheik",
    job: "guerrier du clan sheikah",
    img: (src = "./sheik.jpg"),
    text: "Sheik est un jeune homme blond aux yeux rouges. Il fait partie des derniers survivants du clan des Sheikah (son nom suggère qu'il en est le fondateur). Il arbore une tenue bleue ornée de l'œil Sheikah, symbolique de son clan.Zelda, prenant son apparence, guide Link adulte au cours de sa quête et lui apprend de nouveaux airs pour son ocarina. Elle (ou il) utilise souvent des noix Mojo pour disparaître sans laisser de trace. Cette habitude ainsi que sa tenue rappellent un peu celles des ninjas japonais. ",
  },
  {
    id: 5,
    name: "L'Arbre mojo",
    job: "gardien des kokiris",
    img: "https://pbs.twimg.com/media/FOk-Y0XXsAcyFk8?format=jpg&name=4096x4096",
    text: "L'Arbre Mojo est un personnage à part de la série, apparu dans Ocarina of Time et The Wind Waker. Esprit de la Terre et de la Forêt, le Vénérable Arbre Mojo a traversé les âges depuis la création d’Hyrule, et en connaît ainsi toutes les légendes. Il est le gardien des Kokiris et des Fées dans Ocarina of Time, ainsi que de la forêt où ils habitent, et donc des Korogus de l’Île aux Forêts dans The Wind Waker, étant pour ainsi dire leurs descendants.",
  },
];

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const buttons = document.querySelectorAll("button");

let pos = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("next-btn")) {
      pos++;

      if (pos > reviews.length - 1) {
        pos = 0;
      }
    } else if (e.currentTarget.classList.contains("prev-btn")) {
      pos--;

      if (pos < 0) {
        pos = reviews.length - 1;
      }
    } else {
      let randomNumber = pos;
      pos = Math.floor(Math.random() * reviews.length + 0);

      if (randomNumber === pos) {
        pos++;
      }
    }

    author.textContent = reviews[pos].name;
    img.src = reviews[pos].img;
    job.textContent = reviews[pos].job;
    info.textContent = reviews[pos].text;
  });
});
