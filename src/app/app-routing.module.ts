import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamUiComponent } from './exam-ui/exam-ui.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ExamSelectionComponent } from './exam-selection/exam-selection.component';
import { ReportSuccessComponent } from './report-success/report-success.component';
import { InstructionsComponent } from './instructions/instructions.component';


const routes: Routes = [
  {path:'exam_ui',component:ExamUiComponent},
  {path:'userDashboard',component:UserDashboardComponent},
  {path:'exam_selection',component:ExamSelectionComponent },
  {path:'report_success',component:ReportSuccessComponent},
  {path:'exam_instructions',component:InstructionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
