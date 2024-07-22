$(document).ready(() => {
    const infoVisibility = {
        projects: true,
        skills: true,
        experience: true,
        education: true,
        contact: false,
    };

    const projectsContainer = $(".projects");
    const skillsContainer = $(".skills");
    const expContainer = $(".experience");
    const eduContainer = $(".education");
    // const contactContainer = $(".contact");

    for (const obj in infoVisibility) {
        if (!infoVisibility[obj]) {
            $(`.${obj}`).hide();
        }
    }
});
