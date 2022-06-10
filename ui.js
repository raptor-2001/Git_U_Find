class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepo(repo){
    let output = '';

    repo.forEach(function(reposit){
      output+=`
        <div class = "card card-body mb-2">
          <div class = "row">
            <div class = "col-md-6">
              <a href="${reposit.html_url}" target="_blank">${reposit.name}</a>
            </div>

            <div class = "col-md-6">
            <span class="badge badge-primary">Stars: ${reposit.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${reposit.watchers_count}</span>
            <span class="badge badge-success">forks: ${reposit.forks_count}</span>
            </div>
            
          </div>
        </div>

      `;
    });
    
    document.getElementById('repos').innerHTML = output;
    
  }

  showAlert(message,classname){

    //clear profile
    this.clearAlert();

    //creating the div
    const div = document.createElement('div');

    //adding the class name
    div.className = classname;

    //searching the parent
    const container = document.querySelector('.searchContainer');

    //searching the sibling
    const search = document.querySelector('.search');

    //appending the textnode
    div.appendChild(document.createTextNode(message));

    //inserting the node
    container.insertBefore(div,search);

    //settimeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
    
  }
  clearProfile(){
    this.profile.innerHTML = ' ';
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }
}