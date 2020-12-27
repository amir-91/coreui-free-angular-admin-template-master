import { Component, OnInit } from '@angular/core';
import { AnnounceServiceService } from '../../services/announce-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 aboutObject:any

  constructor(private aboutData:AnnounceServiceService) { }

  ngOnInit(): void {
  }

  sendValueIntoService(value: any) {
    this.aboutData.setdata2(value);
}

postData() {
  this.aboutObject = {
    title:(<HTMLInputElement>document.getElementById('title')).value,
    phone:(<HTMLInputElement>document.getElementById('phone')).value,
    phone2:(<HTMLInputElement>document.getElementById('phone2')).value,
    phone3:(<HTMLInputElement>document.getElementById('phone3')).value,
    email:(<HTMLInputElement>document.getElementById('email-input')).value,
    address:(<HTMLInputElement>document.getElementById('address')).value,
    about:(<HTMLInputElement>document.getElementById('about')).value,
    //imageURL:"",
    
  }
  this.sendValueIntoService(this.aboutObject) 
  this.aboutData.postAbout().subscribe((announce)=>{
    announce = this.aboutObject
    //console.log(announce)
})
}

}
