import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-poco',
  templateUrl: './poco.component.html',
  styleUrls: ['./poco.component.css']
})
export class PocoComponent implements OnInit  {
   modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static'
    });
  }
}
