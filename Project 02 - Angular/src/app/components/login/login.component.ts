import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent  implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission

    if (this.loginForm.valid) {
      // Form is valid, handle login logic here
      console.log('Form submitted successfully!');
      console.log('Username:', this.loginForm.value.username);
      console.log('Password:', this.loginForm.value.password);
    } else {
      // Form is invalid, mark all fields as touched to display validation messages
      this.loginForm.markAllAsTouched();
    }
  }

  // Helper method to check if a form control has an error
  hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
}
//  {

//   constructor() { }

//   onSubmit(event: Event) {
//     event.preventDefault(); // Prevent the default form submission behavior
    
//     // Retrieve the form values
//     const username = (document.getElementById('username') as HTMLInputElement).value;
//     const password = (document.getElementById('password') as HTMLInputElement).value;

//     // Perform validation
//     if (!username || !password) {
//       alert('Username and password are required!');
//       return;
//     }

//     // Here you can proceed with your login logic, such as sending the data to a server
//     console.log('Username:', username);
//     console.log('Password:', password);
//   }
// }