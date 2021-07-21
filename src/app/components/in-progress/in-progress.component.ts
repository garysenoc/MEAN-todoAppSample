import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {

  Todo: any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    setTimeout(() => { this.ngOnInit() }, 250)
    this.crudService.GetTodosInProgress().subscribe(res => {
      console.log(res)
      this.Todo =res;
    });
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteTodo(id).subscribe((res) => {
        this.Todo.splice(i, 1);
      })
    }
  }
}
