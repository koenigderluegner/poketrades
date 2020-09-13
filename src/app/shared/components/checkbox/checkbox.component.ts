import { Component, forwardRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';
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
export class CheckboxComponent implements ControlValueAccessor {

  static idCounter = 0;

  @HostBinding('class.d-flex') displayFlex = true;
  controlID: string;
  checked = false;
  onTouchedCallback: (() => void) | undefined;
  @Input() icon: string | undefined;

  constructor() {
    this.controlID = 'pktrds-checkbox-' + CheckboxComponent.idCounter++;
  }

  propagateChange = (_: unknown) => {
  }

  writeValue(obj: unknown): void {
    this.checked = !!obj;
  }

  registerOnChange(fn: (_: unknown) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouchedCallback = fn;
  }

  onChange(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
    this.propagateChange(this.checked);
  }

}
