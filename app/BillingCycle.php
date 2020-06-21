<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BillingCycle extends Model
{
    public function credits(){
        return $this->hasMany('App\Credit');
    }
    public function debts(){
        return $this->hasMany('App\Debt');
    }
}
