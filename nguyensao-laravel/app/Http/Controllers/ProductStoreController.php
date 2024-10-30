<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductStore;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductSale;
use App\Http\Requests\ProductStoreRequest;
class ProductStoreController extends Controller
{
    public function index()
    {
        $productStore = ProductStore::where('productstore.status', '!=', 0)
        ->select(
            'productstore.id',
            'productstore.product_id',
            'productstore.priceroot',
            'productstore.qty',
            'productstore.dateimport',
            'productstore.created_at',
            'productstore.created_by',
            'productstore.updated_at',
            'productstore.updated_by',
            'productstore.status',
        )
        ->get();

        if ($productStore->isEmpty()) {
            $result = [
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'productstore' => null
            ];
        } else {
            $result = [
                'status' => true,
                'message' => 'Tải dữ liệu thành công',
                'productstore' => $productStore
            ];
        }
        return response()->json($result);    }

    public function update(Request $request, $id)
    {
        $productStore = ProductStore::find($id);
        if ($productStore == null) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'productStore' => null
            ]);
        }

        if (!in_array($request->status, [2, 1])) {
            return response()->json([
                'status' => false,
                'message' => 'Status chỉ nhận giá trị 1 hoặc 0',
                'productStore' => null
            ]);
        }

        $productStore->status = $request->status;


        if ($productStore->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Sửa thành công',
                'productStore' => $productStore
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Sửa thất bại',
                'productStore' => null
            ]);
        }
    }

    public function show($id)
    {
        $productStore = ProductStore::find($id);
        if ($productStore) {
            return response()->json($productStore, 200);
        } else {
            return response()->json(['message' => 'Product sale not found'], 404);
        }
    }

    public function store(ProductStoreRequest $request)
    {
        $productStore = new ProductStore();
        $productStore->product_id = $request->product_id;
        $productStore->priceroot = $request->priceroot;
        $productStore->qty = $request->qty;
        $productStore->dateimport = now();
        $productStore->created_by = 1;
        $productStore->status = $request->status ?? 1;
        $productStore->save();

        return response()->json([
            'status' => true,
            'message' => 'Thêm sản phẩm và dữ liệu kho thành công',
            'productstore' => $productStore,
        ]);
    }
}