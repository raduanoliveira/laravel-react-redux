<?php

use App\Http\Controllers\CustomAccessTokenController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('auth')->group(function(){
    Route::post('login', 'CustomAccessTokenController@issueUserToken')->middleware(['api-login', 'throttle']);
    Route::post('register', 'AuthController@register');
    Route::middleware('auth:api')->group(function(){
        Route::post('logout','AuthController@logout');
    });
});

Route::prefix('user')->group(function(){
    
    Route::get('get', 'UserController@get');
    Route::post('update_user/{id}', 'UserController@update');
    Route::post('update_password/{id}', 'UserController@updatePassword');

});

Route::prefix('manage')->group(function(){
    Route::get('getUsers', 'UserController@getUsers');
    Route::put('update_user/{id}', 'UserController@update');
    Route::delete('destroy_user/{id}', 'UserController@destroy');
});

Route::prefix('billingCycle')->group(function(){
    Route::post('create','BillingCycleController@store');
    Route::get('get','BillingCycleController@index');
    Route::put('update/{id}', 'BillingCycleController@update');
    Route::delete('destroy/{id}', 'BillingCycleController@destroy');
});

Route::prefix('home')->group(function(){
    Route::get('summary', 'HomeController@summary');
});