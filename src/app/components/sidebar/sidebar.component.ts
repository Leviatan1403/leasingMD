import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Distribuidores, DistribuidoresEntity, sendValues } from 'src/app/shared/interfaces/home.interface';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  toCotizar!: FormGroup;
  dataDistribuidores: Distribuidores[] = [];
  data: DistribuidoresEntity[] = [];
  values!: sendValues;
  text: string = "SOLICITAR COTIZACIÓN";
  change: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private serviceHome: HomeService
  ) { }

  ngOnInit(): void {
    
    this.initForm();
  }

  initForm(){
    this.serviceHome.getDistribuidores().subscribe(res => {
      if(res){
        this.dataDistribuidores.push(res);
        this.dataDistribuidores[0].distribuidores?.forEach( filter => this.data.push({id: filter.id, name: filter.name}));
      }
    });
    this.toCotizar = this.formBuilder.group(
      {
        Distribuidor: ['',[Validators.required]],
        PageAuto: ['', [Validators.required, Validators.maxLength(64)]],
        Nombre: ['', [Validators.required, Validators.maxLength(64)]],
        Correo: ['', [Validators.required, Validators.email, Validators.maxLength(64)]]
      }
    );
  }

  sendValues() {
    this.text = "";
    this.text = "PLEASE WAIT...";
    this.values = {
      idDistribuidor: this.toCotizar.get('Distribuidor')?.value,
      paginaAuto: this.toCotizar.get('PageAuto')?.value,
      nombreCompleto: this.toCotizar.get('Nombre')?.value,
      email: this.toCotizar.get('Correo')?.value
    };

    this.serviceHome.sendCotizacion(this.values).subscribe(res => {
      console.log('se envio:',res);
    }, (error:Error) => {
      console.log('error', error.name)
      if(error.name){
        this.change = true;
      }
    });
    //console.log('valor',this.values);
  }

}
