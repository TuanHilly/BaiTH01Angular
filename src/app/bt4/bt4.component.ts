import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt4',
  templateUrl: './bt4.component.html',
  styleUrls: ['./bt4.component.css']
})
export class Bt4Component implements OnInit {

  constructor() { }

  sv=[{hoten: 'DOan huy Hoang', quequan: 'Hung Yen', diemthi:9}, {hoten: 'Ngo Minh  Son', quequan: 'Ha Noi', diemthi:7.5},{ hoten: 'Cao Van Du', quequan: 'Hai Phong', diemthi:8.3}];
  kq="";

  ngOnInit(): void {

    let j=0;

    for(let i=0;i<this.sv.length;i++){
      if(this.sv[i].diemthi>8&&this.sv[i].quequan=="Hai Phong"){
        this.kq=this.kq+this.sv[i].hoten+"-"+this.sv[i].quequan+"-"+this.sv[i].diemthi+";";
      }
      }
  }

}
