<?php

use App\Http\Controllers\BlogCategoriesController;

Route::group(['prefix' => 'categories'], function () {
  Route::get('', [BlogCategoriesController::class, 'index'])
    ->name('categories');

  Route::get('create', [BlogCategoriesController::class, 'create'])
    ->name('categories.create');

  Route::post('', [BlogCategoriesController::class, 'store'])
    ->name('categories.store');

  Route::get('{category}', [BlogCategoriesController::class, 'edit'])
    ->name('categories.edit');

  Route::patch('{category}', [BlogCategoriesController::class, 'update'])
    ->name('categories.update');

  Route::delete('{category}', [BlogCategoriesController::class, 'destroy'])
    ->name('categories.delete');
});
