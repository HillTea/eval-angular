import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Urls} from "../../api/urls";
import {HttpServices} from "../../services/http-services.service";
import {RegionsResults} from "../../models/regions/regionsResults";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regions: RegionsResults[] | undefined;
  tableau: string[] = ['Nom','Code'];

  constructor(private _httpService: HttpServices) { }

  ngOnInit(): void {
    this.getRegions()
  }

  getRegions(url: string = Urls.rawUrl): void {

    this._httpService.getRequest<RegionsResults[]>(url)
      .subscribe((responses) => {
        this.regions = responses;
      })

  }

}
