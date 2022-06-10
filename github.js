class GitHub{
  constructor(){
    this.client_id = '2ec9ae0c27a7375e82c2';
    this.client_secrets = '758194d30cea8354f1c2d09e51a7ea1ee14a37f5';
    this.repo_count=5;
    this.repo_sort='created: asc';
  }

  async getUsers(user){
      const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secrets}`);
      
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&?client_id=${this.client_id}&client_secret=${this.client_secrets}`);


      const profile = await userResponse.json();
      const repo = await repoResponse.json();

      return{
        profile,
        repo
      }
  }
}