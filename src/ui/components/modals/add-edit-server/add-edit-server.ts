import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-edit-server',
  templateUrl: 'ui/components/modals/add-edit-server/add-edit-server.html'
})
export class AddEditServer {
  public title: String = 'Add Server';

  constructor(public activeModal: NgbActiveModal) {}
}