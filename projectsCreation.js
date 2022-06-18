function projectsCreation(input) {
    let name = input[0];
    let projectCounts = Number(input[1]);
    let projectHours = projectCounts * 3;
    
    console.log(`The architect ${name} will need ${projectHours} hours to complete ${projectCounts} project/s.`);
} 

projectsCreation(
["George ",
"4 "]
);