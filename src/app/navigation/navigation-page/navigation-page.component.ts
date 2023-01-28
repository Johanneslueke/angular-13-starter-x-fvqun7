import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UIStateService } from 'src/app/services/uistate.service';

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrls: ['./navigation-page.component.css'],
})
export class NavigationPageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public uistate: UIStateService
  ) {}

  ngOnInit(): void {
    // alert('nav init');
    this.router
      .navigate(['/run'], { relativeTo: this.route })
      .then((test) => {});
  }
}
