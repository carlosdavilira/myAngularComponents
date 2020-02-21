import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})

export class MyDropdownComponent implements OnInit {


  @Input('list') list = [];
  @Input('filter') filter = true;
  @Input('Icon') Icon;// =  {"class = 'ui-button-icon-left ui-clickable fa fa-fw fa-check spam-button-drop'"};
  filtro:string = '';
 
  visible = true;

  
  constructor() {
  
   }

  filterList(){    
      if(this.list.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
        return this.list;
      }
      return this.list.filter((v) => {
        if(v.label.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ){
          return true;
        }
        return false;   
      });  
  }

  OnclickElement(element:string){
    console.log(element)
    alert(element);
  }
  onclickDropDown = () => {
    if(this.list.length <= 0)
      this.visible = false;
    else  
      this.visible = true;
    
    this.filtro = '';
  }

  ngOnInit() {
    
  }
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  onClickElement(element){
    console.log(element);
    element.command();

  }
  
  

}
