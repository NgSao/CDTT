<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class StoreProductRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => 'required',
            'slug' => 'required',
            'category_id' => 'exists:category,id',
            'brand_id' => 'exists:brand,id',
            'content' => 'required',
            'pricebuy' => 'required',
            'image' => [
                'mimes:jpeg,png,gif,webp',
                'mimetypes:image/jpeg,image/png,image/gif,image/webp',
            ],
        ];

    }
    public function messages(): array
    {
        return [
            'title.required' => 'Tên không được để trống',
            'slug.required'=>'Slug không được để trống',
            'content.required'=>'Nội dung không được để trống',
            'category_id.exists' => 'Danh mục không hợp lệ',
            'brand_id.exists' => 'Thương hiệu không hợp lệ',
            'pricebuy.required'=>'Giá mua không được để trống',
            'image.mimes' => 'Hình ảnh phải có định dạng: jpeg, png, gif, webp',
            'image.mimetypes' => 'Hình ảnh phải là tệp loại: jpeg, png, gif, hoặc webp',
        ];
    }

    public function failedValidation(Validator $validator)
    {
            throw new HttpResponseException(response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'Products' => $validator->errors()
            ]));
    }


}
