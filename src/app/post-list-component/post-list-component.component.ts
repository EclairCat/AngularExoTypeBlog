import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() {
    this.loveIts = 0;
    this.created_at = Date.now();
   }

  ngOnInit() {
  }

//Attributs
  @Input() title : string;
  @Input() content : string;
  loveIts: number;
  created_at : Date;

//Methodes
  iLikeIt() {
    console.log('hi');
    this.loveIts++;
  }

  iDontLikeIt() {
    this.loveIts--;
  }

  getColor() {
    if(this.loveIts > 0) {
      return 'green';
    } else if(this.loveIts < 0) {
      return 'red';
    }
  }


}
