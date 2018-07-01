(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<p>Hello there!</p>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _week_view_week_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./week-view/week-view.component */ "./src/app/week-view/week-view.component.ts");
/* harmony import */ var _recipe_manager_recipe_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipe-manager/recipe-manager.component */ "./src/app/recipe-manager/recipe-manager.component.ts");
/* harmony import */ var _baby_week_view_baby_week_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./baby-week-view/baby-week-view.component */ "./src/app/baby-week-view/baby-week-view.component.ts");
/* harmony import */ var _week_view_week_view_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./week-view/week-view.service */ "./src/app/week-view/week-view.service.ts");
/* harmony import */ var ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-textarea-autosize */ "./node_modules/ngx-textarea-autosize/esm5/ngx-textarea-autosize.js");
/* harmony import */ var _recipe_manager_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipe-manager/add-recipe/add-recipe.component */ "./src/app/recipe-manager/add-recipe/add-recipe.component.ts");
/* harmony import */ var _recipe_manager_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recipe-manager/edit-recipe/edit-recipe.component */ "./src/app/recipe-manager/edit-recipe/edit-recipe.component.ts");
/* harmony import */ var _recipe_manager_recipe_pdf_viewer_recipe_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component */ "./src/app/recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_components_test_components_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./test-components/test-components.component */ "./src/app/test-components/test-components.component.ts");
/* harmony import */ var _tools_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tools/confirm-dialog/confirm-dialog.component */ "./src/app/tools/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: _recipe_manager_recipe_manager_component__WEBPACK_IMPORTED_MODULE_9__["RecipeManagerComponent"] },
    { path: 'recipe-manager', component: _recipe_manager_recipe_manager_component__WEBPACK_IMPORTED_MODULE_9__["RecipeManagerComponent"] },
    { path: 'add-recipe', component: _recipe_manager_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_13__["AddRecipeComponent"] },
    { path: 'edit-recipe', component: _recipe_manager_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_14__["EditRecipeComponent"] },
    { path: 'test', component: _test_components_test_components_component__WEBPACK_IMPORTED_MODULE_17__["TestComponentsComponent"] }
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _week_view_week_view_component__WEBPACK_IMPORTED_MODULE_8__["WeekViewComponent"],
                _recipe_manager_recipe_manager_component__WEBPACK_IMPORTED_MODULE_9__["RecipeManagerComponent"],
                _baby_week_view_baby_week_view_component__WEBPACK_IMPORTED_MODULE_10__["BabyWeekViewComponent"],
                _recipe_manager_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_13__["AddRecipeComponent"],
                _recipe_manager_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_14__["EditRecipeComponent"],
                _recipe_manager_recipe_pdf_viewer_recipe_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_15__["RecipePdfViewerComponent"],
                _test_components_test_components_component__WEBPACK_IMPORTED_MODULE_17__["TestComponentsComponent"],
                _tools_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_19__["NgxElectronModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_12__["TextareaAutosizeModule"]
            ],
            providers: [_week_view_week_view_service__WEBPACK_IMPORTED_MODULE_11__["WeekViewService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_tools_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/baby-week-view/baby-week-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/baby-week-view/baby-week-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/baby-week-view/baby-week-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/baby-week-view/baby-week-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  baby-week-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/baby-week-view/baby-week-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/baby-week-view/baby-week-view.component.ts ***!
  \************************************************************/
/*! exports provided: BabyWeekViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabyWeekViewComponent", function() { return BabyWeekViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BabyWeekViewComponent = /** @class */ (function () {
    function BabyWeekViewComponent() {
    }
    BabyWeekViewComponent.prototype.ngOnInit = function () {
    };
    BabyWeekViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-baby-week-view',
            template: __webpack_require__(/*! ./baby-week-view.component.html */ "./src/app/baby-week-view/baby-week-view.component.html"),
            styles: [__webpack_require__(/*! ./baby-week-view.component.css */ "./src/app/baby-week-view/baby-week-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BabyWeekViewComponent);
    return BabyWeekViewComponent;
}());



/***/ }),

/***/ "./src/app/recipe-manager/add-recipe/add-recipe.component.css":
/*!********************************************************************!*\
  !*** ./src/app/recipe-manager/add-recipe/add-recipe.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container>* {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n.save-recipe-button {\n    font-size: 20px;\n    padding-right: 5px;\n}\n\n.recipe-label {\n    font-size: 22px;\n    font-weight: 400;\n}\n\n.recipe-name-label {\n    font-size: 28px;\n    font-weight: 500;\n}\n\n.recipe-toolbar {\n    display: flex;\n    justify-content: space-between;\n}\n\n.recipe-toolbar-select-dropdown {\n    display: flex;\n    flex-grow: 2;\n    width: 100%;\n}\n\n.add-recipe-toolbar-buttons {\n    margin-right: 10px;\n}\n"

/***/ }),

