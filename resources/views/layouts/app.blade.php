<!DOCTYPE html>
<html x-data="data()" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {{-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"> --}}
        {{-- <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"> --}}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico">
        {{-- <link rel="manifest" href="/site.webmanifest"> --}}

        <title>@yield('title', env('APP_NAME'))</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('windmill-panel/assets/css/tailwind.output.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        @stack('styles')
        
        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
        <script src="{{ asset('windmill-panel/assets/js/init-alpine.js') }}"></script>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </head>
    <body>
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{'overflow-hidden': isSideMenuOpen}">
            @include('layouts.sidebar')
            <div class="flex flex-col flex-1 w-full">
                @include('layouts.header')
                <main class="h-full pb-16 overflow-y-auto">
                    @yield('content')
                </main>
            </div>
        </div>

    @stack('scripts')
    </body>
</html>
