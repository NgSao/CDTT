<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
            'pricebuy'=>'Giá mua không được để trống',
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
