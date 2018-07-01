import { Component, OnInit } from '@angular/core';
import { RecipeManagerService } from './recipe-manager.service';
import { Recipe } from './models/recipe';
import { Dictionary } from '../tools/dictionary';
import { ConfirmDialogComponent } from '../tools/confirm-dialog/confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ElectronService } from 'ngx-electron';

@Component({
    selector: 'app-recipe-manager',
    templateUrl: './recipe-manager.component.html',
    styleUrls: [ './recipe-manager.component.css' ]
})
export class RecipeManagerComponent implements OnInit {
    recipes = new Dictionary<Recipe>();
    selectedRecipe: Recipe = new Recipe();
    displayedColumns = [ 'Name', 'Edit', 'Delete' ];
    dataSource = this.recipes.Values();
    dialogRef: MatDialogRef<ConfirmDialogComponent>;

    constructor(
        public dialog: MatDialog,
        private recipeManagerService: RecipeManagerService,
        private _electronService: ElectronService
    ) {}

    ngOnInit() {
        this.recipes = this.recipeManagerService.getRecipes();
        this.dataSource = this.recipes.Values();
    }

    launchWindow() {
        this._electronService.shell.openExternal('https://coursetro.com');
    }

    refreshTable() {
        this.dataSource = this.recipes.Values();
    }

    newRecipe() {
        this.selectedRecipe.recipeViewName = 'Enter New Recipe Name';
    }

    saveRecipe() {
        this.recipes.Add(this.selectedRecipe.recipeViewName, this.selectedRecipe);
    }

    deleteRecipe(recipeName: string) {
        this.dialogRef = this.dialog.open(ConfirmDialogComponent);
        this.dialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.recipeManagerService.deleteRecipe(recipeName);
            }
            this.dialogRef = null;
            this.refreshTable();
        });
    }
}
