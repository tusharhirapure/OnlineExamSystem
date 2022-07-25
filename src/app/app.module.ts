import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ExamSelectionComponent } from './exam-selection/exam-selection.component';
import { ReportSuccessComponent } from './report-success/report-success.component';
import { ExamUiComponent } from './exam-ui/exam-ui.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    ExamSelectionComponent,
    ReportSuccessComponent,
    ExamUiComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
