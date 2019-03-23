import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/data-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  currentPartnerId = null;
  partner: any = {};
  constructor(private act: ActivatedRoute, public data: DataService) {
    this.act.params.subscribe((param) => {
      this.currentPartnerId = param.id
      this.getPartner();
    });
   }
   getPartner() {
    // this.data.getPartner(this.currentPartnerId).subscribe((res: any) => {
    //   this.partner = res.partner;
    //   console.log(res, this.partner);
    // });
    // this.data.getCompany({
    //     id:  this.act.params.subscribe((param)=>param.id),
    //   })
  }
  ngOnInit() {
  }

}
