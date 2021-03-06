import { Component, Input, OnInit } from '@angular/core';

import { key } from "src/app/common/global_values";

import { ApiService } from "src/app/api/api.service";
import { Desemb_Model } from 'src/app/models/desemb';

@Component({
  selector: 'app-desemb-list',
  templateUrl: './desemb-list.component.html',
  styleUrls: ['./desemb-list.component.css']
})
export class DesembListComponent implements OnInit {
  desembs: Desemb_Model[];
  header: string
  
  @Input() get_all_desembs: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.header = this.get_all_desembs ? 'Desembs' : 'Desembs to fund'
    
    this.api.get_desembs_observable().subscribe((data: any) => {
      this.desembs = data[key.desembs];
      this.desembs = this.desembs.map((data: any) => {
        return new Desemb_Model(
          data[key.ccb], data[key.ccy], data[key.deal_id], data[key.fund], data[key.ini],
          data[key.princ], data[key.venc]
        )
      });
      
      
      if (! this.get_all_desembs) {
        for (let i = 0; i < this.desembs.length; i++) {
          const desemb = this.desembs[i];
          if (desemb.fund) {
            this.desembs.splice(i, 1)
            i--
          }
        }
      }
    })
  }

  ngOnChanges(): void {
    this.ngOnInit()
  }
}
