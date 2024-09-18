<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Routing\Exceptions\BackedEnumCaseNotFoundException;

class User extends Model
{
    use HasFactory;
    public function address(): HasOne
    {
        return $this->hasOne(Adress::class);
    }
    public function orders(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
