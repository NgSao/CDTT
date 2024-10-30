<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    public $timestamps = false;
    protected $table = 'productimage';
    public function product() {
        return $this->belongsTo(Product::class);
    }
}