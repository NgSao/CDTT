<?php

namespace App\Http\Controllers;
use App\Models\Menu;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;

use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        $menus = menu::where('status','!=',0)
            ->orderBy('sort_order','ASC')
            ->select("id","name","table_id","type","position","parent_id","description","status")
            ->get();
        $result =[
            'status'=>true,
            'message'=>'Tải dữ liệu thành công',
            'menus'=>$menus
        ];
        return response()->json($result);
    }

    public function trash()
    {
        $menus = Menu::where('status','=',0)
            ->orderBy('sort_order','ASC')
            ->select("id","name","table_id","type","position","parent_id","description","status")
            ->get();
        $result =[
            'status'=>true,
            'message'=>'Tải dữ liệu thành công',
            'menus'=>$menus
        ];
        return response()->json($result);
    }

    public function show($id)
    {
        $menu = Menu::find($id);
        if($menu==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'menu'=>$menu
            ];
        }
        else
        {
            $result =[
                'status'=>true,
                'message'=>'Tải dữ liệu thành công',
                'menu'=>$menu
            ];
        }
        return response()->json($result);
    }


    public function store(StoreMenuRequest $request)
    {
        $menu = new menu();
        $menu->name =  $request->name;
        $menu->link =  $request->link;
        $menu->table_id =  $request->table_id;
        $menu->description =  $request->description;
        $menu->position =  $request->position ?? 'mainmenu';
        $menu->parent_id =  $request->parent_id ?? 0;
        $menu->description =  $request->description;
        $menu->sort_order =  $request->sort_order;
        $menu->status =  1;
        $menu->created_by =  1;
        $menu->created_at =  date('Y-m-d H:i:s');
        if($menu->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thêm thành công',
                'menu'=>$menu
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Thêm thất bại',
                'menu'=>null
            ];
        }

        return response()->json($result);
    }


    public function update(UpdateMenuRequest $request, $id)
    {
        $menu = Menu::find($id);
        if($menu==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'menu'=>$menu
            ];
        }
        else
        {
            $menu->name =  $request->name;
            $menu->link =  $request->link;
            $menu->table_id =  $request->table_id;
            $menu->description =  $request->description;
            $menu->position =  $request->position;
            $menu->parent_id =  $request->parent_id ?? 0;
            $menu->description =  $request->description;
            $menu->sort_order =  $request->sort_order;
            $menu->status = $request->status;
            $menu->updated_by =  1;
            $menu->updated_at = date('Y-m-d H:i:s');
            $menu->save();
            $result =[
                'status'=>true,
                'message'=>'Sửa thành công',
                'menu'=>$menu
            ];
        }
        return response()->json($result);
    }


    public function status($id)
    {
        $menu = Menu::where('status','=',$id)
        ->orderBy('sort_order','ASC')
        ->select("id","name","table_id","type","position","parent_id","description","status")
        ->get();
        if ($menu->isEmpty()) {
            $result = [
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'menu' => null
            ];
        } else {
            $result = [
                'status' => true,
                'message' => 'Tải dữ liệu thành công',
                'menu' => $menu
            ];
        }

        return response()->json($result);
    }


    public function delete($id)
    {
        $menu = Menu::find($id);
        if($menu==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'menu'=>$menu
            ];
        } elseif($menu->status!=1) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'menu'=>null
            ];
        }
        else
        {
            $menu->status = 0;
            $menu->updated_by =  1;
            $menu->updated_at =  date('Y-m-d H:i:s');
            $menu->save();
            $result =[
                'status'=>true,
                'message'=>'Dữ liệu đưa vào thùng rác thành công',
                'menu'=>$menu
            ];
        }
        return response()->json($result);
    }


    public function restore($id)
    {
        $menu = Menu::find($id);
        if($menu==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'menu'=>$menu
            ];
        } elseif($menu->status!=0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'menu'=>null
            ];
        }
        else
        {
            $menu->status = 1;
            $menu->updated_by =  1;
            $menu->updated_at =  date('Y-m-d H:i:s');
            $menu->save();
            $result =[
                'status'=>true,
                'message'=>'Khôi phục dữ liệu thành công',
                'menu'=>$menu
            ];
        }
        return response()->json($result);
    }



    public function destroy($id)
    {
        $menu = Menu::find($id);
        if($menu==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'menu'=>$menu
            ];
        } elseif($menu->status!=1) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'menu'=>null
            ];
        }
        else
        {
            $menu->status = 2;
            $menu->updated_by =  1;
            $menu->updated_at =  date('Y-m-d H:i:s');
            $menu->save();
            $result =[
                'status'=>true,
                'message'=>'Xóa dữ liệu thành công',
                'menu'=>$menu
            ];
        }
        return response()->json($result);
    }




}
