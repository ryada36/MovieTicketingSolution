import { Component, OnInit, Input } from "@angular/core";
import { AdComponent } from "../adComponent";

@Component({
  selector: "app-client-ad",
  templateUrl: "./client-ad.component.html",
  styleUrls: ["./client-ad.component.css"]
})
export class ClientAdComponent implements OnInit, AdComponent {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
