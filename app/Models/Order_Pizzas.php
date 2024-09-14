<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order_Pizzas extends Model
{
    use HasFactory;
    public function order(): HasOne
    {
        return $this->hasOne(Order::class);
    }
    public function pizza(): HasMany
    {
        return $this->hasMany(Pizza::class);
    }
}
