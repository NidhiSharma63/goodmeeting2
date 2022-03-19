const modevalue = localStorage.getItem("goodmeeting_today_color_scheme");
let mode = document.querySelector(".mode")
// console.log(modevalue)
const changeTheme = () => {
    if (modevalue == 'dark') {
        mode.href = '/assets/css/darkTheme.css';
    } else {
        mode.href = '/assets/css/lightTheme.css';
    }
}
changeTheme()