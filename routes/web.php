<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('dashboard');
});

Route::resource('tasks', TaskController::class, ['except' => 'show', 'create', 'edit']);

Route::get('/vue/{vue_capture?}', function () {
    return view('dashboard');
})->where('vue_capture', '[\/\w\.-]*');

Route::resource('products', ProductController::class);
