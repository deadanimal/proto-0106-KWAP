import { FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import swal from 'sweetalert2';

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-management-file',
  templateUrl: './management-file.component.html',
  styleUrls: ['./management-file.component.scss']
})
export class ManagementFileComponent implements OnInit {

  chart: any

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
    private zone: NgZone,
    private modalService: BsModalService
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
  }

  rows: any = [
    {
      file_name: "File management",
      category: "Category A",
      location: "JPA Sabah",
      date: "2020-03-13T05:50:12Z",
    },
    {
      file_name: "File insurance",
      category: "Category B",
      location: "JPA Sarawak",
      date: "2020-03-13T05:50:12Z",
    },
    {
      file_name: "File analysis",
      category: "Category C",
      location: "KWAP JMF",
      date: "2020-03-13T05:50:12Z",
    }
  ]

  ngOnInit() {
    this.getPieChart();
    this.getBarChart();
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
      this.getBarChart()
    })
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
  }

  showModal: boolean;
  file_name: string;
  category: string;
  location: string;
  date: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.file_name = row.file_name;
    this.category = row.category;
    this.location = row.location;
    this.date = row.date;
  }

  getData(row) {
    this.showModal = false; // Show-Hide Modal Check
    this.file_name = row.file_name;
    this.category = row.category;
    this.location = row.location;
    this.date = row.date;
  }


  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to update this data?",
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
    let chart = am4core.create("pieChartdiv2", am4charts.PieChart);

    // Add data
    chart.data = [{
      "category": "File A",
      "percent": 30.7,
    }, {
      "category": "File B",
      "percent": 20.3,
    },
    {
      "category": "File C",
      "percent": 50.0,
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "category";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

  getBarChart() {
    let chart = am4core.create("barChartdiv1", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [{
      "location": "KWAP",
      "number": 3025
    }, {
      "location": "JPA SABAH",
      "number": 1882
    }, {
      "location": "JPA SARAWAK",
      "number": 1809
    }, {
      "location": "KWAP JMF",
      "number": 1322
    }, {
      "location": "Confidential",
      "number": 1122
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "location";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "number";
    series.dataFields.categoryX = "location";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

  }


}
