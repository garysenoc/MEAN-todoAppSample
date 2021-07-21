import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {



  prio:string='';
  stat:string='';

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetTodo(this.getId).subscribe(res => {
      this.updateForm.setValue({
        task_name: res['task_name'],
        task_description:res ['task_description'],
        priority: res['priority'],
        status: res['status'],
      });
      this.prio = res['priority'];
      this.stat = res['status'];
    });

    this.updateForm = this.formBuilder.group({
      task_name: [''],
      task_description: [''],
      priority: [''],
      status: ['']
    });


  }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crudService.updateTodo(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/all'))
      }, (err) => {
        console.log(err);
    });
  }

}
