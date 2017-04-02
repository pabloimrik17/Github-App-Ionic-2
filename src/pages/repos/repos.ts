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

  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }
}
