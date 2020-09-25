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
  selector: 'app-payment-instruction',
  templateUrl: './payment-instruction.component.html',
  styleUrls: ['./payment-instruction.component.scss']
})
export class PaymentInstructionComponent implements OnInit {

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

// Table
entries: number = 10;
selected: any[] = [];
temp = [];
activeRow: any;
rows: any = [
  {
    name: "Ismail Ibrahim",
    date:"2020-03-13T05:50:12Z",
    id: "1123",
    payment_id: "P-343"
  },
  {
    name: "Fatimah Ibrahim",
    date:"2019-10-08T01:26:15Z",
    id: "2345",
    payment_id: "P-456"
  },
  {
    name: "Amzar Syukor",
    date:"2019-10-08T01:26:15Z",
    id: "4300",
    payment_id: "P-643"
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

showModal : boolean;
  name    : string;
  id: string;
  payment_id : string;

  viewData(row)
  {
    this.showModal = true; // Show-Hide Modal Check
      this.name=row.name;
      this.id=row.id;
      this.payment_id=row.payment_id;
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
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
      title: "Payment Details",
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


getCharts() {
  this.zone.runOutsideAngular(() => {

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


}
