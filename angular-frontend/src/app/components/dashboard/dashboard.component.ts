import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  @ViewChild("menu", {static: false}) menu!: MatDrawer;

  menuContent: HTMLElement[];
  homeButtonElement: HTMLElement | null;
  inventoryButtonElement: HTMLElement | null;
  
  constructor(private router: Router) {

    this.menuContent = [];

    this.homeButtonElement = null;
    this.inventoryButtonElement = null;
  };
  
  ngOnInit(): void {

    this.homeButtonElement = document.getElementById("homeButtonElement");
    this.menuContent.push(this.homeButtonElement!);

    this.inventoryButtonElement = document.getElementById("inventoryButtonElement");
    this.menuContent.push(this.inventoryButtonElement!);

  };

  toggleSubMenu(): void {

  };

  routeInventoryView(): void {
    this.resetContentValues();
    this.inventoryButtonElement?.style.setProperty('box-shadow', '0px 0px 10px #adb5bd inset');
    this.router.navigate(['/inventory']);
  };
  
  routeHomeView(): void {
    this.resetContentValues();
    this.homeButtonElement?.style.setProperty('box-shadow', '0px 0px 10px #adb5bd inset');
    this.router.navigate(['/home']);
  };

  resetContentValues(): void {
    for (let element of this.menuContent) {
      element.style.setProperty('box-shadow', 'none');
    };
  };
}
