import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cats-details",
  templateUrl: "./cats-details.component.html",
  styleUrls: ["./cats-details.component.css"]
})
export class CatsDetailsComponent implements OnInit {
  constructor() {
    console.log("check", this);
  }

  ngOnInit() {}
}
