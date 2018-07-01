import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePdfViewerComponent } from './recipe-pdf-viewer.component';

describe('RecipePdfViewerComponent', () => {
  let component: RecipePdfViewerComponent;
  let fixture: ComponentFixture<RecipePdfViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipePdfViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
