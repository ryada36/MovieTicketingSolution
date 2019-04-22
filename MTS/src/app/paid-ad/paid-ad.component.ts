import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-paid-ad",
  templateUrl: "./paid-ad.component.html",
  styleUrls: ["./paid-ad.component.css"]
})
export class PaidAdComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
