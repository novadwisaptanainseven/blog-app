@php
    $name = $attributes->get('name');
    $toRouteName = $attributes->get('toRouteName');
    $isActive = str_contains(Route::currentRouteName(), $toRouteName);
    $counter = $attributes->get('counter');
@endphp

<div>
    <li class="relative px-6 py-3">
        @if ($toRouteName == "home")
            <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="/">
                {{ $slot }}

                <span class="ml-4">{{ $name }}</span>
            </a>
        @else 
            <a class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" href="{{ route($toRouteName) }}">
                {{ $slot }}

                <span class="ml-4">{{ $name }}</span>
            </a>
        @endif

        @if ($counter)
            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-fill dark:text-red-100 dark:bg-red-600">{{ $counter }}</span>
        @endif
    </li>
</div>