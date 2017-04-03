import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Repo } from '../../models/repo';
import { GithubRepos } from '../../providers/github-repos';

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  repos: Repo[];
  originalRepos: Repo[];

  constructor(public navCtrl: NavController, private githubRepos: GithubRepos) {
    githubRepos.load().subscribe(repos => {
      this.repos = repos;
      this.originalRepos = repos;
    })
  }

  search(searchEvent) {
    let term = searchEvent.target.value;

    if(term.trim() === '' || term.trim() < 3) {
      this.repos = this.originalRepos;
    } else {
      this.githubRepos.searchRepositories(term).subscribe(users => {
        this.repos = users
      })
    }
  }
}
