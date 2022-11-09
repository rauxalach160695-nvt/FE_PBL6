import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() page:any;
  User =
  {
    actived :  true ,
    roles : "nothing",
    name: "Nguyen van A"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
