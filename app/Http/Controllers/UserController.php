<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware(['auth:api', 'cors']);
    }
    public function index()
    {
        //
    }

    public function get(Request $request)
    {
        $user = User::with('roles')->find($request->user()->id);
        return $user;
    }

    public function getUsers(Request $request)
    {
        $users = new User();
        $roles = new Role();

        return response()->json([
            'users' => $users->with('roles')->get(),
            'roles' => $roles->pluck('name')->toArray()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function updatePassword(Request $request, $id)
    {

        $request->validate([
            'password' => 'required|string|min:6|confirmed'
        ]);
        $user = User::find($id);
        if (isset($user)) {
            $user->password =  bcrypt($request->password);
        }
        $user->save();
        return response($user->id);
    }

    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|' . Rule::unique('users')->ignore($id),
        ]);


        $photo_default = Config::get('constants.default_photo_user_path');
        $user = User::find($id);
        if (isset($user)) {
            $user->name = $request->input('name');
            $user->email = $request->input('email');

            if ($request->hasFile('photo')) {
                $path = $request->file('photo')->store('images', 'public');
                
                if($user->photo != $photo_default){
                    Storage::disk('public')->delete($user->photo);
                }
                
                $user->photo = $path;
            }

            if ($request->roles_update) {
                $isAdmin = $user->roles()->where('name', 'admin')->get();
                $roles = new Role();
                $role = $roles::where('name', 'admin')->first();

                if (in_array('admin', $request->roles_update)) {
                    if (count($isAdmin) === 0) {
                        $user->roles()->attach($role->id);
                    }
                } else {
                    if ($isAdmin) {
                        $user->roles()->detach($role->id);
                    }
                }
            }

            $user->save();
            return response($user->id, 200);
        }
        return response('User not found', 404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $photo_default = Config::get('constants.default_photo_user_path');
        $user = User::find($id);
        if (isset($user)) {
            
            if($user->photo != $photo_default){
                Storage::disk('public')->delete($user->photo);
            }
            $user->roles()->detach();
            $user->delete();
        }

    }
}
