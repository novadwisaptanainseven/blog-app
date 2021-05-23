<?php

use App\Http\Controllers\BlogCategoriesController;

Route::group(['prefix' => 'categories'], function () {
  Route::get('', [BlogCategoriesController::class, 'index'])
    ->name('categories');
  Route::get('create', [BlogCategoriesController::class, 'create'])
    ->name('categories.create');
});
