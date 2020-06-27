import { Component, OnInit } from '@angular/core';
import { ShoesService } from 'src/app/services/shoes.service';
import { Shoe } from 'src/app/models/shoe';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
// Déclaration du tableau qui contiendra les chaussures
shoes:Shoe[];
  constructor(private shoesService:ShoesService) { }

  ngOnInit(): void {
    this.shoesService.getAllShoes().subscribe((data) => {
      this.shoes = data;
    });
  }

}
