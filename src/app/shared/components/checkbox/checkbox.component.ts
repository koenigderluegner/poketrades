import { Component, forwardRef, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  constructor() {
    this.controlID = 'pktrds-checkox-' + CheckboxComponent.idCounter++;
  }

  static idCounter = 0;

  @HostBinding('class.d-flex') true;
  controlID: string;
  checked: boolean;
  onTouchedCallback: () => {};
  @Input() icon: string;

  ngOnInit(): void {
  }

  propagateChange = (_: any) => {
  }


  writeValue(obj: any): void {
    this.checked = !!obj;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  onChange(event) {
    this.checked = event.target.checked;
    this.propagateChange(event.target.checked);
  }


}
