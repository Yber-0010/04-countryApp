import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  private onValue = new EventEmitter<string>();

  @ViewChild('txtInput')
  private tagInput!: ElementRef<HTMLInputElement>;

  searchValue( value:string ):void{
    this.onValue.emit(value)
    this.tagInput.nativeElement.value = '';
  }
}
