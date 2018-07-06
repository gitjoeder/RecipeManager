import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { WeekViewComponent } from './week-view/week-view.component';
import { RecipeManagerComponent } from './recipe-manager/recipe-manager.component';
import { BabyWeekViewComponent } from './baby-week-view/baby-week-view.component';
import { WeekViewService } from './week-view/week-view.service';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { AddRecipeComponent } from './recipe-manager/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './recipe-manager/edit-recipe/edit-recipe.component';
import { RecipePdfViewerComponent } from './recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentsComponent } from './test-components/test-components.component';
import { ConfirmDialogComponent } from './tools/confirm-dialog/confirm-dialog.component';
import { NgxElectronModule } from 'ngx-electron';

const appRoutes: Routes = [
    { path: '', component: RecipeManagerComponent },
    { path: 'recipe-manager', component: RecipeManagerComponent },
    { path: 'add-recipe', component: AddRecipeComponent },
    { path: 'edit-recipe', component: EditRecipeComponent },
    { path: 'test', component: TestComponentsComponent }
    // KEEP THESE - Examples of ways to send data to called route
    // { path: 'crisis-center', component: CrisisListComponent },
    // { path: 'hero/:id', component: HeroDetailComponent },
    // {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: { title: 'Heroes List' }
    // },
    // {
    //     path: '',
    //     redirectTo: '/heroes',
    //     pathMatch: 'full'
    // },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        WeekViewComponent,
        RecipeManagerComponent,
        BabyWeekViewComponent,
        AddRecipeComponent,
        EditRecipeComponent,
        RecipePdfViewerComponent,
        TestComponentsComponent,
        ConfirmDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        CdkTableModule,
        CdkTreeModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        NgxElectronModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        TextareaAutosizeModule
    ],
    providers: [ WeekViewService ],
    bootstrap: [ AppComponent ],
    entryComponents: [ ConfirmDialogComponent ]
})
export class AppModule {}
