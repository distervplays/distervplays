class NodeCreationModule {
    SkillNode(title, description, skills) {
        const skillGroup = $("<div>").addClass("skill__group");

        const skillTitle = $("<h3>").addClass("skill-title").text(title);

        const skillDescription = $("<p>")
            .addClass("skill-description")
            .text(description);

        const skillsList = $("<ul>").addClass("skills__list");
        skills.forEach((skill) => {
            const skillItem = $("<li>").addClass("skill-item").text(skill);
            skillsList.append(skillItem);
        });

        skillGroup.append(skillTitle, skillDescription, skillsList);

        return skillGroup;
    }

    ExperienceNode(company, jobFunction, description, date) {
        const expGroup = $("<div>").addClass("exp__group");

        const expTitle = $("<h3>").addClass("exp-title").text(company);
        const expFunction = $("<span>").addClass("function").text(jobFunction);
        expTitle.append($("<span>").text(" - "), expFunction);

        const expDescription = $("<p>")
            .addClass("exp-description")
            .text(description);

        const expDate = $("<p>").addClass("date_preview");
        const calendarIcon = $("<img>").attr(
            "src",
            "./assets/calendar-icon.svg"
        );
        const dateText = $("<span>").text(date);
        expDate.append(calendarIcon, dateText);

        expGroup.append(expTitle, expDescription, expDate);

        return expGroup;
    }

    EducationNode(education, educatioType, date) {
        const eduGroup = $("<div>").addClass("edu__group");

        const eduTitle = $("<h3>").addClass("edu-title").text(education);

        const eduType = $("<p>").addClass("eduType").text(educatioType);

        const eduDate = $("<p>").addClass("date_preview");
        const calendarIcon = $("<img>").attr(
            "src",
            "./assets/calendar-icon.svg"
        );

        const dateText = $("<span>").text(date);
        eduDate.append(calendarIcon, dateText);

        eduGroup.append(eduTitle, eduType, eduDate);

        return eduGroup;
    }
    ProjectNode(title, description, tools, codeUrl) {
        const projGroup = $("<div>").addClass("proj__group");

        const projTitle = $("<h3>").addClass("proj-title").text(title);
        const projDesc = $("<p>").addClass("proj-desc").text(description);

        const toolsList = $("<ul>").addClass("tools__list");
        tools.forEach((tool) => {
            const toolItem = $("<li>").addClass("tools__item").text(tool);
            toolsList.append(toolItem);
        });

        const viewCodeBtn = $("<a>")
            .addClass("btnViewCode")
            .attr("href", codeUrl)
            .text("View Code");

        projGroup.append(projTitle, projDesc, toolsList, viewCodeBtn);

        return projGroup;
    }
}
