import { ComponentFixture } from '@angular/core/testing';
import { DebugElement, Predicate } from '@angular/core';

export function findHTMLElement<T>(fixture: ComponentFixture<T>, predicate: Predicate<DebugElement>): HTMLElement {
  return fixture.debugElement.query(predicate)?.nativeElement as HTMLElement;
}
