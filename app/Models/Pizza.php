<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pizza extends Model
{
    use HasFactory;
    public function border(): HasOne{
        return $this->hasOne(Border::class);
    }
    public function dough(): HasOne{
        return $this->hasOne(Dough::class);
    }
    public function flavours_pizza(): BelongsTo
    {
        return $this->belongsTo(Flavours_Pizza::class);
    }
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
