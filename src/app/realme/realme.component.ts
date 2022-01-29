import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-realme',
  templateUrl: './realme.component.html',
  styleUrls: ['./realme.component.css']
})
export class RealmeComponent implements OnInit {
   modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static'
    });
  }
}