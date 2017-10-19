import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { AddEditServer } from '../../modals/add-edit-server/add-edit-server';
import { ServerConfig } from '../../../../models/server-config';
import { ServerConfigService } from '../../../../services/server-config-service';

@Component({
  selector: 'server-selection',
  templateUrl: 'ui/components/left-sidebar/server-selection/server-selection.html'
})
export class ServerSelection  {
    public servers: ServerConfig[];
    public selectedServer: ServerConfig;

    private configService: ServerConfigService;
    private addEditModal: NgbModalRef;

    constructor(private modalService: NgbModal) {
      this.configService = new ServerConfigService();
      this.updateServerList();
    }

    public onChange() {
      this.openModal();
      console.log(this.selectedServer);
    }

    private updateServerList() {
      this.servers = this.configService.getServers();
      if (!this.servers) {
        this.openModal();
      }
    }

    private openModal() {
      this.addEditModal = this.modalService.open(AddEditServer);
    }
}
