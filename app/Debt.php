<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Debt extends Model
{
    protected $fillable = [
        'name', 'value'
    ];
    
    public function billingCycle(){
        return $this->belongsTo('App\BillingCycle');
    }
}
