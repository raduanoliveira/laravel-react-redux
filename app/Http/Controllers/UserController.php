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
        $user = new User();
        return $user->getUserAndRoles($request->user()->id);
    }

    public function getUsers()
    {
        $users = new User();
        $roles = new Role();

        return response()->json([
            'users' => $users->getAllUsersAndRoles(),
            'roles' => $roles->getRoleNames()
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
        $users = new User();
        $user = $users->changePassword($id,$request->password );
        return response($user->id);
    }

    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|' . Rule::unique('users')->ignore($id),
        ]);

        $users = new User();
        return $users->updateUser($id, $request);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $users = new User();
        return $users->deleteUser($id);

    }
}
