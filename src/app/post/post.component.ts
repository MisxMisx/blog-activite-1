import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: String;
  @Input() content: String;
  @Input() loveIts: number;
  @Input() created_at: Date;
  constructor() {
    this.loveIts = 0;
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  like() {
    this.loveIts++;
  }

  dislike() {
    this.loveIts--;
  }
}
