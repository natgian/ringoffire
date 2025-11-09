import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent {
  name!: string;

  constructor(
    public dialogRef: MatDialogRef<EditPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string; id: number }
  ) {
    this.name = data.name;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletePlayer() {
    this.dialogRef.close({ action: 'delete' });
  }
}
