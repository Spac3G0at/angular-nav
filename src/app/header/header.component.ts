import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['home']); // Redirection vers 'home' /!\ uniquement pour l'exemple /!\
  }

  redirect(link) {
    this.router.navigate([link]);
  }

}
