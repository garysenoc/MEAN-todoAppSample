import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import {AppComponent} from './../../app.component';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  todoForm: FormGroup;

  constructor(
    private appComponent: AppComponent,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) {
      this.todoForm = this.formBuilder.group({
        task_name: [''],
        task_description: [''],
        priority: [''],
        status: ['']
      });
     }

  ngOnInit(): void {

  }
  onSubmit(): any {
    this.crudService.AddTodo(this.todoForm.value)
    .subscribe(() => {
        console.log('Data added successfully!');
        this.appComponent.showNav1();
        this.ngZone.run(() => this.router.navigateByUrl('/all'))
      }, (err) => {
        console.log(err);
    });
  }

}
