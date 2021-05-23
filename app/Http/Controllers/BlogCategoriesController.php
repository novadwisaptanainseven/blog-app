<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogCategoriesController extends Controller
{

    public function index()
    {
        $title = "Categories";

        return view('admin.categories.index', compact('title'));
    }
}
