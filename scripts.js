const sectionSkills = document.querySelector('.about-me__skills--section');
const skill = document.querySelector('.about-me__skill');


const sectionSkillsLearning = document.querySelector('.about-me__skills--section .learning');

const curiosity = document.querySelector('.curiosity__reading-trade');

const skills = [
    {
        id:"1",
        image: "./iconSkills/Js.svg",
        name: 'JAVA SCRIPT',
        alt: 'Java Script logo'      
    },
    {
        id:"2",
        image: "./iconSkills/Figma.svg",
        name: 'FIGMA',
        alt: 'Figma logo'       
    },
    {
        id:"3",
        image: "./iconSkills/Git.svg",
        name: 'GIT',
        alt: 'Git logo'      
    },
    {
        id:"4",
        image: "./iconSkills/Html.svg",
        name: 'HTML',
        alt: 'HTML logo'      
    },
    {
        id:"5",
        image: "./iconSkills/Css.svg",
        name: 'CSS',
        alt: 'CSS logo'      
    },
     
];

const skillsLearning =  [
    {
        id:"1",
        image: "./iconSkills/Ts.svg",
        name: 'TYPESCRIPT',
        alt: 'TypeScript logo'      
    },
    {
        id:"2",
        image: "./iconSkills/Ts.svg",
        name: 'TYPESCRIPT',
        alt: 'TypeScript logo' 
    },
    {
        id:"3",
        image: "./iconSkills/Ts.svg",
        name: 'TYPESCRIPT',
        alt: 'TypeScript logo'
    },
    {
        id:"4",
        image: "./iconSkills/Sql.svg",
        name: 'SQL',
        alt: 'SQL logo'      
    },
]

const curiosities = [
    {
        id: "1",
        content: "Para identar um codigo nas ferramentas de desenvolvedor, voce precisa somente clicar nas chaves no canto inferior esquerdo"
    },
    {
        id:"2",
        content: "Tem somente 2 anos que estou no ramo da tecnologia."
    },
    {
        id:"3",
        content: "Este e meu primeiro site com HTML, CSS, JavaScript."
    }
]

skills.map( tec => {
    const skillClone = skill.cloneNode(true);
    skillClone.setAttribute("id", tec.id);
    skillClone.setAttribute("alt", tec.alt);
    skillClone.querySelector("img").src = tec.image;
    skillClone.querySelector(".about-me__skill--name").innerHTML = tec.name;
    sectionSkills.appendChild(skillClone);
});





let position = 0;

setInterval(() => {
    curiosity.innerHTML= curiosities[position].content;
    position ++;
    if(position > 2 ){
        position = 0;
    }
}, 8000);




