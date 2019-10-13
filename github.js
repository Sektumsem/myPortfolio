class Github{
    constructor(){
        this.client_id='b7666fda57f956f6a09f';
        this.client_secret='c1867c1474ed22afd92c3f60f4836c070e34955a';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,repos
        }
    }
}