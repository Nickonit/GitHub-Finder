//init GitHub
const github = new Github;
//init UI
const ui = new  UI;

//search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup',(e) => {
   //Get Input Text
    const userText = e.target.value;

    if(userText !== '')
    {
        //make http call
      github.getUser(userText)
          .then(data =>{
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User Not Find', 'alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
          })
    }else
    {
        //clear profile
        ui.clearProfile();
    }

});