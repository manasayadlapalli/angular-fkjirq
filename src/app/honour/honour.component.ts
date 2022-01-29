import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-honour',
  templateUrl: './honour.component.html',
  styleUrls: ['./honour.component.css']
})
export class HonourComponent implements OnInit  {
   modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static'
    });
  }
}