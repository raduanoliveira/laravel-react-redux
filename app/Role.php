<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function users(){
        return $this->belongsToMany('\App\User','role_user');
    }

    public function assignRole($user, $role)
    {
        $role = $this->where('name',$role)->first();
        $user->roles()->attach($role->id);

        return $role;
    }

    public function removeRole($user, $role)
    {
        $role = $this->where('name',$role)->first();
        $user->roles()->detach($role->id);

        return $role;
    }
    
    public function checkUserPermission($user,$role){
        return $user->roles()->where('name', $role)->get();
    }

    public function getRoleNames(){
        return Role::pluck('name')->toArray();
    }
}