/***/ "./src/app/recipe-manager/add-recipe/add-recipe.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/recipe-manager/add-recipe/add-recipe.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar ngClass=\"recipe-toolbar\">\n  <label>Create New Recipe</label>\n  <div>\n    <button mat-raised-button (click)=\"saveRecipe()\" ngClass=\"add-recipe-toolbar-buttons\">\n      <i class=\"fas far fa-save save-recipe-button\"></i>\n      <label>Save</label>\n    </button>\n    <button mat-raised-button routerLink=\"/recipe-manager\" routerLinkActive=\"active\">\n      <i class=\"fas fa-home save-recipe-button\"></i>\n      <label>Home</label>\n    </button>\n  </div>\n\n</mat-toolbar>\n\n<div class=\"example-container\">\n  <mat-form-field floatLabel=\"never\">\n    <input ngClass=\"recipe-name-label\" matInput [(ngModel)]=\"newRecipe.recipeViewName\" placeholder=\"Recipe Name\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <label ngClass=\"recipe-label\">Ingredients</label>\n    <textarea autosize matInput [(ngModel)]=\"newRecipe.ingredients\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <label ngClass=\"recipe-label\">Prep Instructions</label>\n    <textarea autosize matInput [(ngModel)]=\"newRecipe.prepInstructions\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <label ngClass=\"recipe-label\">Directions</label>\n    <textarea autosize matInput [(ngModel)]=\"newRecipe.directions\"></textarea>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/recipe-manager/add-recipe/add-recipe.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/recipe-manager/add-recipe/add-recipe.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipeComponent", function() { return AddRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/recipe */ "./src/app/recipe-manager/models/recipe.ts");
/* harmony import */ var _recipe_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe-manager.service */ "./src/app/recipe-manager/recipe-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddRecipeComponent = /** @class */ (function () {
    function AddRecipeComponent(recipeService) {
        this.recipeService = recipeService;
        this.newRecipe = new _models_recipe__WEBPACK_IMPORTED_MODULE_1__["Recipe"]();
    }
    AddRecipeComponent.prototype.ngOnInit = function () { };
    AddRecipeComponent.prototype.saveRecipe = function () {
        // TODO - do format and completion of data checks before saving
        // TODO - if save pressed, then name is altered, and save is pressed again, two recipes with the same name are created
        this.recipeService.addRecipe(this.newRecipe);
    };
    AddRecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-recipe',
            template: __webpack_require__(/*! ./add-recipe.component.html */ "./src/app/recipe-manager/add-recipe/add-recipe.component.html"),
            styles: [__webpack_require__(/*! ./add-recipe.component.css */ "./src/app/recipe-manager/add-recipe/add-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_recipe_manager_service__WEBPACK_IMPORTED_MODULE_2__["RecipeManagerService"]])
    ], AddRecipeComponent);
    return AddRecipeComponent;
}());



/***/ }),

/***/ "./src/app/recipe-manager/edit-recipe/edit-recipe.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/recipe-manager/edit-recipe/edit-recipe.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipe-manager/edit-recipe/edit-recipe.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/recipe-manager/edit-recipe/edit-recipe.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-recipe works!\n</p>\n"

/***/ }),

