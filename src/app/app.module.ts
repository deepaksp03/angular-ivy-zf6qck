import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CandidateContainer } from './candidate/candidate-container.component';
import { CandidateView } from './candidate/view/candidate-view.component';
import { CandidateForm } from './candidate/form/candidate-form.component';
// import { candidate } from './model/candidate.model';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CandidateContainer,
    CandidateForm,
    CandidateView,
    // candidate,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
