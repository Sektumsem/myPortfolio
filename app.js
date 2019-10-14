const github =new Github;
//Init UI class
const ui = new UI;
loadEventListener();
function loadEventListener(){
    document.addEventListener('DOMContentLoaded', getObject)
}
function getObject(){
    const gitHub = new Github;
    gitHub.getUser('Sektumsem')
        .then(data=>{
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
            console.log(data);
        });
}