/***/ "./src/app/recipe-manager/edit-recipe/edit-recipe.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/recipe-manager/edit-recipe/edit-recipe.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRecipeComponent", function() { return EditRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipe-manager.service */ "./src/app/recipe-manager/recipe-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditRecipeComponent = /** @class */ (function () {
    function EditRecipeComponent(route, router, recipeManagerService) {
        this.route = route;
        this.router = router;
        this.recipeManagerService = recipeManagerService;
    }
    EditRecipeComponent.prototype.ngOnInit = function () {
        // this.recipe = this.route.paramMap.pipe(
        //     switchMap((params: ParamMap) => this.recipeManagerService.getRecipe(params.get('id')))
        // );
    };
    EditRecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-recipe',
            template: __webpack_require__(/*! ./edit-recipe.component.html */ "./src/app/recipe-manager/edit-recipe/edit-recipe.component.html"),
            styles: [__webpack_require__(/*! ./edit-recipe.component.css */ "./src/app/recipe-manager/edit-recipe/edit-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _recipe_manager_service__WEBPACK_IMPORTED_MODULE_2__["RecipeManagerService"]])
    ], EditRecipeComponent);
    return EditRecipeComponent;
}());



/***/ }),

/***/ "./src/app/recipe-manager/models/recipe.ts":
/*!*************************************************!*\
  !*** ./src/app/recipe-manager/models/recipe.ts ***!
  \*************************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipe-manager/recipe-manager.component.css":
/*!*************************************************************!*\
  !*** ./src/app/recipe-manager/recipe-manager.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container>* {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.add-recipe-button {\n  font-size: 28px;\n}\n\n.recipe-table {\n  padding: 20px;\n}\n\n.recipe-label {\n  font-size: 22px;\n  font-weight: 400;\n}\n\n.recipe-name-label {\n  font-size: 28px;\n  font-weight: 500;\n}\n\n.recipe-toolbar {\n  display: flex;\n  justify-content: space-between;\n}\n\n.recipe-toolbar-select-dropdown {\n  display: flex;\n  flex-grow: 2;\n  width: 100%;\n}\n\n.edit-recipe-button {\n  font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/recipe-manager/recipe-manager.component.html":
/*!**************************************************************!*\
  !*** ./src/app/recipe-manager/recipe-manager.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar ngClass=\"recipe-toolbar\">\n  <label>Recipe Manager</label>\n\n  <button mat-fab routerLink=\"/add-recipe\" routerLinkActive=\"active\">\n    <i class=\"fas fa-plus add-recipe-button\"></i>\n  </button>\n</mat-toolbar>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"recipe-table\">\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"Name\">\n    <th mat-header-cell *matHeaderCellDef> Recipe Name </th>\n    <td mat-cell *matCellDef=\"let recipe\"> {{recipe.recipeViewName}} </td>\n  </ng-container>\n\n  <!-- View Column -->\n\n  <!-- Edit Column -->\n  <ng-container matColumnDef=\"Edit\">\n    <th mat-header-cell *matHeaderCellDef> </th>\n    <td mat-cell *matCellDef=\"let recipe\">\n      <button mat-button routerLink=\"/edit-recipe\" routerLinkActive=\"active\">\n        <i class=\"fas fa-pencil-alt edit-recipe-button\"></i>\n      </button>\n    </td>\n  </ng-container>\n\n  <!-- Delete Column -->\n  <ng-container matColumnDef=\"Delete\">\n    <th mat-header-cell *matHeaderCellDef> </th>\n    <td mat-cell *matCellDef=\"let recipe\">\n      <button mat-button (click)=\"deleteRecipe(recipe.recipeViewName)\">\n        <i class=\"fas fa-trash-alt edit-recipe-button\"></i>\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/recipe-manager/recipe-manager.component.ts":
/*!************************************************************!*\
  !*** ./src/app/recipe-manager/recipe-manager.component.ts ***!
  \************************************************************/
