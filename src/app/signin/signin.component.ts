import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Route, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup, AbstractControl, AbstractControlDirective,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private router: Router,
    private _cd: ChangeDetectorRef,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  doLogin(data) {
    console.warn(this.loginForm.value);
    const lgData = data.value;
    const storage = sessionStorage.setItem(
      'loginedUser',
      JSON.stringify(lgData)
    );
    this.router.navigate(['welcome']);
    this._cd.markForCheck();
  }
  resetForm() {
    console.log(this.loginForm);
  }
}
