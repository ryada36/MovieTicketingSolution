import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ComponentFactoryResolver,
  Input,
  AfterViewInit
} from "@angular/core";
import { AdHost } from "../adHost.directive";
import { AdComponent } from "../../adComponent";
import { ClientAdComponent } from "src/app/client-ad/client-ad.component";

@Component({
  selector: "app-ad-banner",
  templateUrl: "./ad-banner.component.html",
  styleUrls: ["./ad-banner.component.css"]
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @ViewChild(AdHost) adHost: AdHost;
  @Input() ads: any[];

  currentAdIndex = -1;
  interval: any;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];
    let componentFactory = this.resolver.resolveComponentFactory(
      adItem.component
    );
    let viewContainerRef = this.adHost.viewContainer;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