/*! exports provided: RecipeManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeManagerComponent", function() { return RecipeManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-manager.service */ "./src/app/recipe-manager/recipe-manager.service.ts");
/* harmony import */ var _models_recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/recipe */ "./src/app/recipe-manager/models/recipe.ts");
/* harmony import */ var _tools_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/dictionary */ "./src/app/tools/dictionary.ts");
/* harmony import */ var _tools_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/confirm-dialog/confirm-dialog.component */ "./src/app/tools/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeManagerComponent = /** @class */ (function () {
    function RecipeManagerComponent(dialog, recipeManagerService, _electronService) {
        this.dialog = dialog;
        this.recipeManagerService = recipeManagerService;
        this._electronService = _electronService;
        this.recipes = new _tools_dictionary__WEBPACK_IMPORTED_MODULE_3__["Dictionary"]();
        this.selectedRecipe = new _models_recipe__WEBPACK_IMPORTED_MODULE_2__["Recipe"]();
        this.displayedColumns = ['Name', 'Edit', 'Delete'];
        this.dataSource = this.recipes.Values();
    }
    RecipeManagerComponent.prototype.ngOnInit = function () {
        this.recipes = this.recipeManagerService.getRecipes();
        this.dataSource = this.recipes.Values();
    };
    RecipeManagerComponent.prototype.launchWindow = function () {
        this._electronService.shell.openExternal('https://coursetro.com');
    };
    RecipeManagerComponent.prototype.refreshTable = function () {
        this.dataSource = this.recipes.Values();
    };
    RecipeManagerComponent.prototype.newRecipe = function () {
        this.selectedRecipe.recipeViewName = 'Enter New Recipe Name';
    };
    RecipeManagerComponent.prototype.saveRecipe = function () {
        this.recipes.Add(this.selectedRecipe.recipeViewName, this.selectedRecipe);
    };
    RecipeManagerComponent.prototype.deleteRecipe = function (recipeName) {
        var _this = this;
        this.dialogRef = this.dialog.open(_tools_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"]);
        this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.recipeManagerService.deleteRecipe(recipeName);
            }
            _this.dialogRef = null;
            _this.refreshTable();
        });
    };
    RecipeManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-manager',
            template: __webpack_require__(/*! ./recipe-manager.component.html */ "./src/app/recipe-manager/recipe-manager.component.html"),
            styles: [__webpack_require__(/*! ./recipe-manager.component.css */ "./src/app/recipe-manager/recipe-manager.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _recipe_manager_service__WEBPACK_IMPORTED_MODULE_1__["RecipeManagerService"],
            ngx_electron__WEBPACK_IMPORTED_MODULE_6__["ElectronService"]])
    ], RecipeManagerComponent);
    return RecipeManagerComponent;
}());



/***/ }),

/***/ "./src/app/recipe-manager/recipe-manager.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/recipe-manager/recipe-manager.service.ts ***!
  \**********************************************************/
/*! exports provided: RecipeManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeManagerService", function() { return RecipeManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/recipe */ "./src/app/recipe-manager/models/recipe.ts");
/* harmony import */ var _tools_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/dictionary */ "./src/app/tools/dictionary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeManagerService = /** @class */ (function () {
    function RecipeManagerService() {
        this.recipes = new _tools_dictionary__WEBPACK_IMPORTED_MODULE_2__["Dictionary"]();
        this.init();
    }
    RecipeManagerService.prototype.init = function () {
        // TODO - get info from json file
        var newRecipe = new _models_recipe__WEBPACK_IMPORTED_MODULE_1__["Recipe"]();
        newRecipe.recipeViewName = 'Test recipeViewName';
        newRecipe.directions = 'Test directions';
        newRecipe.ingredients = 'Test ingredients';
        newRecipe.prepInstructions = 'Test prepInstructions';
        newRecipe.recipeDataFileName = 'Test recipeFileName';
        this.recipes.Add(newRecipe.recipeViewName, newRecipe);
        var newRecipe2 = new _models_recipe__WEBPACK_IMPORTED_MODULE_1__["Recipe"]();
        newRecipe2.recipeViewName = 'Test recipeViewName 2';
        newRecipe2.directions = 'Test directions 2';
        newRecipe2.ingredients = 'Test ingredients 2';
        newRecipe2.prepInstructions = 'Test prepInstructions 2';
        newRecipe2.recipeDataFileName = 'Test recipeFileName 2';
        this.recipes.Add(newRecipe2.recipeViewName, newRecipe2);
        this.recipeJsonObject = JSON.stringify(this.recipes);
    };
    RecipeManagerService.prototype.getRecipes = function () {
        return this.recipes;
    };
    RecipeManagerService.prototype.getRecipe = function (recipeName) {
        return this.recipes.Item(recipeName);
    };
    RecipeManagerService.prototype.addRecipe = function (newRecipe) {
        this.recipes.Add(newRecipe.recipeViewName, newRecipe);
        this.saveRecipesToJson();
    };
    RecipeManagerService.prototype.saveRecipesToJson = function () {
        this.recipeJsonObject = JSON.stringify(this.recipes);
    };
    RecipeManagerService.prototype.updateRecipe = function (updatedRecipe) {
        if (this.recipes.ContainsKey(updatedRecipe.recipeViewName)) {
            this.recipes[updatedRecipe.recipeViewName] = updatedRecipe;
        }
        else {
            this.addRecipe(updatedRecipe);
        }
        this.saveRecipesToJson();
    };
    RecipeManagerService.prototype.deleteRecipe = function (recipeToDeleteName) {
        if (this.recipes.ContainsKey(recipeToDeleteName)) {
            this.recipes.Remove(recipeToDeleteName);
            this.saveRecipesToJson();
        }
    };
    RecipeManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RecipeManagerService);
    return RecipeManagerService;
}());



