<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class UpdateBrandRequest extends FormRequest
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
            'thumbnail' => [
                'mimes:jpeg,png,gif,webp',
                'mimetypes:thumbnail/jpeg,thumbnail/png,thumbnail/gif,thumbnail/webp',
            ],


        ];

    }
    public function messages(): array
    {
        return [
            'name.required' => 'Tên không được để trống',
            'slug.required'=>'Slug không được để trống',
            'thumbnail.mimes' => 'Hình ảnh phải có định dạng: jpeg, png, gif, webp',
            'thumbnail.mimetypes' => 'Hình ảnh phải là tệp loại: jpeg, png, gif, hoặc webp',
        ];
    }

    public function failedValidation(Validator $validator)
    {
            throw new HttpResponseException(response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'brand' => $validator->errors()
            ]));
    }




}