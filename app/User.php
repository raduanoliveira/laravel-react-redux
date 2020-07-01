<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Storage;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'photo'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles()
    {
        return $this->belongsToMany('App\Role', 'role_user');
    }

    public function createUser($name, $email, $photo, $password){
        $user = new User([
            'name' => $name,
            'email' => $email,
            'photo' => $photo,
            'password' => bcrypt($password)
        ]);

        $user->save();
        return $user;
    }

    public function getUserAndRoles($id){
        return User::with('roles')->find($id);
    }

    public function getAllUsersAndRoles(){
        return User::with('roles')->get();
    }



    public function changePassword($id,$password){
        $user = User::find($id);
        if (isset($user)) {
            $user->password =  bcrypt($password);
        }
        $user->save();

        return $user;
    }

    public function updateUser($id, $request){

        $photo_default = Config::get('constants.default_photo_user_path');
        $user = User::find($id);
        $roles = new Role();

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
                $isAdmin = $roles->checkUserPermission($user, 'admin');

                if (in_array('admin', $request->roles_update)) {
                    if (count($isAdmin) === 0) {
                        $roles->assignRole($user,'admin');
                    }
                } else {
                    if ($isAdmin) {
                        $roles->removeRole($user,'admin');
                    }
                }
            }

            $user->save();
            return response($user->id, 200);
        }
        return response('User not found', 404);
    }

    public function deleteUser($id){
        $photo_default = Config::get('constants.default_photo_user_path');
        $user = User::find($id);
        if (isset($user)) {
            
            if($user->photo != $photo_default){
                Storage::disk('public')->delete($user->photo);
            }
            $user->roles()->detach();
            $user->delete();
        }
        return $id;
    }

}
