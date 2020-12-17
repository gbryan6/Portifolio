const sectionSkills = document.querySelector(".about-me__skills--section");
const skill = document.querySelector(".about-me__skill");

const learningSkill = document.querySelector("#skill__learning");
const learningSection = document.querySelector("#section__learning");

const curiosity = document.querySelector(".curiosity__reading-trade");

const skills = [
  {
    id: "1",
    image: "./iconSkills/Js.svg",
    name: "JAVA SCRIPT",
    alt: "Java Script logo",
  },
  {
    id: "2",
    image: "./iconSkills/Figma.svg",
    name: "FIGMA",
    alt: "Figma logo",
  },
  {
    id: "3",
    image: "./iconSkills/Git.svg",
    name: "GIT",
    alt: "Git logo",
  },
  {
    id: "4",
    image: "./iconSkills/Html.svg",
    name: "HTML",
    alt: "HTML logo",
  },
  {
    id: "5",
    image: "./iconSkills/Css.svg",
    name: "CSS",
    alt: "CSS logo",
  },
];

const skillsLearning = [
  {
    id: "1",
    image: "./iconSkills/Ts.svg",
    name: "TYPESCRIPT",
    alt: "TypeScript logo",
  },
  {
    id: "2",
    image: "./iconSkills/React.svg",
    name: "REACT",
    alt: "REACT logo",
  },
  {
    id: "3",
    image: "./iconSkills/Sql.svg",
    name: "MySQL",
    alt: "MySQL logo",
  },
  {
    id: "4",
    image: "./iconSkills/English.svg",
    name: "ENGLISH",
    alt: "USA logo",
  },
];

const curiosities = [
  {
    id: "1",
    content:
      "Para identar um código nas ferramentas de desenvolvedor, você precisa somente clicar nas chaves no canto inferior esquerdo.",
  },
  {
    id: "2",
    content:
      "Estou há 2 anos na área tecnologia, desde que entrei na faculdade. Estou me identificando e estudando através de projetos.",
  },
  {
    id: "3",
    content: "Este é meu primeiro site com HTML, CSS e JavaScript.",
  },
];

let position = 0;

skillsLearning.map((tecno) => {
  const skillCloneL = learningSkill.cloneNode(true);
  skillCloneL.setAttribute("id", tecno.id);
  skillCloneL.setAttribute("alt", tecno.alt);
  skillCloneL.querySelector("img").src = tecno.image;
  skillCloneL.querySelector("#skill__name").innerHTML = tecno.name;
  learningSection.appendChild(skillCloneL);
});

skills.map((tec) => {
  const skillClone = skill.cloneNode(true);
  skillClone.setAttribute("id", tec.id);
  skillClone.setAttribute("alt", tec.alt);
  skillClone.querySelector("img").src = tec.image;
  skillClone.querySelector(".about-me__skill--name").innerHTML = tec.name;
  sectionSkills.appendChild(skillClone);
});

setInterval(() => {
  curiosity.innerHTML = curiosities[position].content;
  position++;
  if (position > 2) {
    position = 0;
  }
}, 10000);

window.addEventListener("scroll", function(){
  let navbar = document.querySelector(".landing__nav-bar");

  if(window.pageYOffset >= 4.5){
  navbar.setAttribute("id", "on-roll")
  }else if(window.pageYOffset < 3){
  navbar.setAttribute("id","");
  }
});
