import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { SignupserviceService } from 'src/app/signupservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


  export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    users: Customer[] = [];

  // router: any;
  
    constructor(private formBuilder: FormBuilder,private router:Router,private signupservice:SignupserviceService) {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        userName: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]]
      });
    }
  
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.getAllUsers(); // Call the method to fetch all users when the component initializes

  }
  getAllUsers() {
    this.signupservice.getAllUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.error('Error fetching users:', error);
      });
    

    }

  // onSubmit() {
  //   // Submit logic here

    
  //   if (this.registerForm.valid) {
  //     // Navigate to the desired path after successful form submission
  //     console.log('User signed up successfully');

  //     this.router.navigate(['/login']);

  //   } else {
  //     console.log('Form invalid, please check the fields.');
  //   }
  // }

  onSubmit() {
    if (this.registerForm.valid) {
      const newUser: Customer = this.registerForm.value;
      this.signupservice.addUser(newUser).subscribe(
        (response) => {
          alert("Registered Succefully ")
          console.log('User added successfully:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    } else {
      console.log('Form invalid, please check the fields.');
    }
  }
  
  onSubmitAndNavigate() {
    this.onSubmit(); // Call the onSubmit method to handle form submission
    // Additional logic to navigate to the desired path if needed
  }
  
  
}