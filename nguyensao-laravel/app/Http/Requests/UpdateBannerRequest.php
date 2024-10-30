<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class UpdateBannerRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => 'required',
            'image' => [
                'required',
                'image',
                'mimes:jpeg,png,gif,webp',
                'mimetypes:image/jpeg,image/png,image/gif,image/webp',
            ],
        ];

    }
    public function messages(): array
    {
        return [
            'name.required' => 'Tên không được để trống',
            'image.required' => 'Ảnh không được để trống',
            'image.image' => 'Tệp tải lên phải là hình ảnh',
            'image.mimes' => 'Hình ảnh phải có định dạng: jpeg, png, gif, webp',
            'image.mimetypes' => 'Hình ảnh phải là tệp loại: jpeg, png, gif, hoặc webp',
        ];
    }

    public function failedValidation(Validator $validator)
    {
            throw new HttpResponseException(response()->json([
                'status'   => false,
                'message'   => 'Validation errors',
                'banner'      => $validator->errors()
            ]));
    }




}