/***/ }),

/***/ "./src/app/recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  recipe-pdf-viewer works!\n</p>\n"

/***/ }),

/***/ "./src/app/recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RecipePdfViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePdfViewerComponent", function() { return RecipePdfViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipePdfViewerComponent = /** @class */ (function () {
    function RecipePdfViewerComponent() {
    }
    RecipePdfViewerComponent.prototype.ngOnInit = function () {
    };
    RecipePdfViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-pdf-viewer',
            template: __webpack_require__(/*! ./recipe-pdf-viewer.component.html */ "./src/app/recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component.html"),
            styles: [__webpack_require__(/*! ./recipe-pdf-viewer.component.css */ "./src/app/recipe-manager/recipe-pdf-viewer/recipe-pdf-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipePdfViewerComponent);
    return RecipePdfViewerComponent;
}());



/***/ }),

/***/ "./src/app/test-components/test-components.component.css":
/*!***************************************************************!*\
  !*** ./src/app/test-components/test-components.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-group {\n    display: flex;\n    margin: 30px;\n}\n"

/***/ }),

/***/ "./src/app/test-components/test-components.component.html":
/*!****************************************************************!*\
  !*** ./src/app/test-components/test-components.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group ngClass=\"tab-group\">\n  <mat-tab label=\"Recipe\">\n    <app-recipe-manager></app-recipe-manager>\n  </mat-tab>\n  <mat-tab label=\"Week\">\n    <app-week-view></app-week-view>\n  </mat-tab>\n\n\n\n\n  <mat-tab label=\"First\">\n    <mat-checkbox>Check me!</mat-checkbox>\n    <mat-slide-toggle>Slide me!</mat-slide-toggle>\n    <mat-radio-group>\n      <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n      <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n    </mat-radio-group>\n  </mat-tab>\n  <mat-tab label=\"Second\">\n    <form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Leave a comment\"></textarea>\n      </mat-form-field>\n\n      <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n        <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\n          {{tile.text}}\n        </mat-grid-tile>\n      </mat-grid-list>\n\n    </form>\n\n\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <mat-form-field>\n      <mat-select placeholder=\"Favorite food\">\n        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n          {{ food.viewValue }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\n  </mat-tab>\n\n\n  <mat-tab label=\"Table\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n      </ng-container>\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-tab>\n\n  <mat-tab label=\"Forth\">\n\n    <h3>Basic Buttons</h3>\n    <div class=\"button-row\">\n      <button mat-button>Basic</button>\n      <button mat-button color=\"primary\">Primary</button>\n      <button mat-button color=\"accent\">Accent</button>\n      <button mat-button color=\"warn\">Warn</button>\n      <button mat-button disabled>Disabled</button>\n      <a mat-button routerLink=\".\">Link</a>\n    </div>\n\n    <h3>Raised Buttons</h3>\n    <div class=\"button-row\">\n      <button mat-raised-button>Basic</button>\n      <button mat-raised-button color=\"primary\">Primary</button>\n      <button mat-raised-button color=\"accent\">Accent</button>\n      <button mat-raised-button color=\"warn\">Warn</button>\n      <button mat-raised-button disabled>Disabled</button>\n      <a mat-raised-button routerLink=\".\">Link</a>\n    </div>\n\n    <h3>Icon Buttons</h3>\n    <div class=\"button-row\">\n      <button mat-icon-button>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\">\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\">\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\">\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n    </div>\n\n    <h3>Fab Buttons</h3>\n    <div class=\"button-row\">\n      <button mat-fab>Basic</button>\n      <button mat-fab color=\"primary\">Primary</button>\n      <button mat-fab color=\"accent\">Accent</button>\n      <button mat-fab color=\"warn\">Warn</button>\n      <button mat-fab disabled>Disabled</button>\n      <button mat-fab>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <a mat-fab routerLink=\".\">Link</a>\n    </div>\n\n    <h3>Mini Fab Buttons</h3>\n    <div class=\"button-row\">\n      <button mat-mini-fab>Basic</button>\n      <button mat-mini-fab color=\"primary\">Primary</button>\n      <button mat-mini-fab color=\"accent\">Accent</button>\n      <button mat-mini-fab color=\"warn\">Warn</button>\n      <button mat-mini-fab disabled>Disabled</button>\n      <button mat-mini-fab>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <a mat-mini-fab routerLink=\".\">Link</a>\n    </div>\n\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/test-components/test-components.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/test-components/test-components.component.ts ***!
  \**************************************************************/
