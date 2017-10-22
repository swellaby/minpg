import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { AddEditServer } from '../../modals/add-edit-server/add-edit-server';
import { ServerConfig } from '../../../../models/server-config';
import { ServerConfigService } from '../../../../services/server-config-service';
import { ServerSelectionService } from '../../../services/sever-selection';

@Component({
  selector: 'server-selection',
  templateUrl: 'ui/components/left-sidebar/server-selection/server-selection.html',
  styleUrls: ['ui/components/left-sidebar/server-selection/server-selection.css']
})
export class ServerSelection  {
    public servers: ServerConfig[];
    public selectedServer: ServerConfig;

    private configService: ServerConfigService;
    private addEditModal: NgbModalRef;

    constructor(private selectService: ServerSelectionService, private modalService: NgbModal) {
      this.configService = new ServerConfigService();
      this.updateServerList();
    }

    public onChange() {
      if (this.selectedServer === undefined) {
        this.openModal();
      }
      this.selectService.changeServer(this.selectedServer);
    }

    private updateServerList() {
      this.servers = this.configService.getServers();
      if (!this.servers.length) {
        this.openModal();
      }
      console.log(this.servers);
    }

    private openModal() {
      this.addEditModal = this.modalService.open(AddEditServer);
    }
}
