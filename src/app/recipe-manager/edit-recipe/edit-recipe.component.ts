import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RecipeManagerService } from '../recipe-manager.service';

@Component({
    selector: 'app-edit-recipe',
    templateUrl: './edit-recipe.component.html',
    styleUrls: [ './edit-recipe.component.css' ]
})
export class EditRecipeComponent implements OnInit {
    recipe: Observable<Recipe>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private recipeManagerService: RecipeManagerService
    ) {}

    ngOnInit() {
        // this.recipe = this.route.paramMap.pipe(
        //     switchMap((params: ParamMap) => this.recipeManagerService.getRecipe(params.get('id')))
        // );
    }
}
