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

        $users = new User();
        $user = $users->createUser($request->name,$request->email,$photo_default,$request->password);

        $roles = new Role();
        $roles->assignRole($user, 'user');

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
