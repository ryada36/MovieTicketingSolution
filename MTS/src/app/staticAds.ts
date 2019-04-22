import { ClientAdComponent } from "./client-ad/client-ad.component";
import { PaidAdComponent } from "./paid-ad/paid-ad.component";

export const ADS = [
  {
    data: {
      title: "client ad",
      description: "some client ad description"
    },
    component: ClientAdComponent
  },
  {
    data: {
      title: "custom paid ad",
      description: "some paid ad description"
    },
    component: PaidAdComponent
  }
];
