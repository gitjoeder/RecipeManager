import { Injectable } from '@angular/core';
import { Recipe } from './models/recipe';
import { Dictionary } from '../tools/dictionary';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmDialogComponent } from '../tools/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeManagerService {
    recipes = new Dictionary<Recipe>();
    recipeJsonObject: string;

    constructor() {
        this.init();
    }

    init() {
        // TODO - get info from json file

        const newRecipe = new Recipe();

        newRecipe.recipeViewName = 'Test recipeViewName';
        newRecipe.directions = 'Test directions';
        newRecipe.ingredients = 'Test ingredients';
        newRecipe.prepInstructions = 'Test prepInstructions';
        newRecipe.recipeDataFileName = 'Test recipeFileName';

        this.recipes.Add(newRecipe.recipeViewName, newRecipe);

        const newRecipe2 = new Recipe();
        newRecipe2.recipeViewName = 'Test recipeViewName 2';
        newRecipe2.directions = 'Test directions 2';
        newRecipe2.ingredients = 'Test ingredients 2';
        newRecipe2.prepInstructions = 'Test prepInstructions 2';
        newRecipe2.recipeDataFileName = 'Test recipeFileName 2';
        this.recipes.Add(newRecipe2.recipeViewName, newRecipe2);

        this.recipeJsonObject = JSON.stringify(this.recipes);
    }

    getRecipes(): Dictionary<Recipe> {
        return this.recipes;
    }

    getRecipe(recipeName: string): Recipe {
        return this.recipes.Item(recipeName);
    }

    addRecipe(newRecipe: Recipe) {
        this.recipes.Add(newRecipe.recipeViewName, newRecipe);
        this.saveRecipesToJson();
    }

    saveRecipesToJson() {
        this.recipeJsonObject = JSON.stringify(this.recipes);
    }

    updateRecipe(updatedRecipe: Recipe) {
        if (this.recipes.ContainsKey(updatedRecipe.recipeViewName)) {
            this.recipes[updatedRecipe.recipeViewName] = updatedRecipe;
        } else {
            this.addRecipe(updatedRecipe);
        }

        this.saveRecipesToJson();
    }

    deleteRecipe(recipeToDeleteName: string) {
        if (this.recipes.ContainsKey(recipeToDeleteName)) {
            this.recipes.Remove(recipeToDeleteName);
            this.saveRecipesToJson();
        }
    }
}
