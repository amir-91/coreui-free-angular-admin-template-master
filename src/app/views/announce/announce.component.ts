import { Component, OnInit } from '@angular/core';
import { AnnounceServiceService } from '../../services/announce-service.service';


@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  announceObject:any
  announceDetails:any[]=[]
  

  constructor(private announceData:AnnounceServiceService) { }

  ngOnInit(): void {
   
  }
  sendValueIntoService(value: any) {
    this.announceData.setdata(value);
}

  postData() {
    this.announceObject = {
      title: (<HTMLInputElement>document.getElementById('text-input')).value,
      imageURL: "url",
      discription: (<HTMLInputElement>document.getElementById('textarea-input')).value,
      date: (<HTMLInputElement>document.getElementById('date-input')).value,
    }
    this.sendValueIntoService(this.announceObject) 
    this.announceData.postAnnounce().subscribe((announce)=>{
      announce = this.announceObject
      //console.log(announce)
  })
  }

  getData() {
    
    this.announceData.getAnnounce().subscribe((event)=>{
      this.announceDetails.push(event);
      console.log(this.announceDetails)
    })
  }
  

}
