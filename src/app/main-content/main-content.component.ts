import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  // mainNews: any; //TODO
  sideNews: any;

  constructor() {
    // this.mainNews = { type: "no_img", date: new Date, title: "In 2019 United Robots has been accepted into a unique global network" }
    this.sideNews = { type: "video", date: new Date, title: "Usability Testing of UR Cleaner robot", img_src: "assets/img/news/video.png" }
   }

  ngOnInit(): void {
  }

}
