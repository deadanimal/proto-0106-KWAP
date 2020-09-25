// import { CalendarComponent } from './../../examples/calendar/calendar.component';
import { ManagementFileComponent } from './file-management/management-file.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { AccountingGeneralLedgerComponent } from './accounting-general-ledger/accounting-general-ledger.component';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';



import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { ApplicationComponent } from './registration-application/application.component';
import { DocumentComponent } from './registration-document/document.component';
import { PostRetirementComponent } from './processing-post-retirement/post-retirement.component';
import { PreRetirementComponent } from './processing-pre-retirement/pre-retirement.component';
import { PaymentCancelationComponent } from './payment-cancelation/payment-cancelation.component';
import { PaymentInstructionComponent } from './payment-instruction/payment-instruction.component';
import { MasterDataManagementBusinessComponent } from './master-data-management-business/master-data-management-business.component';
import { calendar } from 'ngx-bootstrap/chronos/moment/calendar';
import { CalendarModule } from 'src/app/examples/calendar/calendar.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    ApplicationComponent,
    DocumentComponent,
    PostRetirementComponent,
    PreRetirementComponent,
    PaymentInstructionComponent,
    PaymentCancelationComponent,
    AccountingGeneralLedgerComponent,
    ComplianceComponent,
    ManagementFileComponent,
    MasterDataManagementBusinessComponent,
    // CalendarComponent

  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    CalendarModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
