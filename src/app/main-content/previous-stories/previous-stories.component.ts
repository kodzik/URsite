import { Component, OnInit } from '@angular/core';

export interface ICard {
  type: string; // with_img / no_img / video
  date: Date;
  title: string;
}

@Component({
  selector: 'app-previous-stories',
  templateUrl: './previous-stories.component.html',
  styleUrls: ['./previous-stories.component.scss']
})


export class PreviousStoriesComponent implements OnInit {

  cards: any[];

  constructor() {
    this.cards = [
      { type: "video", date: new Date, title: "Usability Testing of UR Cleaner robot", img_src: "assets/img/news/video.png" },
      { type: "no_img", date: new Date, title: "In 2019 United Robots has been accepted into a unique global network" },
      { type: "with_img", date: new Date, title: "United Robots joins NVIDIA Partner Network", img_src: "assets/img/news/nvidia.png" },
      { type: "with_img", date: new Date, title: "United Robots at Investment Forum in Tarnów", img_src: "assets/img/news/forum.png" },
      { type: "with_img", date: new Date, title: "Euronews Interview with Chris Burns (March 2018)", img_src: "assets/img/news/Euronews.png" },
      { type: "with_img", date: new Date, title: "Introduction of United Robots to Polish market", img_src: "assets/img/news/polish_intro.png" }
    ]
  }

  ngOnInit(): void {

  }

}
