class Github{
    constructor() {
        this.client_id = '55ab548a3b7e61098af3';
        this.client_secret = '8f00b9acff084d3b7badb572607d622e20522600';
        this.repos_conut = 5;
        this.repos_sort = 'created: asc';
    }

async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?clint_id=${this.client_id}&clint_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_conut}&sort=${this.repos_sort}&clint_id=${this.client_id}&clint_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
          profile,
            repos
      }
}
}

