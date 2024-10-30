<?php

namespace App\Http\Controllers;
use App\Models\Banner;
use App\Http\Requests\StoreBannerRequest;
use App\Http\Requests\UpdateBannerRequest;

use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index()
    {
        $banners = Banner::where('status','!=',0)
            ->orderBy('sort_order','ASC')
            ->select("id","name","image","position","status","updated_at")
            ->get();
            if($banners->isEmpty()) {
                $result = [
                    'status' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'banners' => null
                ];
            }
            else {
                $result =[
                    'status'=>true,
                    'message'=>'Tải dữ liệu thành công',
                    'banners'=>$banners
                ];
            }
        return response()->json($result);
    }

    public function trash()
    {
        $banners = Banner::where('status','=',0)
            ->orderBy('sort_order','ASC')
            ->select("id","name","image","position","status")
            ->get();
            if($banners->isEmpty()) {
                $result = [
                    'status' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'banners' => null
                ];
            }
            else {
                $result =[
                    'status'=>true,
                    'message'=>'Tải dữ liệu thành công',
                    'banners'=>$banners
                ];
            }
        return response()->json($result);
    }

    public function show($id)
    {
        $banner = Banner::find($id);
        if($banner==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'banner'=>$banner
            ];
        }
        else
        {
            $result =[
                'status'=>true,
                'message'=>'Tải dữ liệu thành công',
                'banner'=>$banner
            ];
        }
        return response()->json($result);
    }


    public function store(StoreBannerRequest $request)
    {
        $banner = new Banner();
        $banner->name =  $request->name;
        $banner->link =  $request->link;
        if ($request->image) {
            $imageName = date('YmdHis') . '.' . $request->image->extension();
            $request->image->move(public_path('images/banner'), $imageName);
            $banner->image = $imageName;
        }
        $banner->description =  $request->description;
        $banner->position = $request->position ?? 'slideshow';
        $banner->sort_order = $request->sort_order?? 1 ;
        $banner->created_by =  1;
        $banner->created_at =  date('Y-m-d H:i:s');
        $banner->updated_at = $request->updated_at ?? null;
        $banner->status =  1;
        if($banner->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thêm thành công',
                'banner'=>$banner
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Thêm thất bại',
                'banner'=>null
            ];
        }

        return response()->json($result);
    }


    public function update(UpdateBannerRequest $request, $id)
    {
        $banner = Banner::find($id);
        if($banner == null)
        {
            $result = [
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'banner' => $banner
            ];
        }
        else
        {
            $banner->name = $request->name;
            $banner->link = $request->link;

            if ($request->image) {
                if ($banner->image && file_exists(public_path('images/banner/'. $banner->image))) {
                    unlink(public_path('images/banner/' . $banner->image));
                }
                $exten=$request->image->extension();
                $imageName = date('YmdHis').'.'.$exten ;
                $request->image->move(public_path('images/banner'), $imageName);
                $banner->image = $imageName;
            }

            $banner->description = $request->description;
            $banner->position = $request->position ?? 'slideshow';
            $banner->sort_order = $request->sort_order??1;
            $banner->updated_by = 1;
            $banner->updated_at = date('Y-m-d H:i:s');
            $banner->status = $request->status ??1;

            $banner->save();
            $result = [
                'status' => true,
                'message' => 'Sửa thành công',
                'banner' => $banner
            ];
        }

        return response()->json($result);
    }



    public function status($id)
    {
        $banner = Banner::find($id);
        if($banner==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thầy thông tin',
                'banner'=>null
            ];
            return response()->json($result);
        }
        $banner->status = ($banner->status==1)?2:1;
        $banner->updated_by =  1;
        $banner->updated_at =  date('Y-m-d H:i:s');
        if($banner->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thay đổi thành công',
                'banner'=>$banner
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Không thể thay đổi',
                'banner'=>null
            ];
        }
        return response()->json($result);
    }


    public function delete($id)
    {
        $banner = Banner::find($id);
        if($banner==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'banner'=>$banner
            ];
        } elseif($banner->status==0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'banner'=>null
            ];
        }
        else
        {
            $banner->status = 0;
            $banner->updated_by =  1;
            $banner->updated_at =  date('Y-m-d H:i:s');
            $banner->save();
            $result =[
                'status'=>true,
                'message'=>'Dữ liệu đưa vào thùng rác thành công',
                'banner'=>$banner
            ];
        }
        return response()->json($result);
    }


    public function restore($id)
    {
        $banner = Banner::find($id);
        if($banner==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'banner'=>$banner
            ];
        } elseif($banner->status!=0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'banner'=>null
            ];
        }
        else
        {
            $banner->status = 2;
            $banner->updated_by =  1;
            $banner->updated_at =  date('Y-m-d H:i:s');
            $banner->save();
            $result =[
                'status'=>true,
                'message'=>'Khôi phục dữ liệu thành công',
                'banner'=>$banner
            ];
        }
        return response()->json($result);
    }


    public function destroy($id)
    {
        $banner = Banner::find($id);
        if($banner==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'banner'=>$banner
            ];
        }
        else
        {
            $imagePath = public_path('images/banner/' . $banner->image);
            if (file_exists($imagePath) && !empty($banner->image)) {
                unlink($imagePath);
            }
            $banner->delete();
            $result =[
                'status'=>true,
                'message'=>'Xóa dữ liệu thành công',
                'banner'=>$banner
            ];
        }
        return response()->json($result);
    }

}
