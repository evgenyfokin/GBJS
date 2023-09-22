const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const combined = {}

en.forEach((day, index) => {
    combined[day] = ru[index]
})

console.log(combined)