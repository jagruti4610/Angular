import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  constructor(private router: Router) { }

  login()
  {
    this.router.navigate(['/welcome']);
  }
  ngOnInit() {
  }

}