/*! exports provided: TestComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponentsComponent", function() { return TestComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponentsComponent = /** @class */ (function () {
    function TestComponentsComponent() {
        this.title = 'app';
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
        ];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    TestComponentsComponent.prototype.ngOnInit = function () { };
    TestComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-components',
            template: __webpack_require__(/*! ./test-components.component.html */ "./src/app/test-components/test-components.component.html"),
            styles: [__webpack_require__(/*! ./test-components.component.css */ "./src/app/test-components/test-components.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponentsComponent);
    return TestComponentsComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];


/***/ }),

/***/ "./src/app/tools/confirm-dialog/confirm-dialog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tools/confirm-dialog/confirm-dialog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tools/confirm-dialog/confirm-dialog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tools/confirm-dialog/confirm-dialog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Confirm</h1>\n<div mat-dialog-content>{{confirmMessage}}</div>\n<div mat-dialog-actions>\n  <button mat-button style=\"color: #fff;background-color: #153961;\" (click)=\"dialogRef.close(true)\">Confirm</button>\n  <button mat-button (click)=\"dialogRef.close(false)\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/tools/confirm-dialog/confirm-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tools/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () { };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/tools/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/tools/confirm-dialog/confirm-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/tools/dictionary.ts":
/*!*************************************!*\
  !*** ./src/app/tools/dictionary.ts ***!
  \*************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = {};
        this.count = 0;
    }
    Dictionary.prototype.ContainsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    Dictionary.prototype.Count = function () {
        return this.count;
    };
    Dictionary.prototype.Add = function (key, value) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
        }
        this.items[key] = value;
    };
    Dictionary.prototype.Remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    Dictionary.prototype.Item = function (key) {
        return this.items[key];
    };
    Dictionary.prototype.Keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    Dictionary.prototype.Values = function () {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return Dictionary;
}());



/***/ }),

/***/ "./src/app/week-view/models/week.ts":
/*!******************************************!*\
  !*** ./src/app/week-view/models/week.ts ***!
  \******************************************/
/*! exports provided: Week */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Week", function() { return Week; });
var Week = /** @class */ (function () {
    function Week(name) {
        this.name = name;
    }
    return Week;
}());



/***/ }),

/***/ "./src/app/week-view/week-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/week-view/week-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week-view/week-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/week-view/week-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  {{title}}\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select Week\">\n      <mat-option *ngFor=\"let week of weeks.Keys()\" [value]=\"week\">\n        {{ week }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</mat-toolbar>\n<!-- <table mat-table [dataSource]=\"currentWeek\" class=\"mat-elevation-z8\"> -->\n\n<!-- Day of the week Column -->\n<!-- <ng-container *ngFor=\"let day of currentWeekDays\" matColumnDef={{day.name}}>\n  <th mat-header-cell *matHeaderCellDef> {{day.name}} </th>\n  <td mat-cell *matCellDef=\"let day\"> {{day.meals.name}} </td>\n</ng-container> -->\n\n<!-- \n  <ng-container matColumnDef='Sunday'>\n    <th mat-header-cell *matHeaderCellDef> Sunday </th>\n    <td mat-cell *matCellDef=\"let meals\"> {{day.meals}} </td>\n  </ng-container>\n  <ng-container matColumnDef='Monday'>\n    <th mat-header-cell *matHeaderCellDef> Monday </th>\n    <td mat-cell *matCellDef=\"let day\"> {{day.meals}} </td>\n  </ng-container>\n  <ng-container matColumnDef='Tuesday'>\n    <th mat-header-cell *matHeaderCellDef> Tuesday </th>\n    <td mat-cell *matCellDef=\"let day\"> {{day.meals}} </td>\n  </ng-container>\n  <ng-container matColumnDef='Wednesday'>\n    <th mat-header-cell *matHeaderCellDef> Wednesday </th>\n    <td mat-cell *matCellDef=\"let day\"> {{day.meals}} </td>\n  </ng-container>\n  <ng-container matColumnDef='Thursday'>\n    <th mat-header-cell *matHeaderCellDef> Thursday </th>\n    <td mat-cell *matCellDef=\"let day\"> {{day.meals}} </td>\n  </ng-container>\n  <ng-container matColumnDef='Friday'>\n    <th mat-header-cell *matHeaderCellDef> Friday </th>\n    <td mat-cell *matCellDef=\"let day\"> {{day.meals}} </td>\n  </ng-container>\n  <ng-container matColumnDef='Saturday'>\n    <th mat-header-cell *matHeaderCellDef> Saturday </th>\n    <td mat-cell *matCellDef=\"let day\"> {{day.meals}} </td>\n  </ng-container> -->\n\n<!-- <ng-container matColumnDef=\"position\">\n  <th mat-header-cell *matHeaderCellDef> No. </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n</ng-container> -->\n\n<!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table> -->\n"

