<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class ProductSaleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'product_id' => 'exists:product,id',
            'datebegin' => 'required|date',
            'dateend' => 'required|date|after_or_equal:datebegin',

        ];

    }
    public function messages(): array
    {
        return [

            'product_id.exists' => 'Sản phẩm không hợp lệ',

        ];
    }

    public function failedValidation(Validator $validator)
    {
            throw new HttpResponseException(response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'products' => $validator->errors()
            ]));
    }
}
