import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
})
export class ElementComponent implements OnInit {
  inputValue: string = '';
  list: string[] = [];
  display: boolean = false;

  ngOnInit() {}

  textChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  handleAction(action: string) {
    switch (action) {
      case 'add':
        if (this.inputValue && !this.list.includes(this.inputValue)) {
          this.list.push(this.inputValue);
          this.inputValue = ''; // Clear input after adding
        }
        break;
      case 'remove':
        if (this.list.length > 0) {
          this.list.pop(); // Remove the last item
        }
        break;
      case 'empty':
        this.list = []; // Clear the list
        break;
      case 'full':
        this.display = this.list.length > 7; // Check if the list is full
        break;
    }
  }
}
