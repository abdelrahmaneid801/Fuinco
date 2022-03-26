import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RequestsService } from '../requests.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  images=[];
  keyword : string;
  constructor(private flickerservice :  RequestsService ,private router: Router) { }
  
  ngOnInit(): void {
  }
  search(event: any){
    this.keyword = event.target.value.toLowerCase();
    if(this.keyword && this.keyword.length > 0){
      this.flickerservice.search_keyword(this.keyword)
      .toPromise()
      .then(res=>{
        this.images = res
      })
    }
  }
  lougout(){
    this.router.navigate(['/login']);
    console.log("done");
  }
}
