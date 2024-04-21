import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { addDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatNativeDateModule, MatDatepickerModule, MatFormField, MatInputModule, MatDialogModule, MatButtonModule, MatDialogTitle, MatDialogClose, MatDialogActions, MatDialogContent, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogAddUserComponent {
  user: User = new User();
  birthdate: Date = new Date();

  constructor(public dialog: MatDialog, private firestore: Firestore) {

  }

  saveUser() {
    this.user.birthdate = this.birthdate.getTime();
    console.log('CurrentUser is', this.user);

    const usersCollection = collection(this.firestore, 'users');
    addDoc(usersCollection, this.user.toJSON()).then(() => {
      console.log('User added successfully');
    }).catch((error) => {
      console.error('Error adding user: ', error);
    });

  }


}

