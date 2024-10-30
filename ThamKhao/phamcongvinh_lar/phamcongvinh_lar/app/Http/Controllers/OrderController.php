<?php

namespace App\Http\Controllers;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Product;
use App\Models\OrderDetail;
use App\Models\ProductStore;
use App\Models\ProductSale;
class OrderController extends Controller
{

    public function store(Request $request)
    {
        $oder = new Order();
        $oder->name =  $request->name;
        $oder->user_id =  $request->user_id;
        $oder->name =  $request->name;


        $oder->phone =  $request->phone;
        $oder->email =  $request->email;
        $oder->address =  $request->address;
        $oder->note =  $request->note;

        $oder->status =  1;

        $oder->created_at =  date('Y-m-d H:i:s');
        if($oder->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thêm thành công',
                'oder'=>$oder
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Thêm thất bại',
                'oder'=>null
            ];
        }

        return response()->json($result);
    }
    public function createOrder(Request $request)
    {

        $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:product,id',
            'qty' => 'required|integer|min:1'
        ]);


        $productStore = ProductStore::where('product_id', $request->product_id)->first();
        $productSale = ProductSale::where('product_id', $request->product_id)->first();
        if (!$productStore || $productStore->qty < $request->qty) {
            return response()->json([
                'status' => false,
                'message' => 'Số lượng sản phẩm không đủ trong kho.'
            ], 400);
        }

        
        $order = new Order();
        $order->user_id = $request->input('user_id');
        $order->name = "Tên khách hàng mặc định";
        $order->phone = "0123456789";
        $order->email = "customer@example.com";
        $order->address = "Địa chỉ mặc định";
        $order->status = 1;
        $order->created_at = now();
        $order->save();

        $orderDetail = new OrderDetail();
        $orderDetail->order_id = $order->id;
        $orderDetail->product_id = $request->input('product_id');
        $orderDetail->qty = $request->input('qty');
        $orderDetail->price = Product::find($request->input('product_id'))->pricebuy;
        $orderDetail->amount = ($orderDetail->price - $productSale->pricesale) * $orderDetail->qty;
        $orderDetail->discount = $productSale->pricesale  * $orderDetail->qty;
        $orderDetail->save();

        $productStore->qty -= $request->input('qty');
        $productStore->save();

        return response()->json([
            'status' => true,
            'message' => 'Đơn hàng đã được tạo thành công.',
            'order' => $order,
            'order_detail' => $orderDetail
        ]);
    }

}
