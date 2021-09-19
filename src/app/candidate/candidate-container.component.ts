import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'candidate-container',
  templateUrl: './candidate-container.component.html',
  // styleUrls: ['./candidate-container.component.css'],
})
export class CandidateContainer {
  name = 'Angular ' + VERSION.major;

  candidate: any;

  CandidateContainer() {}
  ngOnInit() {}

  emitCandidate(can: any) {
    this.candidate = can;
    console.log(can);
  }
}
