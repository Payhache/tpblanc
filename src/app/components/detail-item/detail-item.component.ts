import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/models/shoe';
import { ShoesService } from 'src/app/services/shoes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css'],
})
export class DetailItemComponent implements OnInit {
  shoe: Shoe;
  id:number;
  isLoading:boolean;
 
  constructor(
    public router:Router,
    public route: ActivatedRoute,
    public shoesService: ShoesService
  ) {}

  ngOnInit(): void {
  this.id = +this.route.snapshot.paramMap.get('id');
  this.isLoading = true;
  this.shoesService.getOneShoe(this.id).subscribe((data:Shoe) => {
    this.shoe = data;
    this.isLoading = false;
  });
}
sendChange() {
  this.shoesService.updateShoe(this.shoe).subscribe((data)=> {
    this.router.navigate(['/home']);
  })
}

}
