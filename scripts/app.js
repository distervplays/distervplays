const nodeCreation = new NodeCreationModule();

const projNodes = {
    project1: nodeCreation.ProjectNode(
        (title = "Project 1"),
        (description =
            "A scalable and efficient backend system for a high-traffic web application."),
        (tools = ["Javascript", "PHP", "HTML"]),
        (codeUrl = "https://github.com/Dinandpower?tab=repositories")
    ),
};

const skillNodes = {
    backendNode: nodeCreation.SkillNode(
        (title = "Backend Development"),
        (description =
            "Proficient in building scalable and efficient backend systems using a variety of technologies including Node.js, Express, Python, PHP, MySQL, MongoDB, and PostgreSQL."),
        (skills = [
            "Node.js",
            "Express",
            "Python",
            "PHP",
            "MySQL",
            "MongoDB",
            "PostgreSQL",
        ])
    ),
    mlNode: nodeCreation.SkillNode(
        (title = "Machine Learning"),
        (description =
            "Experienced in developing and deploying machine learning models using Python, TensorFlow, PyTorch, scikit-learn, and Matplotlib."),
        (skills = [
            "Python",
            "TensorFlow",
            "PyTorch",
            "scikit-learn",
            "Matplotlib",
        ])
    ),
    frontendNode: nodeCreation.SkillNode(
        (title = "Frontend Development"),
        (description =
            "Skilled in building responsive and visually appealing user interfaces using technologies like React, Next.js, and Tailwind CSS."),
        (skills = ["React", "Next.js", "Tailwind CSS"])
    ),
};

const expNodes = {
    exp1: nodeCreation.ExperienceNode(
        (company = "GrafiStore"),
        (jobFunction = "Machine Learning"),
        (description = `As part of my education at Graafschap College, I completed an unpaid position to gain practical experience. 
                        I developed a machine learning API to help the company assess the benefits of implementing machine learning.`),
        (date = "2024 - 2025")
    ),
};

const eduNodes = {
    kleinBorculo: nodeCreation.EducationNode(
        (education = "VSO Klein Boruclo"),
        (educatioType = "VMBO - TL"),
        (date = "2019 - 2023")
    ),
    graafschap: nodeCreation.EducationNode(
        (education = "Graafschap College"),
        (educatioType = "Software Developer"),
        (date = "2023 - PRESENT")
    ),
};

$(document).ready(() => {
    const skillsContainer = $(".skills__container");
    const expContainer = $(".exp__container");
    const eduContainer = $(".education__container");
    const projContainer = $(".proj__container");

    for (const node in skillNodes) {
        skillsContainer.append(skillNodes[node]);
    }
    for (const node in expNodes) {
        expContainer.append(expNodes[node]);
    }

    for (const node in eduNodes) {
        eduContainer.append(eduNodes[node]);
    }

    for (const node in projNodes) {
        projContainer.append(projNodes[node]);
    }
});
