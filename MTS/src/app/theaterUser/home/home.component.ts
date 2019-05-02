import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input
} from "@angular/core";
import { IAppState, IMovie, ITheater } from "src/app/store/reducers";
import { Store } from "@ngrx/store";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material";
import { fromEvent } from "rxjs";
import { switchMap, takeUntil, pairwise } from "rxjs/operators";
import { generateTimeSlots } from "./generateTimeSlots";
import { TheaterService } from "src/app/service/theater.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas") public canvas: ElementRef;

  @Input() public width = 400;
  @Input() public height = 300;

  movies: IMovie[];
  theaters: ITheater[];
  selectedMovieId: String;
  startDate: Date;
  endDate: Date;
  showFormGroup: FormGroup;
  showDraggable: Boolean = false;
  cx: CanvasRenderingContext2D;
  selectedTimeSlots: String[] = [];
  availableTimeSlots: any[];

  constructor(
    private store: Store<IAppState>,
    private formBuilder: FormBuilder,
    private theaterService: TheaterService
  ) {
    alert("TODO: fetch theaters based on id fetch and tic tac toe game ");
  }

  ngOnInit() {
    this.store
      .select(state => state.movies)
      .subscribe(movies => {
        this.movies = movies;
      });

    this.showFormGroup = this.formBuilder.group({
      movieCtrl: ["", Validators.required],
      theaterCtrl: ["", Validators.required],
      startDateCtrl: ["", Validators.required],
      endDateCtrl: new FormControl(
        { value: "", disabled: true },
        Validators.required
      )
    });

    this.theaterService.getTheaters().subscribe(theaters => {
      this.theaters = theaters as ITheater[];
    });
  }
  ngAfterViewInit(): void {
    // if (!this.canvas) return;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext("2d");
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    this.cx.lineWidth = 1;
    this.cx.lineCap = "round";
    this.cx.strokeStyle = "#000";
    this.cx.fillStyle = "red";
    this.cx.font = "10pt sans-serif";
    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    fromEvent(canvasEl, "mousedown")
      .pipe(
        switchMap(e => {
          return fromEvent(canvasEl, "mousemove").pipe(
            takeUntil(fromEvent(canvasEl, "mouseup")),
            takeUntil(fromEvent(canvasEl, "mouseleave")),
            pairwise()
          );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    if (!this.cx) {
      return;
    }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

  startDateChange($event: MatDatepickerInputEvent<Date>) {
    console.log("selected value", $event.value);
    this.startDate = $event.value;
    this.showFormGroup.controls["endDateCtrl"].enable();
  }
  generateTimeSlots($event: MatDatepickerInputEvent<Date>) {
    this.endDate = $event.value;
    if (this.startDate && this.endDate) {
      this.showDraggable = true;
      this.availableTimeSlots = generateTimeSlots();
    }
  }
  drag(event) {
    console.log("drag started on the div");
    event.dataTransfer.setData(
      "text",
      event.target.getAttribute("data-slotTime")
    );
  }
  allowDrop(event) {
    event.preventDefault();
  }
  drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");

    // need to render on the canvas instead of appending
    // event.target.appendChild(document.getElementById(data));
    this.availableTimeSlots.filter((slot, index) => {
      if (slot.value == data) this.availableTimeSlots.splice(index, 1);
    });
    this.selectedTimeSlots.push(data);
    this.drawTimeSlotOnCanvas(data);
  }
  drawTimeSlotOnCanvas(data) {
    if (!this.cx) return;
    this.cx.beginPath();
    let posX = 3,
      posY = (this.selectedTimeSlots.length - 1) * (50 + 5); // last5 is for margin bottom
    console.log(posY);
    this.cx.rect(posX, posY + 10, 110, 50);
    this.cx.fill();
    this.cx.strokeText(data, posX + 5, posY + 30);
  }
  reset() {
    this.selectedTimeSlots = [];
    this.availableTimeSlots = generateTimeSlots();
    this.cx.clearRect(0, 0, this.width, this.height);
  }
}
