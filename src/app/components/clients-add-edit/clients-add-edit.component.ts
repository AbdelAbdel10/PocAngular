import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientModel } from 'src/app/model/client';
import { ClientsService } from 'src/app/services/clients.service';


@Component({
  selector: 'app-clients-add-edit',
  templateUrl: './clients-add-edit.component.html',
  styleUrls: ['./clients-add-edit.component.css']
})
export class ClientsAddEditComponent implements OnInit {
 
 
  actionEvent: any="Ajouter";
  client: ClientModel;
  constructor(private router: Router, private clientService: ClientsService) {}
  

  ngOnInit(): void {
    this.client=history.state.data;
    console.log(this.client);
    if(this.client.code !=null)
    {
      this.actionEvent="Modifier";
    }
  }

 

  onSubmit(form: NgForm)
  {
   if(this.actionEvent=="Ajouter")
   {
      this.clientService.save(form.value).subscribe((Response) => {
        this.router.navigateByUrl('');
      })
   
    }else{

    this.clientService.update(form.value).subscribe((Response) => {
      this.router.navigateByUrl('');
    })
   
   }
    
  }


  }