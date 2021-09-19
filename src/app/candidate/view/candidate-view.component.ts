import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'candidate-view',
  templateUrl: './candidate-view.component.html',
  // styleUrls: ['./candidate-container.component.css'],
})
export class CandidateView {
  name = 'Angular ' + VERSION.major;
}
