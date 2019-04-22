import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[ad-host]"
})
export class AdHost {
  constructor(public viewContainer: ViewContainerRef) {}
}
