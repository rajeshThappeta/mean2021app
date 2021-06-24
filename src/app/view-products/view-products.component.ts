import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getProducts().subscribe(
      res=>{
        this.products=res.message;
      },
      err=>{
        console.log("err in reading products ",err)
        console.log("Something went wrong in reading products")
      }
    )
  }

}
