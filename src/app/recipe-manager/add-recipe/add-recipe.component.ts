import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeManagerService } from '../recipe-manager.service';

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: [ './add-recipe.component.css' ]
})
export class AddRecipeComponent implements OnInit {
    newRecipe: Recipe = new Recipe();
    constructor(private recipeService: RecipeManagerService) {}

    ngOnInit() {}
    saveRecipe() {
        // TODO - do format and completion of data checks before saving
        // TODO - if save pressed, then name is altered, and save is pressed again, two recipes with the same name are created
        this.recipeService.addRecipe(this.newRecipe);
    }
}
