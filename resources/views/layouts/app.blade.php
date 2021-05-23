<!DOCTYPE html>
<html x-data="data()" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>@yield('title', env('APP_NAME'))</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="{{ asset('windmill-panel/assets/css/tailwind.output.css') }}" />

        @stack('styles')
        
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer
        ></script>
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
