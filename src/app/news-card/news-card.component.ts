import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  type: string = "";
  title: string = "";
  date: Date = new Date;
  img_src: string = "";

  @Input() _cardContent: any;

  constructor() { }

  ngOnInit(): void {
    if(this._cardContent != undefined){
      this.type = this._cardContent.type
      this.title = this._cardContent.title;
      this.img_src = this._cardContent.img_src;
      this.date = this._cardContent.date;
    }
  }

}
