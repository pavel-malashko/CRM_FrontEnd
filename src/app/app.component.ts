import { Component} from '@angular/core';
import { DataService } from './data-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService, private snackBar: MatSnackBar) {

    this.dataService.showAlert.subscribe((alert) => {
      if (alert.message) {
      this.snackBar.open(alert.message, '', {
          panelClass: alert.type,
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });

  }
}
