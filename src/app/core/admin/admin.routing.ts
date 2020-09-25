import { AccountingGeneralLedgerComponent } from './accounting-general-ledger/accounting-general-ledger.component';
import { MasterDataManagementCustomerComponent } from './master-data-management-customer/master-data-management-customer.component';
import { MasterDataManagementBusinessComponent } from './master-data-management-business/master-data-management-business.component';
import { AccountingAccountReceivableComponent } from './accounting-account-receivable/accounting-account-receivable.component';
import { AccountingAccountPayableComponent } from './accounting-account-payable/accounting-account-payable.component';
import { AccountingVoteBankComponent } from './accounting-vote-bank/accounting-vote-bank.component';
import { AccountingFundRequestComponent } from './accounting-fund-request/accounting-fund-request.component';
import { AccountingBudgetComponent } from './accounting-budget/accounting-budget.component';
import { ManagementFileComponent } from './file-management/management-file.component';
import { PaymentCancelationComponent } from './payment-cancelation/payment-cancelation.component';
import { PaymentInstructionComponent } from './payment-instruction/payment-instruction.component';
import { PostRetirementComponent } from './processing-post-retirement/post-retirement.component';
import { PreRetirementComponent } from './processing-pre-retirement/pre-retirement.component';
import { ManagementSystemComponent } from './management-system/management-system.component';
import { ManagementMasterDataComponent } from './master-data-management/master-data-management.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { DocumentComponent } from './registration-document/document.component';
import { ApplicationComponent } from './registration-application/application.component';
// import { CalendarComponent } from './../../examples/calendar/calendar.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management-system',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }    
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'registration',
                children: [
                    {
                        path: 'registration-application',
                        component: ApplicationComponent
                    },
                    {
                        path: 'registration-document',
                        component: DocumentComponent
                    }    
                ]
            },
            {
                path: 'accounting',
                children: [
                    {
                        path: 'accounting-general-ledger',
                        component: AccountingGeneralLedgerComponent
                    },
                    {
                        path: 'accounting-budget',
                        component: AccountingBudgetComponent
                    },
                    {
                        path: 'accounting-fund-request',
                        component: AccountingFundRequestComponent
                    },
                    {
                        path: 'accounting-vote-bank',
                        component: AccountingVoteBankComponent
                    }  ,
                    {
                        path: 'accounting-account-payable',
                        component: AccountingAccountPayableComponent
                    }  ,
                    {
                        path: 'accounting-account-receivable',
                        component: AccountingAccountReceivableComponent
                    }  
                ]
            },
            {
                path: 'compliance',
                component: ComplianceComponent
            },
            {
                path: 'file-management',
                component: ManagementFileComponent
            },
            {
                path: 'master-data-management',
                children: [
                    {
                        path: 'master-data-management-business',
                        component: MasterDataManagementBusinessComponent
                    },
                    {
                        path: 'master-data-management-customer',
                        component: MasterDataManagementCustomerComponent
                    }    
                ]
            },
            {
                path: 'management-system',
                component: ManagementSystemComponent
            },
            {
                path: 'payment-and-disbursement',
                children: [
                    {
                        path: 'payment-instruction',
                        component: PaymentInstructionComponent
                    },
                    {
                        path: 'payment-cancelation',
                        component: PaymentCancelationComponent
                    }    
                ]
            },
            {
                path: 'processing',
                children: [
                    {
                        path: 'pre-retirement',
                        component: PreRetirementComponent
                    },
                    {
                        path: 'post-retirement',
                        component: PostRetirementComponent
                    }    
                ]

            }
        ]
    }
]