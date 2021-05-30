<?php

use App\Http\Controllers\DashboardController;

Route::prefix('admin')->group(function () {
  Route::middleware(['auth'])->group(function () {
    Route::get('/', fn () => redirect('/admin/dashboard'));

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    require_once __DIR__ . '/categories.php';
  });

  require __DIR__ . '/../auth.php';
});
