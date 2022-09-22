function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

wrapAdjective = (function (adj2 = "*") {
    return function (adj = "special") {
        return `You are ${adj2}${adj}${adj2}!`;
    }
});