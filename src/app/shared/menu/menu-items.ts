export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple '
  },
  {
    path: '/admin/registration',
    title: 'Registration',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-red',
    collapse: 'registration',
    isCollapsed: true,
    children: [
      { path: 'registration-application', title: 'Application', type: 'link' },
      { path: 'registration-document', title: 'Document', type: 'link' }
    ]
  },
  {
    path: '/admin/processing',
    title: 'Processing',
    type: 'sub',
    icontype: 'fas fa-cog text-blue',
    collapse: 'processing',
    isCollapsed: true,
    children: [
      { path: 'pre-retirement', title: 'Pre-retirement', type: 'link' },
      { path: 'post-retirement', title: 'Post-retirement', type: 'link' }
    ]
  },
  {
    path: '/admin/payment-and-disbursement',
    title: 'Payment and disbursement',
    type: 'sub',
    icontype: 'fas fa-university text-pink',
    isCollapsed: true,
    children: [
      { path: 'payment-instruction', title: 'Payment Instructions', type: 'link' },
      { path: 'payment-cancelation', title: 'Payment Cancelation', type: 'link' }
    ]
  },
  {
    path: '/admin/accounting',
    title: 'Accounting',
    type: 'sub',
    icontype: 'fas fa-credit-card text-yellow',
    isCollapsed: true,
    children: [
      { path: 'accounting-general-ledger', title: 'General Ledger', type: 'link' },
      { path: 'accounting-budget', title: 'Budget', type: 'link' },
      { path: 'accounting-fund-request', title: 'Fund Request', type: 'link' },
      { path: 'accounting-vote-bank', title: 'Vote Bank', type: 'link' },
      { path: 'accounting-account-payable', title: 'Account Payable', type: 'link' },
      { path: 'accounting-account-receivable', title: 'Account Receivable', type: 'link' }
    ]
  },
  {
    path: '/admin/compliance',
    title: 'Compliance',
    type: 'link',
    icontype: 'fas fa-check-square text-green'
  },
  {
    path: '/admin/file-management',
    title: 'File Management',
    type: 'link',
    icontype: 'fas fa-folder text-pink'
  },
  {
    path: '/admin/master-data-management',
    title: 'Master data management',
    type: 'sub',
    icontype: 'fas fa-database text-black',
    isCollapsed: true,
    children: [
      { path: 'master-data-management-business', title: 'Business', type: 'link' },
      { path: 'master-data-management-customer', title: 'Customer', type: 'link' }
    ]
  },
  {
    path: '/admin/management-system',
    title: 'System management',
    type: 'sub',
    icontype: 'fas fa-users text-orange',
    collapse: 'management-system',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-blue '
  }
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];