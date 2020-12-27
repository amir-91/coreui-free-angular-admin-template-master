import { Component, OnInit } from '@angular/core';
import { AnnounceServiceService } from '../../services/announce-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  customers : any[] =[]

  constructor(private formData:AnnounceServiceService) { }

  ngOnInit(): void {

    this.formData.getCustomer().subscribe((prods) => {
       
      this.customers.push(prods);
     console.log(this.customers);
  
     
    
      });
  }
sendValueIntoService(value: any) {
    this.formData.setdata4(value);
}
}
