import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs/internal/observable/timer';
import { SellerServiceService } from 'src/app/seller-service.service';

@Component({
  selector: 'reg-user-mobile',
  templateUrl: './reg-user-mobile.component.html',
  styleUrls: ['./reg-user-mobile.component.css']
})
export class RegUserMobileComponent implements OnInit {
  constructor(
    private arouter: ActivatedRoute,
    private service: SellerServiceService,
    private router: Router
  ) {}
  id: any;
  submitted: any;
  err: any;
  otpTime: any;
  targetTime: any;
  counter: any;
  countDown: any;
  ngOnInit(): void {
    this.arouter.params.subscribe((params) => {
      this.id = params['id'];
    });
    console.log(this.id);
    localStorage.setItem('id', this.id);
    this.service.send_otp(this.id).subscribe((res: any) => {
      if (res != null) {
        this.targetTime = res.otpExpiedTime;
        this.tickTock();
      }
      this.otpTime = res.otpExpiedTime;
      let date = new Date(this.otpTime);
      let time = date.toLocaleString();
      console.log('otp sent', this.otpTime, time);
    });
    this.form.get('id')?.setValue(this.id);
    this.getDetails(this.id);
  }
  tickTock() {
    var startDate = new Date();
    var endDate = new Date(this.targetTime);
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    this.counter = Math.floor(seconds) + 2;
    this.countDown = timer(0, 1000).subscribe(() => {
      --this.counter;
      if (this.counter == 0) {
        this.countDown.unsubscribe();
      }
      console.log(this.counter);
    });
  }
  form = new FormGroup({
    id: new FormControl(''),
    otp: new FormControl('', Validators.required),
  });
  getDetails(id: string) {
    this.service.get_details(id).subscribe((res: any) => {
      console.log(res, 'details');
    });
  }
  resendOtp() {
    this.service.send_otp(this.id).subscribe((res: any) => {
      if (res != null) {
        this.targetTime = res.otpExpiedTime;
        if (this.countDown != null) {
          this.countDown.unsubscribe();
        }
        this.tickTock();
      }
    });
  }
  checkErr() {
    this.err = '';
  }
  submit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.service.verify_otp(this.form.value).subscribe(
        (res: any) => {
          this.countDown.unsubscribe();
          this.router.navigateByUrl('/property',{replaceUrl:true});
          let verifyId = res._id
          localStorage.setItem('verifyId',verifyId)
          console.log(res);
        },
        (error) => {
          this.err = error.error.message;
          console.log(error);
        }
      );
    }
  }
}
