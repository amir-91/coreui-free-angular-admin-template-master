import { Component, OnInit } from '@angular/core';
import { AnnounceServiceService } from '../../services/announce-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuObject:any

  constructor(private menuData:AnnounceServiceService) { }

  ngOnInit(): void {
  }

  sendValueIntoService(value: any) {
    this.menuData.setdata3(value);
}

/* menuCategories:{
  category:[{
      name:String,
      details:[{
       dishName: {type:String},
       discription: {type:String},
       price: {type:String},
       image: {type:String}
      }]
  }]
} */

postData() {
  this.menuObject = {
   
      category:(<HTMLInputElement>document.getElementById('select1')).value,
       dishName: (<HTMLInputElement>document.getElementById('name')).value,
       discription: (<HTMLInputElement>document.getElementById('about')).value,
       price: (<HTMLInputElement>document.getElementById('price')).value,
       //imageURL:"",
      
  
     
  }
  this.sendValueIntoService(this.menuObject) 
  this.menuData.postMenu().subscribe((announce)=>{
    announce = this.menuObject
    //console.log(announce)
})
}


}
