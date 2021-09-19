import { Component, EventEmitter, Output, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'candidate-form',
  templateUrl: './candidate-form.component.html',
  // styleUrls: ['./candidate-container.component.css'],
})
export class CandidateForm {
  name = 'Angular ' + VERSION.major;

  candidateForm: FormGroup;
  can: CandidateTO;
  counter: number = 1;

  @Output()
  emitCandidate: EventEmitter<any> = new EventEmitter();

  CandidateForm() {
    this.candidateForm = new FormGroup({
      id: new FormControl('id'),
      first_name: new FormControl('first_name', Validators.required),
      last_name: new FormControl('last_name', Validators.required),
      email: new FormControl('email', Validators.required),
      gender: new FormControl('gender', Validators.required),
    });

    console.log("efw"+this.candidateForm.controls);
  }
  ngOnInit() {}

  addCandidate() {
    console.log('sfedw' + this.candidateForm);
    this.can = new CandidateTO();
    this.counter++;
    this.can.id = this.counter;
    this.can.first_name = this.candidateForm.controls['first_name'].value;
    this.can.last_name = '';
    this.can.email = '';
    this.can.gender = '';
    console.log(this.can);
    // this.emitCandidate.emit(this.can);
  }
}

class CandidateTO {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}
