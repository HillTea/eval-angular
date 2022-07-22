import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Urls} from "../../api/urls";
import {HttpServices} from "../../services/http-services.service";
import {DepartementsResults} from "../../models/departements/departementsResults";

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.scss']
})
export class DepartementsComponent implements OnInit {

  departements: DepartementsResults[] | undefined;
  tableau: string[] = ['Nom','Code','Code Region'];

  constructor(private _httpService: HttpServices) { }

  ngOnInit(): void {
    this.getDepartements()
  }

  getDepartements(url: string = Urls.rawUrlDep): void {

    this._httpService.getRequest<DepartementsResults[]>(url)
      .subscribe((responses) => {
        this.departements = responses;
      })

  }

}
