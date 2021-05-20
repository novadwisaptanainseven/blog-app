<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something g
Route::get
*/

// Route::prefix('admin')->group(function () {
//     Route::middleware(['auth'])->group(function () {
//         Route::get('/dashboard', function () {
//             return view('dashboard');
//         })->name('dashboard');
//     });

//     require __DIR__.'/auth.php';
// });

include_once __DIR__ . '/admin/index.php';

Route::get('/{path?}', function () {
    return view('index');
})->where('path', '.*');
