import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { ServerConfig } from '../../../../models/server-config';
import { ServerConfigService } from '../../../../services/server-config-service';

@Component({
  selector: 'add-edit-server',
  templateUrl: 'ui/components/modals/add-edit-server/add-edit-server.html'
})
export class AddEditServer {
  public title: String = 'Add Server';
  public server: ServerConfig = { host: 'localhost', port: 5432, user: 'postgres' };
  public configService: ServerConfigService = new ServerConfigService();

  constructor(public activeModal: NgbActiveModal) {}

  public submit(): void {
    this.configService.addServer(this.server);
    this.activeModal.close('submit');
  }
}