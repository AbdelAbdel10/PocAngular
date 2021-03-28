import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientModel } from 'src/app/model/client';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  //arrayClt: any=[];
  arrayClt$:Observable<ClientModel[]> |null=null;

  constructor(private clientService: ClientsService, private router: Router) { }
 
  ngOnInit(): void { 
      this.onGetAll();
  }

  onGetAll(){
    this.arrayClt$=this.clientService.getAll();
  }


  onDelete(code: any)
  {
    this.clientService.deletClient(code).subscribe((Response) => {
      this.router.navigateByUrl('/clients');
    })
  }

  
  






}
