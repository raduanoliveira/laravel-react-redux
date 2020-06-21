<?php

namespace App\Http\Controllers;

use App\Http\Middleware\Cors;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware(Cors::class);
    }

    public function register(Request $request){

        $photo_default = Config::get('constants.default_photo_user_path');
        

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6|confirmed'
        ]);

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'photo' => $photo_default,
            'password' => bcrypt($request->password)
        ]);

        $user->save();

        $roles = new Role();
        $role = $roles::where('name','user')->first();
        $user->roles()->attach($role->id);

        return response()->json([
            'res' => 'User created successfully', 201
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'res' => 'Disconnected'
        ]);
    }
}
