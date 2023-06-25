import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue?: string;
  @Output()
  private onValue = new EventEmitter<string>();
  @Output()
  private onDebounce = new EventEmitter<string>();
  @ViewChild('txtInput')
  private tagInput!: ElementRef<HTMLInputElement>;
  
  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  searchValue( value:string ):void{
    this.onValue.emit(value)
    this.tagInput.nativeElement.value = '';
  }
  onKeyPress( searchTerm:string ){
    this.debouncer.next( searchTerm );
  }
}