/***/ }),

/***/ "./src/app/week-view/week-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/week-view/week-view.component.ts ***!
  \**************************************************/
/*! exports provided: WeekViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekViewComponent", function() { return WeekViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/week */ "./src/app/week-view/models/week.ts");
/* harmony import */ var _week_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week-view.service */ "./src/app/week-view/week-view.service.ts");
/* harmony import */ var _tools_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/dictionary */ "./src/app/tools/dictionary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeekViewComponent = /** @class */ (function () {
    function WeekViewComponent(weekViewService) {
        this.weekViewService = weekViewService;
        this.title = 'Week Editor';
        this.displayedColumns = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.weeks = new _tools_dictionary__WEBPACK_IMPORTED_MODULE_3__["Dictionary"]();
        this.initWeeks();
    }
    WeekViewComponent.prototype.initWeeks = function () {
        this.weeks = this.weekViewService.getWeeks();
        if (this.weeks.Count() > 0) {
            this.currentWeek = this.weeks.Item(this.weeks.Keys()[0]);
        }
        else {
            this.currentWeek = this.weeks.Item(this.weeks.Keys()[0]) !== null ? this.weeks[0] : new _models_week__WEBPACK_IMPORTED_MODULE_1__["Week"]('New Week');
        }
    };
    WeekViewComponent.prototype.ngOnInit = function () {
    };
    WeekViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-week-view',
            template: __webpack_require__(/*! ./week-view.component.html */ "./src/app/week-view/week-view.component.html"),
            styles: [__webpack_require__(/*! ./week-view.component.css */ "./src/app/week-view/week-view.component.css")]
        }),
        __metadata("design:paramtypes", [_week_view_service__WEBPACK_IMPORTED_MODULE_2__["WeekViewService"]])
    ], WeekViewComponent);
    return WeekViewComponent;
}());



/***/ }),

/***/ "./src/app/week-view/week-view.service.ts":
/*!************************************************!*\
  !*** ./src/app/week-view/week-view.service.ts ***!
  \************************************************/
/*! exports provided: WeekViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekViewService", function() { return WeekViewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/week */ "./src/app/week-view/models/week.ts");
/* harmony import */ var _tools_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/dictionary */ "./src/app/tools/dictionary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeekViewService = /** @class */ (function () {
    function WeekViewService() {
        this.weeks = new _tools_dictionary__WEBPACK_IMPORTED_MODULE_2__["Dictionary"]();
        // TODO - Initialize weeks from file
        this.weeks.Add('Week 1', new _models_week__WEBPACK_IMPORTED_MODULE_1__["Week"]('Week 1'));
    }
    WeekViewService.prototype.getWeeks = function () {
        if (this.weeks.Count() <= 0) {
            this.weeks.Add('Week 1', new _models_week__WEBPACK_IMPORTED_MODULE_1__["Week"]('Week 1'));
        }
        return this.weeks;
    };
    WeekViewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WeekViewService);
    return WeekViewService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Swank679/Documents/RecipeScheduler/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map