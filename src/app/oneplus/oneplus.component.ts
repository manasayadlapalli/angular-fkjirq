import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-oneplus',
  templateUrl: './oneplus.component.html',
  styleUrls: ['./oneplus.component.css']
})
export class OneplusComponent implements OnInit  {
   modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static'
    });
  }
}