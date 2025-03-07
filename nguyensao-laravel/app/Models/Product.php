<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table='product';
    public function productImages()
    {
        return $this->hasMany(ProductImage::class);
    }
    // public function images()
    // {
    //     return $this->hasMany(ProductImage::class, 'product_id');
    // }

}