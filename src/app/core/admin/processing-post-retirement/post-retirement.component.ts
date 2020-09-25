import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import { Document } from 'src/assets/mock/admin-document/document.model'
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
am4core.useTheme(am4themes_animated);

import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-post-retirement',
  templateUrl: './post-retirement.component.html',
  styleUrls: ['./post-retirement.component.scss']
})
export class PostRetirementComponent implements OnInit {

  // Chart
  chart: any

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: Document[] = []
  SelectionType = SelectionType;

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Form
  registerForm: FormGroup
  registerFormMessages = {
    'document_name': [
      { type: 'required', message: 'Document name is required' }
    ]
  }

  // Table
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      name: "Selena Nixon",
      date:"2020-03-13T05:50:12Z",
      status: "Approved",
      identification_number: "802103156720"
    },
    {
      name: "Garrett Winters",
      date:"2019-10-08T01:26:15Z",
      status: "Pending",
      identification_number: "802103154330"
    },
    {
      name: "Forest Gump",
      date:"2019-10-08T01:26:15Z",
      status: "Rejected",
      identification_number: "802103154330"
    }
  ]

  constructor(
    private mockService: MocksService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private zone: NgZone
  
  ) { this.temp = this.rows.map((prop, key) => {
    return {
      ...prop,
      id: key
    };
  });}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      document_name: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getPieChart()
    })
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
  }

  deleteData(row) {

    let modalText = row.name;

    swal.fire({
      title: "User Details",
      text: modalText,
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes',
      cancelButtonClass: 'btn btn-secondary'
    }).then((result) => {
      if (result.value) {
        // Show confirmation
        swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          type: 'success',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-primary'
        });
      }
    })
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to create this new user?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Success",
      text: "A new user has been created!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
        this.registerForm.reset()
      }
    })
  }
  showModal : boolean;
  name    : string;
  date: string;
  status : string;
  ic: string;

  viewData(row)
  {
    this.showModal = true; // Show-Hide Modal Check
      this.name=row.name;
      this.date=row.date;
      this.status=row.status;
      this.ic=row.identification_number;
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  getPieChart() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("pieChart", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Approved",
        litres: 501.9
      },
      {
        country: "Pending",
        litres: 301.9
      },
      {
        country: "Rejected",
        litres: 201.1
      }
    ];

    chart.innerRadius = am4core.percent(40);
    chart.depth = 120;

    chart.legend = new am4charts.Legend();

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.depthValue = "litres";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 5;
    series.colors.step = 3;

  }

}
