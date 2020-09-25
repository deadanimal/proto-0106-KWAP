import { FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import swal from 'sweetalert2';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-accounting-general-ledger',
  templateUrl: './accounting-general-ledger.component.html',
  styleUrls: ['./accounting-general-ledger.component.scss']
})
export class AccountingGeneralLedgerComponent implements OnInit {

  chart: any

  // Datepicker
  bsDPConfig = { 
    isAnimated: true, 
    containerClass: 'theme-default'
  }
  
  // Form
  registerForm: FormGroup

   // Modal
   modal: BsModalRef;
   modalConfig = {
     keyboard: true,
     class: "modal-dialog"
   };

   temp = [];

  constructor(
    private zone: NgZone
  ) { this.temp = this.rows.map((prop, key) => {
    return {
      ...prop,
      id: key
    };
  }); }

  rows: any = [
    {
      code: "BA123",
      name: "Lexis",
      opening_balance: "40000",
      date: "2020-03-13T05:50:12Z",
      credit: "30000",
      change: "10000",
      closing_balance: "10000"
    },
    {
      code: "BD456",
      name: "Maxis",
      opening_balance: "35000",
      date: "2019-10-08T01:26:15Z",
      credit: "5000",
      change: "30000",
      closing_balance: "30000"
    },
    {
      code: "BCER33",
      name: "Cola",
      opening_balance: "30000",
      date: "2019-10-08T01:26:15Z",
      credit: "15000",
      change: "15000",
      closing_balance: "15000"
    }
  ]

  ngOnInit() {
    this.getPieChart();
    this.getLineChart();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }
  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getPieChart()
      this.getLineChart()
    })
  }

  showModal : boolean;
  code: string;
  name    : string;
  opening_balance : string;
  date: string;
  credit: string;
  change: string;
  closing_balance: string;

  viewData(row)
  {
    this.showModal = true; // Show-Hide Modal Check
      this.code=row.code;
    	this.name=row.name;
      this.opening_balance=row.opening_balance;
      this.date=row.date;
      this.credit=row.credit;
      this.change=row.change;
      this.closing_balance=row.closing_balance;
      
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  deleteData(row) {

    let modalText = row.name;

    swal.fire({
      title: "Account Ledger",
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
      text: "Are you sure to approve this data?",
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
      text: "Successfully updated!",
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

  getPieChart() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("pieChart", am4charts.PieChart);

    // Add data
    chart.data = [{
      "account": "Payable",
      "percent": 501.9,
    }, {
      "account": "Receivable",
      "percent": 301.9,
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "account";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

  getLineChart() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("lineChart", am4charts.XYChart);

    let data = [];
    let value = 50;
    for (var i = 0; i < 300; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}"

    series.tooltip.pointerOrientation = "vertical";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    //chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();

  }

}
