const github = new GitHub();
const ui = new UI;
//GET  users
const userName = document.getElementById('searchUser');

userName.addEventListener('keyup',(e)=>{
  //get userName;
  
  const userText = e.target.value;
  // console.log(userText);

  if(userText !== ''){
    //getUsers
    github.getUsers(userText)
    .then(data => {
      
      
      if(data.profile.message === 'Not Found'){

        //show alert
        ui.showAlert('User Not Found','alert alert-danger');
        

      }else{
        //show profile.
        ui.showProfile(data.profile);
        ui.showRepo(data.repo);
      }

    })
   
  }else{
    //clear input text and searches.
    ui.clearProfile();
  }
})