import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})

export class MyDropdownComponent implements OnInit {

  @Input('list') list = [];
  filtro:string = '';
  searchBar = false;
  constructor() {
  
   }

  filterList(){    
      if(this.list.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
        return this.list;
      }
      return this.list.filter((v) => {
        if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ){
          return true;
        }
        return false;   
      });  
  }

  OnclickElement(element:string){
    alert(element);
  }
  clickDropDown = () => this.filtro = '';

  ngOnInit() {
    
  }

}
