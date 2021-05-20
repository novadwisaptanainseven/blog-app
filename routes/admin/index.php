<?php

use App\Http\Controllers\DashboardController;

Route::prefix('admin')->group(function () {
  Route::middleware(['auth'])->group(function () {
      Route::get('/', fn() => redirect('dashboard'));
      
      Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
  });

  require __DIR__.'/../auth.php';
});