<!-- Vehicle Information Quote Step 1 -->
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Vehicle Information Quote - Step 1</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#059669", // Emerald 600
                        "primary-dark": "#047857", // Emerald 700
                        "charcoal": "#334155", // Slate 700 for text/accents
                        "charcoal-dark": "#1e293b", // Slate 800 for primary text
                        "background-light": "#f8fafc",
                        "background-dark": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "2xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        @layer base {
            body {
                @apply bg-background-light text-charcoal-dark font-display;
                -webkit-tap-highlight-color: transparent;
            }
            .dark body {
                @apply bg-background-dark text-slate-100;
            }
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .plate-input-focus:focus-within {
            @apply ring-2 ring-primary border-primary;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="min-h-screen flex flex-col">
<header class="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center p-4 justify-between max-w-md mx-auto">
<div class="flex items-center gap-2">
<div class="bg-primary text-white p-1.5 rounded-xl shadow-sm shadow-primary/20">
<span class="material-symbols-outlined text-2xl block">directions_car</span>
</div>
</div>
<h2 class="text-[17px] font-semibold tracking-tight flex-1 text-center text-charcoal-dark dark:text-white">Get a Quote</h2>
<div class="flex w-10 items-center justify-end">
<button class="flex items-center justify-center rounded-full h-10 w-10 text-charcoal hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
<span class="material-symbols-outlined">help_outline</span>
</button>
</div>
</div>
<div class="max-w-md mx-auto px-4 pb-3">
<div class="flex flex-col gap-1.5">
<div class="flex justify-between items-end">
<p class="text-[10px] font-bold uppercase tracking-[0.05em] text-charcoal/60 dark:text-slate-500">Step 1 of 4</p>
<p class="text-[11px] font-bold text-primary">25% COMPLETE</p>
</div>
<div class="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
<div class="h-full bg-primary transition-all duration-700 ease-out" style="width: 25%;"></div>
</div>
</div>
</div>
</header>
<main class="flex-1 max-w-md mx-auto w-full px-5 pb-36">
<div class="pt-8 pb-4">
<h3 class="text-3xl font-extrabold tracking-tight text-charcoal-dark dark:text-white">Vehicle Details</h3>
<p class="text-charcoal/70 dark:text-slate-400 text-base mt-2">Let's find your car to get started with your premium coverage.</p>
</div>
<div class="mt-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex flex-col gap-5">
<label class="flex flex-col gap-2">
<span class="text-sm font-bold text-charcoal-dark dark:text-slate-300 ml-0.5">License Plate</span>
<div class="relative plate-input-focus rounded-xl transition-all">
<input class="form-input w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-16 px-5 text-2xl font-black tracking-[0.2em] placeholder:text-slate-300 placeholder:font-normal placeholder:tracking-normal uppercase focus:ring-0 focus:border-primary transition-all" placeholder="ABC-1234" type="text"/>
<div class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
<span class="material-symbols-outlined">search</span>
</div>
</div>
</label>
<button class="w-full bg-primary text-white h-14 rounded-xl font-bold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 active:scale-[0.99]">
                Find My Car
            </button>
</div>
</div>
<div class="flex items-center gap-4 my-10">
<div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
<span class="text-[10px] font-bold text-charcoal/40 dark:text-slate-500 uppercase tracking-widest whitespace-nowrap">Manual Entry</span>
<div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
</div>
<div class="flex flex-col gap-5">
<div class="grid grid-cols-2 gap-4">
<label class="flex flex-col gap-1.5">
<span class="text-xs font-bold text-charcoal/70 dark:text-slate-400 ml-1">YEAR</span>
<select class="form-select w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 px-4 text-charcoal-dark dark:text-white font-medium focus:ring-primary focus:border-primary">
<option value="">Select Year</option>
<option>2024</option>
<option>2023</option>
<option>2022</option>
<option>2021</option>
</select>
</label>
<label class="flex flex-col gap-1.5">
<span class="text-xs font-bold text-charcoal/70 dark:text-slate-400 ml-1">MAKE</span>
<select class="form-select w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 px-4 text-charcoal-dark dark:text-white font-medium focus:ring-primary focus:border-primary">
<option value="">Select Make</option>
<option>Toyota</option>
<option>Honda</option>
<option>Ford</option>
<option>Tesla</option>
</select>
</label>
</div>
<label class="flex flex-col gap-1.5">
<span class="text-xs font-bold text-charcoal/70 dark:text-slate-400 ml-1">MODEL</span>
<select class="form-select w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 px-4 text-charcoal-dark dark:text-white font-medium focus:ring-primary focus:border-primary">
<option value="">Select Model</option>
</select>
</label>
</div>
<div class="mt-10">
<p class="text-base font-bold text-charcoal-dark dark:text-white mb-4">Primary vehicle use</p>
<div class="flex flex-col gap-3">
<label class="flex items-center justify-between p-4 rounded-2xl border-2 border-primary bg-emerald-50/50 dark:bg-emerald-950/10 cursor-pointer group transition-all">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary">commute</span>
</div>
<span class="font-bold text-charcoal-dark dark:text-white">Commuting</span>
</div>
<div class="relative flex items-center">
<input checked="" class="w-6 h-6 text-primary border-slate-300 focus:ring-primary focus:ring-offset-2" name="vehicle-use" type="radio"/>
</div>
</label>
<label class="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 group transition-all">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
<span class="material-symbols-outlined text-charcoal dark:text-slate-400">weekend</span>
</div>
<span class="font-semibold text-charcoal dark:text-slate-300">Pleasure</span>
</div>
<input class="w-6 h-6 text-primary border-slate-300 focus:ring-primary focus:ring-offset-2" name="vehicle-use" type="radio"/>
</label>
<label class="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 group transition-all">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
<span class="material-symbols-outlined text-charcoal dark:text-slate-400">work</span>
</div>
<span class="font-semibold text-charcoal dark:text-slate-300">Business</span>
</div>
<input class="w-6 h-6 text-primary border-slate-300 focus:ring-primary focus:ring-offset-2" name="vehicle-use" type="radio"/>
</label>
</div>
</div>
</main>
<footer class="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-10 safe-area-bottom">
<div class="max-w-md mx-auto">
<button class="w-full bg-primary text-white h-16 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-dark transition-all active:scale-[0.98] shadow-xl shadow-primary/10">
            Continue to Step 2
            <span class="material-symbols-outlined text-2xl">arrow_forward</span>
</button>
</div>
</footer>

</body></html>

<!-- Your Estimated Premium Quote Result -->
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#10b981", // Emerald 500
                        "primary-dark": "#059669", // Emerald 600
                        "charcoal": "#36454F",
                        "background-light": "#f9fafb",
                        "background-dark": "#121212",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<title>Quote Results</title>
<style type="text/tailwindcss">
        :root {
            --charcoal-gray: #36454F;
            --emerald-green: #10b981;
        }
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-slate-200 antialiased">
<div class="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-3 justify-between border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary cursor-pointer" data-icon="arrow_back">arrow_back</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8 text-charcoal dark:text-white">Quote Details</h2>
</div>
<div class="max-w-md mx-auto pb-48">
<div class="px-4 pt-8 pb-4">
<h1 class="text-charcoal dark:text-white tracking-tight text-2xl font-extrabold leading-tight text-center">Your Estimated Premium</h1>
<p class="text-center text-slate-500 dark:text-slate-400 text-sm mt-1">Based on your driving profile</p>
</div>
<div class="px-4 mb-8">
<div class="relative overflow-hidden bg-primary rounded-2xl p-8 shadow-xl shadow-emerald-500/20 text-center flex flex-col items-center justify-center min-h-[180px]">
<div class="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div class="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 bg-black/5 rounded-full blur-xl"></div>
<p class="relative z-10 text-white text-6xl font-extrabold tracking-tighter mb-1">$85<span class="text-xl font-medium opacity-90"> / mo</span></p>
<div class="relative z-10 inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm border border-white/30">
                    Best Value Plan
                </div>
</div>
</div>
<div class="px-4">
<h3 class="text-charcoal dark:text-white text-lg font-bold leading-tight tracking-tight pb-4">Personalize your coverage</h3>
<div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-5 space-y-8">
<div class="space-y-4">
<div class="flex items-center justify-between">
<p class="text-charcoal dark:text-slate-200 font-semibold">Deductible</p>
<p class="text-primary font-bold text-xl">$500</p>
</div>
<div class="relative w-full h-8 flex items-center">
<div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full relative">
<div class="absolute top-0 left-0 h-full w-1/2 bg-primary rounded-full"></div>
<div class="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-white border-2 border-primary rounded-full"></div>
<div class="absolute top-1/2 -translate-y-1/2 left-1/2 -ml-3 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-md z-10"></div>
<div class="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
</div>
</div>
<div class="flex justify-between text-xs font-semibold text-slate-400 px-1">
<span>$250</span>
<span>$500</span>
<span>$1000</span>
</div>
</div>
<div class="h-px bg-slate-100 dark:bg-slate-800"></div>
<div class="space-y-6">
<div class="flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-charcoal dark:text-slate-300">
<span class="material-symbols-outlined text-[20px]" data-icon="handyman">handyman</span>
</div>
<div>
<p class="text-charcoal dark:text-slate-200 font-semibold text-sm">Roadside Assistance</p>
<p class="text-xs text-slate-500 dark:text-slate-400">24/7 help anywhere</p>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-charcoal dark:text-slate-300">
<span class="material-symbols-outlined text-[20px]" data-icon="directions_car">directions_car</span>
</div>
<div>
<p class="text-charcoal dark:text-slate-200 font-semibold text-sm">Rental Reimbursement</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Car for up to 30 days</p>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</div>
<div class="px-6 py-8 text-center">
<p class="text-[11px] text-slate-400 leading-normal font-medium">
                Quote is an estimate based on information provided. Final premium may vary after driving record verification. Terms and conditions apply.
            </p>
</div>
</div>
<div class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 p-4 pb-10 space-y-3 max-w-md mx-auto z-50">
<button class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.98]">
            Purchase Policy
        </button>
<button class="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-charcoal dark:text-white font-bold py-3.5 rounded-2xl transition-all active:scale-[0.98]">
            Save for Later
        </button>
</div>

</body></html>

<!-- Driver Information Quote Step 2 -->
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Driver Information Quote Step 2</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#10b981", // Emerald 500
                        "primary-dark": "#059669", // Emerald 600
                        "charcoal": {
                            50: "#f6f7f7",
                            100: "#e7e9e9",
                            200: "#d1d5d6",
                            300: "#adb5b7",
                            400: "#7f8b8e",
                            500: "#637174",
                            600: "#505c5f",
                            700: "#434d50",
                            800: "#3a4143",
                            900: "#12181a", // Deep Charcoal
                        },
                        "background-light": "#fcfcfc",
                        "background-dark": "#12181a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "1rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
    body {
        font-family: 'Inter', sans-serif;
        -webkit-tap-highlight-color: transparent;
        min-height: max(884px, 100dvh);
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-charcoal-900 font-display">
<div class="relative flex h-screen max-w-md mx-auto flex-col bg-background-light dark:bg-charcoal-900 overflow-hidden">
<header class="flex items-center bg-background-light dark:bg-charcoal-900 p-4 pb-2 justify-between shrink-0">
<div class="text-charcoal-900 dark:text-white flex size-12 shrink-0 items-center cursor-pointer">
<span class="material-symbols-outlined text-[24px]">arrow_back_ios</span>
</div>
<h2 class="text-charcoal-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">Car Insurance</h2>
</header>
<main class="flex-1 overflow-y-auto pb-32">
<div class="flex flex-col gap-3 p-4">
<div class="flex gap-6 justify-between items-center">
<p class="text-charcoal-900 dark:text-charcoal-100 text-sm font-semibold tracking-tight uppercase">Step 2 of 4</p>
<p class="text-primary font-bold text-sm">50%</p>
</div>
<div class="rounded-full bg-charcoal-100 dark:bg-charcoal-800 overflow-hidden h-1.5">
<div class="h-full rounded-full bg-primary" style="width: 50%;"></div>
</div>
</div>
<div class="px-4 pt-5 pb-3">
<h1 class="text-charcoal-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">Driver Details</h1>
<p class="text-charcoal-500 dark:text-charcoal-400 text-base mt-1">Tell us a bit more to get your personalized quote.</p>
</div>
<div class="space-y-4">
<div class="flex flex-col px-4 py-2">
<label class="flex flex-col w-full">
<p class="text-charcoal-800 dark:text-charcoal-200 text-sm font-semibold leading-normal pb-2 ml-1">What's your zip code?</p>
<input class="form-input flex w-full rounded-xl text-charcoal-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-800 h-14 placeholder:text-charcoal-400 p-[15px] text-lg font-medium transition-all" inputmode="numeric" pattern="[0-9]*" placeholder="12345" type="number"/>
</label>
</div>
<div class="px-4 pt-4">
<p class="text-charcoal-800 dark:text-charcoal-200 text-sm font-semibold leading-normal pb-2 ml-1">Date of Birth</p>
<div class="relative group">
<input class="form-input flex w-full rounded-xl text-charcoal-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-800 h-14 p-[15px] text-lg font-medium text-left cursor-pointer transition-all" readonly="" type="text" value="05 / 24 / 1992"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-400 group-focus-within:text-primary">calendar_today</span>
</div>
</div>
<div class="px-4 py-6">
<p class="text-charcoal-800 dark:text-charcoal-200 text-sm font-semibold leading-normal pb-4 ml-1">Any accidents in the last 3 years?</p>
<div class="flex p-1.5 bg-charcoal-100 dark:bg-charcoal-800 rounded-2xl border border-charcoal-200 dark:border-charcoal-700">
<button class="flex-1 py-3 text-center text-sm font-bold rounded-xl bg-white dark:bg-charcoal-700 shadow-sm text-charcoal-900 dark:text-white transition-all ring-1 ring-charcoal-200/50 dark:ring-transparent">
                            No
                        </button>
<button class="flex-1 py-3 text-center text-sm font-bold rounded-xl text-charcoal-500 dark:text-charcoal-400 hover:text-charcoal-700 dark:hover:text-charcoal-200 transition-all">
                            Yes
                        </button>
</div>
</div>
</div>
</main>
<footer class="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-charcoal-900/90 backdrop-blur-lg border-t border-charcoal-200 dark:border-charcoal-800 p-4 pb-10 flex items-center justify-between gap-4">
<button class="px-4 py-4 text-charcoal-600 dark:text-charcoal-400 text-base font-bold hover:text-primary transition-colors">
                Back
            </button>
<button class="flex-1 bg-primary hover:bg-primary-dark text-white py-4 px-8 rounded-2xl text-base font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">
                Next
            </button>
</footer>
</div>

</body></html>

<!-- Final Policy Review -->
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Final Policy Review</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#10b981", // Emerald Green
                        "primary-dark": "#059669",
                        "charcoal": "#36454F",
                        "charcoal-dark": "#1f2937",
                        "background-light": "#f9fafb",
                        "background-dark": "#111827",
                    },
                    fontFamily: {
                        "display": ["Inter"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        @layer base {
            body { 
                font-family: 'Inter', sans-serif; 
                @apply bg-background-light text-charcoal-dark dark:bg-background-dark dark:text-slate-100;
            }
            .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
        }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="min-h-screen flex flex-col">
<nav class="sticky top-0 z-50 bg-white/80 dark:bg-charcoal-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center p-4 justify-between max-w-md mx-auto">
<div class="flex size-10 shrink-0 items-center justify-start cursor-pointer">
<span class="material-symbols-outlined text-charcoal-dark dark:text-slate-100">arrow_back_ios</span>
</div>
<h2 class="text-charcoal-dark dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Review &amp; Sign</h2>
</div>
</nav>
<main class="flex-1 max-w-md mx-auto w-full pb-32">
<div class="px-4 pt-6 pb-2">
<div class="flex justify-between items-center mb-2">
<span class="text-xs font-bold uppercase tracking-wider text-primary">Step 3 of 3</span>
<span class="text-xs text-slate-500 dark:text-slate-400">Final Review</span>
</div>
<div class="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
<div class="bg-primary h-full w-full rounded-full"></div>
</div>
</div>
<h3 class="text-charcoal-dark dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">Policy Summary</h3>
<div class="p-4 @container">
<div class="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 overflow-hidden">
<div class="w-full bg-center bg-no-repeat aspect-[16/7] bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFUTIB3JI0EqAmod6JS_TCL0ivAr8tNLFLBIAGid-JbwMEpGxziCS1EDq3MCgWGrxLd9EUk9JAVrLB3Y7yYokFGYfTSFsFdNOzmtJXe8ltjXqecQ0vC4aLQWAchGRRpPTvRmUJB0ObQmXcgaKRpTQd1V0KLtCog-FLBvOduxzy0UCaDe_UFaDvAcoQN-bItL8CvIS3tWLbdJJHtindmeHVUKm1xytKt5H9Z8AEUm39Xnb_a5ZOHx46Fui30QZONpAyfJURCc4Ve_zT");'>
</div>
<div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-5 px-5">
<div class="flex justify-between items-start">
<div>
<p class="text-primary text-sm font-bold uppercase tracking-wide mb-1">Total Premium</p>
<p class="text-charcoal-dark dark:text-white text-3xl font-extrabold leading-tight tracking-[-0.015em]">$142.50 <span class="text-base font-normal text-slate-400">/ mo</span></p>
</div>
<div class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                            Active Quote
                        </div>
</div>
<div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-slate-400 size-5">directions_car</span>
<p class="text-charcoal dark:text-slate-300 text-sm font-medium">2023 Tesla Model 3 • VIN: ...4567</p>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-slate-400 size-5">verified_user</span>
<div class="flex flex-col">
<p class="text-charcoal dark:text-slate-300 text-sm leading-normal">Comprehensive: $500 Deductible</p>
<p class="text-charcoal dark:text-slate-300 text-sm leading-normal">Liability: 100/300/50 Coverage</p>
</div>
</div>
</div>
<button class="mt-4 text-primary text-sm font-bold flex items-center gap-1 hover:text-primary-dark transition-colors">
                        View Full Policy Details
                        <span class="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</div>
</div>
<div class="px-4 mt-6" style="--checkbox-tick-svg: url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e');">
<h3 class="text-charcoal-dark dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Agreements</h3>
<div class="bg-primary/5 dark:bg-primary/10 rounded-xl p-2 border border-primary/10">
<label class="flex gap-x-3 py-3 px-2 flex-row cursor-pointer">
<input class="mt-1 h-5 w-5 rounded border-slate-300 dark:border-slate-600 border-2 bg-white dark:bg-slate-800 text-primary checked:bg-primary checked:border-primary checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors" type="checkbox"/>
<p class="text-charcoal-dark dark:text-slate-200 text-sm font-normal leading-relaxed">
                        I agree to the <a class="text-primary font-semibold underline decoration-primary/30" href="#">Terms of Service</a>, 
                        <a class="text-primary font-semibold underline decoration-primary/30" href="#">Privacy Policy</a>, and 
                        <a class="text-primary font-semibold underline decoration-primary/30" href="#">Electronic Signature Disclosure</a>.
                    </p>
</label>
</div>
</div>
<div class="flex justify-center mt-12 px-4 pb-12">
<button class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-charcoal-dark dark:hover:text-slate-200 transition-colors">
<span class="material-symbols-outlined text-lg">headset_mic</span>
                Need help? Talk to an agent
            </button>
</div>
</main>
<footer class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 p-4 pb-8 z-50">
<div class="max-w-md mx-auto">
<button class="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] w-full shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all active:scale-[0.98]">
<span class="truncate">Proceed to Payment</span>
<span class="material-symbols-outlined ml-2">arrow_forward</span>
</button>
<p class="text-center text-[10px] text-slate-400 mt-3 uppercase tracking-widest font-bold flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-xs">encrypted</span> Secure 256-bit Connection
            </p>
</div>
</footer>

</body></html>

<!-- Vehicle Information Quote Step 1 -->
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>First-Time User Registration</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#059669", // Emerald 600
                        "primary-dark": "#047857", // Emerald 700
                        "charcoal": "#334155", // Slate 700
                        "charcoal-dark": "#1e293b", // Slate 800
                        "background-light": "#f8fafc",
                        "background-dark": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "2xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        @layer base {
            body {
                @apply bg-background-light text-charcoal-dark font-display;
                -webkit-tap-highlight-color: transparent;
            }
            .dark body {
                @apply bg-background-dark text-slate-100;
            }
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .segmented-control input:checked + label {
            @apply bg-white text-charcoal-dark shadow-sm ring-1 ring-slate-200;
        }
        .dark .segmented-control input:checked + label {
            @apply bg-slate-700 text-white ring-slate-600;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="min-h-screen flex flex-col">
<header class="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center p-4 justify-between max-w-md mx-auto">
<button class="flex items-center justify-center rounded-full h-10 w-10 text-charcoal dark:text-slate-400">
<span class="material-symbols-outlined">arrow_back_ios_new</span>
</button>
<h2 class="text-[17px] font-semibold tracking-tight text-charcoal-dark dark:text-white">Profile Setup</h2>
<div class="w-10"></div>
</div>
<div class="max-w-md mx-auto px-4 pb-3">
<div class="flex flex-col gap-1.5">
<div class="flex justify-between items-end">
<p class="text-[10px] font-bold uppercase tracking-[0.05em] text-charcoal/60 dark:text-slate-500">Account Verified</p>
<p class="text-[11px] font-bold text-primary">STEP 1 OF 2</p>
</div>
<div class="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
<div class="h-full bg-primary" style="width: 50%;"></div>
</div>
</div>
</div>
</header>
<main class="flex-1 max-w-md mx-auto w-full px-5 pt-8 pb-36">
<div class="mb-8 text-center">
<div class="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
<span class="material-symbols-outlined text-primary text-4xl">person_add</span>
</div>
<h3 class="text-3xl font-extrabold tracking-tight text-charcoal-dark dark:text-white">Welcome!</h3>
<p class="text-charcoal/70 dark:text-slate-400 text-base mt-2">Please provide a few details to personalize your insurance experience.</p>
</div>
<form class="space-y-6">
<div class="flex flex-col gap-2">
<label class="text-sm font-bold text-charcoal-dark dark:text-slate-300 ml-1" for="full-name">Full Name</label>
<div class="relative">
<input class="form-input w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 px-4 text-charcoal-dark dark:text-white font-medium focus:ring-primary focus:border-primary transition-all" id="full-name" placeholder="John Doe" type="text"/>
<div class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
<span class="material-symbols-outlined">badge</span>
</div>
</div>
</div>
<div class="flex flex-col gap-2">
<label class="text-sm font-bold text-charcoal-dark dark:text-slate-300 ml-1" for="age">Age</label>
<div class="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 overflow-hidden">
<button class="w-16 h-full flex items-center justify-center text-charcoal active:bg-slate-100 dark:active:bg-slate-800 transition-colors" type="button">
<span class="material-symbols-outlined">remove</span>
</button>
<input class="flex-1 text-center border-none bg-transparent text-lg font-bold text-charcoal-dark dark:text-white focus:ring-0" id="age" max="100" min="16" type="number" value="25"/>
<button class="w-16 h-full flex items-center justify-center text-charcoal active:bg-slate-100 dark:active:bg-slate-800 transition-colors" type="button">
<span class="material-symbols-outlined">add</span>
</button>
</div>
<p class="text-[11px] text-charcoal/50 dark:text-slate-500 ml-1 italic">Must be at least 16 years old</p>
</div>
<div class="flex flex-col gap-2">
<label class="text-sm font-bold text-charcoal-dark dark:text-slate-300 ml-1">Gender</label>
<div class="segmented-control flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-full">
<div class="flex-1">
<input checked="" class="hidden" id="male" name="gender" type="radio" value="male"/>
<label class="flex items-center justify-center h-10 rounded-lg text-sm font-semibold text-charcoal/60 dark:text-slate-400 cursor-pointer transition-all" for="male">
                            Male
                        </label>
</div>
<div class="flex-1">
<input class="hidden" id="female" name="gender" type="radio" value="female"/>
<label class="flex items-center justify-center h-10 rounded-lg text-sm font-semibold text-charcoal/60 dark:text-slate-400 cursor-pointer transition-all" for="female">
                            Female
                        </label>
</div>
<div class="flex-1">
<input class="hidden" id="other" name="gender" type="radio" value="other"/>
<label class="flex items-center justify-center h-10 rounded-lg text-sm font-semibold text-charcoal/60 dark:text-slate-400 cursor-pointer transition-all" for="other">
                            Other
                        </label>
</div>
</div>
</div>
<div class="pt-2">
<label class="flex items-start gap-3 cursor-pointer">
<input checked="" class="mt-1 w-5 h-5 rounded text-primary border-slate-300 focus:ring-primary focus:ring-offset-0" type="checkbox"/>
<span class="text-xs text-charcoal/70 dark:text-slate-400 leading-relaxed">
                        I agree to the <a class="text-primary font-semibold underline" href="#">Terms of Service</a> and <a class="text-primary font-semibold underline" href="#">Privacy Policy</a>.
                    </span>
</label>
</div>
</form>
</main>
<footer class="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-10 safe-area-bottom">
<div class="max-w-md mx-auto">
<button class="w-full bg-primary text-white h-16 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-dark transition-all active:scale-[0.98] shadow-xl shadow-primary/20">
                Complete Profile
                <span class="material-symbols-outlined text-2xl">check_circle</span>
</button>
</div>
</footer>

</body></html>

<!-- Vehicle Information Quote Step 1 -->
<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Purchase Policy - Sign In</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#10b981", // Emerald 500
                        "primary-dark": "#059669", // Emerald 600
                        "charcoal": "#334155", // Slate 700
                        "charcoal-dark": "#0f172a", // Slate 900
                        "background-light": "#fcfdfd",
                        "background-dark": "#020617",
                    },
                    fontFamily: {
                        "display": ["Plus Jakarta Sans", "Inter", "sans-serif"],
                        "sans": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "2xl": "1.5rem",
                        "3xl": "2.25rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        @layer base {
            body {
                @apply bg-background-light text-charcoal-dark font-sans antialiased;
                -webkit-tap-highlight-color: transparent;
            }
            .dark body {
                @apply bg-background-dark text-slate-100;
            }
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
        body {
            min-height: 100dvh;
            display: flex;
            flex-direction: column;
            background: 
                radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
                radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.05) 0%, transparent 40%);
        }
        .dark body {
            background: 
                radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.12) 0%, transparent 40%),
                radial-gradient(circle at 0% 100%, rgba(15, 23, 42, 1) 0%, transparent 40%);
        }
        .premium-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
        }
        .dark .premium-card {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-social {
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(226, 232, 240, 0.8);
        }
        .dark .glass-social {
            background: rgba(30, 41, 59, 0.4);
            border: 1px solid rgba(51, 65, 85, 0.5);
        }
        .safe-area-bottom {
            padding-bottom: env(safe-area-inset-bottom, 1.5rem);
        }
        .otp-button-glow {
            box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.4);
        }
        .mesh-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 350px;
            background: linear-gradient(180deg, rgba(16, 185, 129, 0.04) 0%, transparent 100%);
            z-index: -1;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="flex flex-col relative overflow-x-hidden">
<div class="mesh-bg"></div>
<header class="sticky top-0 z-50 bg-white/60 dark:bg-background-dark/60 backdrop-blur-xl">
<div class="flex items-center p-4 justify-between max-w-md mx-auto w-full">
<button class="flex items-center justify-center rounded-full h-10 w-10 text-charcoal-dark dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 shadow-sm border border-slate-100 dark:border-slate-700 active:scale-95 transition-all">
<span class="material-symbols-outlined !text-xl">arrow_back_ios_new</span>
</button>
<div class="flex flex-col items-center">
<span class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-500">Checkout</span>
<span class="text-sm font-bold text-charcoal-dark dark:text-white font-display">Final Step</span>
</div>
<div class="w-10"></div>
</div>
</header>
<main class="flex-1 max-w-md mx-auto w-full px-6 flex flex-col pt-4">
<div class="premium-card rounded-3xl p-5 mb-8 flex items-center gap-5 relative overflow-hidden group">
<div class="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div class="relative">
<div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl text-primary ring-4 ring-primary/5">
<span class="material-symbols-outlined !text-3xl">verified_user</span>
</div>
</div>
<div class="flex-1">
<p class="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">Quote Secured</p>
<div class="flex items-baseline gap-1">
<p class="text-xl font-bold text-charcoal-dark dark:text-white font-display">$42.50</p>
<p class="text-xs font-medium text-charcoal/60 dark:text-slate-400">/ month</p>
</div>
</div>
<div class="flex flex-col items-center justify-center pr-1">
<span class="material-symbols-outlined text-emerald-500/30 !text-4xl select-none">directions_car</span>
</div>
</div>
<div class="pb-8">
<h1 class="text-[32px] tracking-tight text-charcoal-dark dark:text-white leading-[1.1] font-display">
<span class="font-light block">Secure your</span>
<span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-charcoal-dark to-slate-500 dark:from-white dark:to-slate-400">new policy</span>
</h1>
<p class="text-charcoal/60 dark:text-slate-400 text-sm mt-3 leading-relaxed">Confirm your identity to finalize your coverage in seconds.</p>
</div>
<div class="flex flex-col gap-8">
<div class="space-y-5">
<div class="flex flex-col gap-2.5">
<label class="text-xs font-bold text-charcoal/50 dark:text-slate-400 ml-1 uppercase tracking-wider" for="identifier">Email or Mobile Number</label>
<div class="relative group">
<input class="form-input w-full rounded-2xl border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 h-[72px] px-6 text-lg font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-display" id="identifier" placeholder="name@email.com" type="text"/>
<div class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined">alternate_email</span>
</div>
</div>
</div>
<button class="w-full bg-primary text-white h-[72px] rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all otp-button-glow active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden group">
<span class="relative z-10">Send Secure Code</span>
<span class="material-symbols-outlined text-xl relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
<div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
</button>
</div>
<div class="flex items-center gap-4 py-2">
<div class="h-[1px] flex-1 bg-slate-100 dark:bg-slate-800/60"></div>
<span class="text-[10px] font-black text-charcoal/30 dark:text-slate-600 uppercase tracking-[0.2em] whitespace-nowrap">Instant access with</span>
<div class="h-[1px] flex-1 bg-slate-100 dark:bg-slate-800/60"></div>
</div>
<div class="grid grid-cols-2 gap-4">
<button class="glass-social h-16 rounded-2xl font-bold text-charcoal-dark dark:text-white flex items-center justify-center gap-3 hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-[0.96]">
<svg class="w-5 h-5" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<span class="text-sm">Google</span>
</button>
<button class="glass-social h-16 rounded-2xl font-bold text-charcoal-dark dark:text-white flex items-center justify-center gap-3 hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-[0.96]">
<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
<path d="M17.05 20.28c-.96 0-2.04-.6-3.23-.6-1.2 0-2.09.58-3.13.58-1.47 0-3.35-1.44-4.53-3.37-1.74-2.85-2.14-6.3-.96-8.24.73-1.22 2.1-1.98 3.55-1.98.98 0 1.8.44 2.53.44.64 0 1.4-.42 2.58-.42 1.25 0 2.37.58 3.1 1.55-2.48 1.22-2.08 4.3.4 5.3-.57 1.4-1.33 2.76-2.3 3.74-.63.63-1.07.96-1.97.96zm-1.87-16.15c.66-.82 1.1-1.95.98-3.08-1.04.04-2.3.7-3.05 1.58-.67.77-1.2 1.93-1.07 3.03 1.15.09 2.3-.55 3.14-1.53z"></path>
</svg>
<span class="text-sm">Apple</span>
</button>
</div>
</div>
</main>
<footer class="mt-auto p-8 safe-area-bottom">
<div class="max-w-md mx-auto text-center">
<p class="text-charcoal/40 dark:text-slate-500 font-medium text-sm">
                New to our platform? 
                <a class="text-primary font-bold hover:text-primary-dark transition-colors ml-1 inline-flex items-center gap-0.5" href="#">
                    Create account
                    <span class="material-symbols-outlined !text-base">arrow_outward</span>
</a>
</p>
<div class="mt-6 flex justify-center gap-4 text-[10px] font-bold text-charcoal/20 dark:text-slate-700 uppercase tracking-widest">
<a href="#">Privacy</a>
<span>•</span>
<a href="#">Security</a>
<span>•</span>
<a href="#">Terms</a>
</div>
</div>
</footer>
<style>
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
    </style>

</body></html>


<!--  -->

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>First-Time User Registration</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#059669", // Emerald 600
                        "primary-dark": "#047857", // Emerald 700
                        "charcoal": "#334155", // Slate 700
                        "charcoal-dark": "#1e293b", // Slate 800
                        "background-light": "#f8fafc",
                        "background-dark": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "2xl": "1.5rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        @layer base {
            body {
                @apply bg-background-light text-charcoal-dark font-display;
                -webkit-tap-highlight-color: transparent;
            }
            .dark body {
                @apply bg-background-dark text-slate-100;
            }
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .segmented-control input:checked + label {
            @apply bg-white text-charcoal-dark shadow-sm ring-1 ring-slate-200;
        }
        .dark .segmented-control input:checked + label {
            @apply bg-slate-700 text-white ring-slate-600;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="min-h-screen flex flex-col">
<header class="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center p-4 justify-between max-w-md mx-auto">
<button class="flex items-center justify-center rounded-full h-10 w-10 text-charcoal dark:text-slate-400">
<span class="material-symbols-outlined">arrow_back_ios_new</span>
</button>
<h2 class="text-[17px] font-semibold tracking-tight text-charcoal-dark dark:text-white">Profile Setup</h2>
<div class="w-10"></div>
</div>
<div class="max-w-md mx-auto px-4 pb-3">
<div class="flex flex-col gap-1.5">
<div class="flex justify-between items-end">
<p class="text-[10px] font-bold uppercase tracking-[0.05em] text-charcoal/60 dark:text-slate-500">Account Verified</p>
<p class="text-[11px] font-bold text-primary">STEP 1 OF 2</p>
</div>
<div class="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
<div class="h-full bg-primary" style="width: 50%;"></div>
</div>
</div>
</div>
</header>
<main class="flex-1 max-w-md mx-auto w-full px-5 pt-8 pb-36">
<div class="mb-8 text-center">
<div class="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
<span class="material-symbols-outlined text-primary text-4xl">person_add</span>
</div>
<h3 class="text-3xl font-extrabold tracking-tight text-charcoal-dark dark:text-white">Welcome!</h3>
<p class="text-charcoal/70 dark:text-slate-400 text-base mt-2">Please provide a few details to personalize your insurance experience.</p>
</div>
<form class="space-y-6">
<div class="flex flex-col gap-2">
<label class="text-sm font-bold text-charcoal-dark dark:text-slate-300 ml-1" for="full-name">Full Name</label>
<div class="relative">
<input class="form-input w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-14 px-4 text-charcoal-dark dark:text-white font-medium focus:ring-primary focus:border-primary transition-all" id="full-name" placeholder="John Doe" type="text"/>
<div class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
<span class="material-symbols-outlined">badge</span>
</div>
</div>
</div>
<div class="flex flex-col gap-2">
<label class="text-sm font-bold text-charcoal-dark dark:text-slate-300 ml-1" for="age">Age</label>
<div class="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 overflow-hidden">
<button class="w-16 h-full flex items-center justify-center text-charcoal active:bg-slate-100 dark:active:bg-slate-800 transition-colors" type="button">
<span class="material-symbols-outlined">remove</span>
</button>
<input class="flex-1 text-center border-none bg-transparent text-lg font-bold text-charcoal-dark dark:text-white focus:ring-0" id="age" max="100" min="16" type="number" value="25"/>
<button class="w-16 h-full flex items-center justify-center text-charcoal active:bg-slate-100 dark:active:bg-slate-800 transition-colors" type="button">
<span class="material-symbols-outlined">add</span>
</button>
</div>
<p class="text-[11px] text-charcoal/50 dark:text-slate-500 ml-1 italic">Must be at least 16 years old</p>
</div>
<div class="flex flex-col gap-2">
<label class="text-sm font-bold text-charcoal-dark dark:text-slate-300 ml-1">Gender</label>
<div class="segmented-control flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-full">
<div class="flex-1">
<input checked="" class="hidden" id="male" name="gender" type="radio" value="male"/>
<label class="flex items-center justify-center h-10 rounded-lg text-sm font-semibold text-charcoal/60 dark:text-slate-400 cursor-pointer transition-all" for="male">
                            Male
                        </label>
</div>
<div class="flex-1">
<input class="hidden" id="female" name="gender" type="radio" value="female"/>
<label class="flex items-center justify-center h-10 rounded-lg text-sm font-semibold text-charcoal/60 dark:text-slate-400 cursor-pointer transition-all" for="female">
                            Female
                        </label>
</div>
<div class="flex-1">
<input class="hidden" id="other" name="gender" type="radio" value="other"/>
<label class="flex items-center justify-center h-10 rounded-lg text-sm font-semibold text-charcoal/60 dark:text-slate-400 cursor-pointer transition-all" for="other">
                            Other
                        </label>
</div>
</div>
</div>
<div class="pt-2">
<label class="flex items-start gap-3 cursor-pointer">
<input checked="" class="mt-1 w-5 h-5 rounded text-primary border-slate-300 focus:ring-primary focus:ring-offset-0" type="checkbox"/>
<span class="text-xs text-charcoal/70 dark:text-slate-400 leading-relaxed">
                        I agree to the <a class="text-primary font-semibold underline" href="#">Terms of Service</a> and <a class="text-primary font-semibold underline" href="#">Privacy Policy</a>.
                    </span>
</label>
</div>
</form>
</main>
<footer class="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-10 safe-area-bottom">
<div class="max-w-md mx-auto">
<button class="w-full bg-primary text-white h-16 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-dark transition-all active:scale-[0.98] shadow-xl shadow-primary/20">
                Complete Profile
                <span class="material-symbols-outlined text-2xl">check_circle</span>
</button>
</div>
</footer>

</body></html>


<!-- design system -->
<!-- Design System: Cards & Icons -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Design System: Cards &amp; Icons</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#137fec",
                        "background-light": "#f6f7f8",
                        "background-dark": "#101922",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display min-h-screen">
<!-- Top App Bar -->
<div class="sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
<div class="text-[#0d141b] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer">
<span class="material-symbols-outlined text-2xl">arrow_back_ios</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Cards &amp; Feedback</h2>
</div>
<div class="max-w-md mx-auto pb-12">
<!-- Section: Premium Quote -->
<h2 class="text-[#0d141b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-6">Premium Quote</h2>
<div class="px-4">
<div class="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 overflow-hidden">
<div class="w-full bg-center bg-no-repeat aspect-video bg-cover relative" data-alt="Modern blue car driving on highway" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo0Oa-JFpuE-0i6z_DZWnWbqWkc4r0yLmz2bX_EwXJhwlILZGAO2claAA5oYITYgIzZMGMi-nmxOEmV52z-FgtQ1cvFbSs5R2jj7wHDDTPl5frOoeg0CCV0aHIM-TAvPI4CfE91qrF62eoJJyqwpcCFr_Fnst2TYJpzRsR-UdJzHTsnheCCeZEv808NLLHieD50Wb_Bwfi0W6fDQfkx9H1_m2GBVrTdOtK43Wv0N7a0yGExKD0WPretTCRc1U8IJlfsxqJxOXCyHTa");'>
<div class="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
</div>
<div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-4 p-5">
<div class="flex justify-between items-start">
<div>
<p class="text-primary text-4xl font-bold leading-tight tracking-tight">$142.50<span class="text-sm font-normal text-slate-500"> /mo</span></p>
<p class="text-[#4c739a] dark:text-slate-400 text-sm font-medium mt-1">Comprehensive Elite Plan</p>
</div>
<div class="flex flex-col items-end">
<span class="text-[10px] font-bold text-slate-400 uppercase">Yearly</span>
<p class="text-[#0d141b] dark:text-white font-semibold">$1,620</p>
</div>
</div>
<div class="flex items-center gap-3">
<button class="flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-sm font-bold leading-normal shadow-md active:scale-95 transition-transform">
                            Select This Plan
                        </button>
</div>
<div class="flex items-center gap-2 text-slate-500 text-xs">
<span class="material-symbols-outlined text-sm">verified_user</span>
<span>Price locked for next 30 days</span>
</div>
</div>
</div>
</div>
<!-- Section: Active Policy Dashboard -->
<h2 class="text-[#0d141b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Active Policy</h2>
<div class="px-4">
<div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
<div class="flex justify-between items-start mb-4">
<div class="flex items-center gap-3">
<div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">directions_car</span>
</div>
<div>
<h3 class="font-bold text-[#0d141b] dark:text-white">2023 Tesla Model 3</h3>
<p class="text-xs text-slate-500">VIN: 5YJ3E1EAXP... • Plate: B-552-UI</p>
</div>
</div>
<div class="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Active</div>
</div>
<div class="relative h-2 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
<div class="absolute top-0 left-0 h-full bg-primary w-2/3"></div>
</div>
<div class="flex justify-between text-[11px] text-slate-500 font-medium uppercase tracking-tight">
<span>Oct 2023</span>
<span>Renewal in 4 Months</span>
<span>Oct 2024</span>
</div>
</div>
</div>
<!-- Section: Feedback & Status -->
<h2 class="text-[#0d141b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Status Chips</h2>
<div class="px-4 flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
<div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold border border-green-200 dark:border-green-800/50">
<span class="size-1.5 rounded-full bg-green-600"></span>
                Active
            </div>
<div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-200 dark:border-amber-800/50">
<span class="size-1.5 rounded-full bg-amber-600"></span>
                Under Review
            </div>
<div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold border border-red-200 dark:border-red-800/50">
<span class="size-1.5 rounded-full bg-red-600"></span>
                Expired
            </div>
</div>
<!-- Section: Policy Summary -->
<h2 class="text-[#0d141b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-4">Policy Summary</h2>
<div class="px-4">
<div class="bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-2">
<div class="p-2">
<div class="flex justify-between gap-x-6 py-3 border-b border-gray-50 dark:border-slate-800">
<p class="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal">Coverage Limit</p>
<p class="text-[#0d141b] dark:text-white text-sm font-bold leading-normal text-right">$500,000</p>
</div>
<div class="flex justify-between gap-x-6 py-3 border-b border-gray-50 dark:border-slate-800">
<p class="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal">Deductible</p>
<p class="text-[#0d141b] dark:text-white text-sm font-bold leading-normal text-right">$500</p>
</div>
<div class="flex justify-between gap-x-6 py-3">
<p class="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal">Policy Period</p>
<p class="text-[#0d141b] dark:text-white text-sm font-bold leading-normal text-right">12 Months</p>
</div>
</div>
</div>
</div>
<!-- Dashboard Grid Icons -->
<h2 class="text-[#0d141b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">Dashboard Actions</h2>
<div class="px-4 grid grid-cols-3 gap-4">
<div class="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">report_problem</span>
</div>
<span class="text-xs font-bold text-[#0d141b] dark:text-white">Claims</span>
</div>
<div class="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">badge</span>
</div>
<span class="text-xs font-bold text-[#0d141b] dark:text-white">Digital ID</span>
</div>
<div class="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">description</span>
</div>
<span class="text-xs font-bold text-[#0d141b] dark:text-white">Docs</span>
</div>
</div>
<!-- Security Feedback -->
<div class="mt-12 px-8 flex flex-col items-center text-center">
<div class="mb-4 relative">
<div class="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
<div class="relative bg-white dark:bg-slate-900 size-20 rounded-2xl border border-primary/20 flex items-center justify-center shadow-xl">
<span class="material-symbols-outlined text-primary text-5xl" style="font-variation-settings: 'FILL' 1;">shield_lock</span>
</div>
</div>
<h3 class="text-[#0d141b] dark:text-white font-bold text-lg">Secure &amp; Encrypted</h3>
<p class="text-[#4c739a] dark:text-slate-400 text-sm px-4 mt-2">Your data is protected by industry-leading 256-bit AES encryption and secure cloud infrastructure.</p>
</div>
<div class="h-10"></div>
</div>
</body></html>

<!-- Design System: Buttons & Inputs -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Design System: Buttons &amp; Inputs</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#13ec92",
                        "background-light": "#f6f8f7",
                        "background-dark": "#10221a",
                        "charcoal": "#1a1a1a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
<div class="flex items-center p-4 justify-between max-w-md mx-auto">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-charcoal dark:text-white">arrow_back_ios</span>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">Buttons &amp; Inputs</h2>
</div>
<span class="text-primary text-sm font-semibold">V1.0</span>
</div>
</header>
<main class="max-w-md mx-auto pb-20">
<!-- Section: Primary Buttons -->
<section class="mt-6">
<h2 class="text-[#0d1b16] dark:text-slate-200 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-1 pt-5">Primary Buttons</h2>
<p class="text-sm text-slate-500 dark:text-slate-400 px-4 mb-4">The main call-to-action using Emerald Green.</p>
<div class="space-y-2">
<!-- Active State -->
<div class="px-4 py-2">
<p class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Active</p>
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-charcoal text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
<span class="truncate">Get a Quote</span>
</button>
</div>
<!-- Pressed State -->
<div class="px-4 py-2">
<p class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Pressed / Focused</p>
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-[#0fcb7e] text-charcoal text-base font-bold leading-normal tracking-[0.015em] ring-4 ring-primary/30">
<span class="truncate">Button Pressed</span>
</button>
</div>
<!-- Disabled State -->
<div class="px-4 py-2">
<p class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Disabled</p>
<button class="flex w-full cursor-not-allowed items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 text-base font-bold leading-normal tracking-[0.015em]" disabled="">
<span class="truncate">Inactive Action</span>
</button>
</div>
</div>
</section>
<!-- Section: Secondary & Social -->
<section class="mt-8">
<h2 class="text-[#0d1b16] dark:text-slate-200 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Secondary &amp; Social</h2>
<div class="px-4 space-y-4">
<!-- Secondary Button -->
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 border-2 border-charcoal dark:border-slate-700 bg-transparent text-charcoal dark:text-white text-base font-bold">
                    View Policy Details
                </button>
<div class="flex items-center gap-4 py-2">
<div class="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
<span class="text-xs font-medium text-slate-400 uppercase">Or continue with</span>
<div class="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
</div>
<!-- Apple Button -->
<button class="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-14 px-5 bg-black text-white text-base font-semibold shadow-sm">
<svg class="w-5 h-5 fill-current" viewbox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.7-84.5-22.7-46.9 0-90.3 26.4-113.6 66.9C10 326.7 34 445.6 71.3 499.7c18.1 26.2 40.5 55.4 69.2 54.4 27.5-1.1 38-17.7 71.4-17.7 33.1 0 42.7 17.7 71.5 17.2 29.5-.5 48.7-26.2 66.8-52.7 21-30.6 29.6-60.3 29.8-61.9-.8-.3-57.1-22.1-57.7-86.2zm-46.6-189.9c15.8-19.4 26.5-46.4 23.5-73.4-23.1 1-51.1 15.5-67.7 35.1-14.9 17.5-28 44.9-24.5 71.3 25.7 2 52.8-13.6 68.7-33z"></path></svg>
<span>Sign in with Apple</span>
</button>
<!-- Google Button -->
<button class="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-14 px-5 bg-white border border-slate-200 text-charcoal text-base font-semibold shadow-sm">
<svg class="w-5 h-5" viewbox="0 0 48 48"><path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"></path><path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"></path><path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"></path><path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"></path></svg>
<span>Continue with Google</span>
</button>
</div>
</section>
<!-- Section: Input Fields -->
<section class="mt-10">
<h2 class="text-[#0d1b16] dark:text-slate-200 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Input Fields</h2>
<div class="px-4 space-y-6">
<!-- License Plate Input -->
<div>
<label class="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Vehicle Registration</label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 flex items-center pl-4">
<span class="material-symbols-outlined text-slate-400 group-focus-within:text-primary">directions_car</span>
</div>
<input class="w-full h-14 pl-12 pr-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-xl focus:border-primary focus:ring-0 text-lg font-bold tracking-widest uppercase transition-all" placeholder="ABC-1234" type="text"/>
</div>
</div>
<!-- Email Input -->
<div>
<label class="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Email Address</label>
<input class="w-full h-14 px-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-xl focus:border-primary focus:ring-0 text-base" placeholder="name@example.com" type="email"/>
</div>
<!-- Error State Example -->
<div>
<label class="block text-sm font-semibold mb-2 text-red-500">Mobile Number</label>
<div class="relative">
<input class="w-full h-14 px-4 bg-white dark:bg-slate-900 border-2 border-red-500 rounded-xl focus:ring-0 text-base text-red-600 font-medium" type="tel" value="+1 234 567"/>
<span class="absolute right-4 top-4 text-red-500 material-symbols-outlined">error</span>
</div>
<p class="mt-1.5 text-xs text-red-500 font-medium">Please enter a valid phone number</p>
</div>
</div>
</section>
<!-- Section: Verification OTP -->
<section class="mt-10">
<h2 class="text-[#0d1b16] dark:text-slate-200 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">OTP Verification</h2>
<p class="text-sm text-slate-500 dark:text-slate-400 px-4 mb-6">Sent to •••• 5678</p>
<div class="px-4">
<div class="flex justify-between max-w-xs mx-auto gap-2">
<input class="w-12 h-16 text-center text-2xl font-bold bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" maxlength="1" type="text" value="4"/>
<input class="w-12 h-16 text-center text-2xl font-bold bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" maxlength="1" type="text" value="8"/>
<input autofocus="" class="w-12 h-16 text-center text-2xl font-bold bg-white dark:bg-slate-900 border-2 border-primary rounded-xl ring-2 ring-primary/20 transition-all" maxlength="1" type="text"/>
<input class="w-12 h-16 text-center text-2xl font-bold bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" maxlength="1" type="text"/>
<input class="w-12 h-16 text-center text-2xl font-bold bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" maxlength="1" type="text"/>
</div>
<div class="mt-8 text-center">
<button class="text-primary font-bold text-sm">Resend Code</button>
</div>
</div>
</section>
<!-- Bottom Sheet Preview (Floating Summary) -->
<div class="fixed bottom-0 left-0 right-0 p-4 max-w-md mx-auto pointer-events-none">
<div class="bg-charcoal dark:bg-slate-800 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between pointer-events-auto border border-white/10">
<div class="flex items-center gap-3">
<div class="bg-primary/20 p-2 rounded-lg">
<span class="material-symbols-outlined text-primary text-xl">palette</span>
</div>
<div>
<p class="text-xs text-slate-400">Design Tokens</p>
<p class="text-sm font-bold">Premium Theme Active</p>
</div>
</div>
<button class="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                    Preview
                </button>
</div>
</div>
</main>
</body></html>

<!-- Design System: Controls & Sliders -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Design System: Controls &amp; Sliders</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#11d473",
                        "background-light": "#f6f8f7",
                        "background-dark": "#102219",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .slider-thumb::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            background: #11d473;
            border: 4px solid white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .slider-thumb::-moz-range-thumb {
            width: 24px;
            height: 24px;
            background: #11d473;
            border: 4px solid white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-[#0d1b14] dark:text-white font-display">
<div class="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden border-x border-gray-200 dark:border-gray-800 shadow-xl">
<!-- TopAppBar -->
<div class="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
<div class="text-[#0d1b14] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
<span class="material-symbols-outlined">arrow_back_ios</span>
</div>
<h2 class="text-[#0d1b14] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Selection &amp; Controls</h2>
</div>
<div class="p-4 space-y-6">
<!-- PROGRESS SECTION -->
<div>
<h3 class="text-[#4c9a73] text-[11px] font-bold leading-tight tracking-widest uppercase mb-4">Onboarding Progress</h3>
<div class="space-y-4">
<!-- Progress: 25% -->
<div class="flex flex-col gap-2 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
<div class="flex gap-6 justify-between">
<p class="text-[#0d1b14] dark:text-white text-sm font-medium leading-normal">Step 1 of 4</p>
<p class="text-[#0d1b14] dark:text-white text-xs font-normal leading-normal">25%</p>
</div>
<div class="rounded-full bg-[#cfe7db] dark:bg-gray-800 overflow-hidden">
<div class="h-2 rounded-full bg-primary" style="width: 25%;"></div>
</div>
<p class="text-[#4c9a73] text-xs font-normal leading-normal">Onboarding Started</p>
</div>
<!-- Progress: 60% -->
<div class="flex flex-col gap-2 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
<div class="flex gap-6 justify-between">
<p class="text-[#0d1b14] dark:text-white text-sm font-medium leading-normal">Step 3 of 5</p>
<p class="text-[#0d1b14] dark:text-white text-xs font-normal leading-normal">60%</p>
</div>
<div class="rounded-full bg-[#cfe7db] dark:bg-gray-800 overflow-hidden">
<div class="h-2 rounded-full bg-primary" style="width: 60%;"></div>
</div>
<p class="text-[#4c9a73] text-xs font-normal leading-normal">Almost there</p>
</div>
<!-- Progress: 100% -->
<div class="flex flex-col gap-2 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
<div class="flex gap-6 justify-between">
<p class="text-[#0d1b14] dark:text-white text-sm font-medium leading-normal">Completed</p>
<p class="text-[#0d1b14] dark:text-white text-xs font-normal leading-normal">100%</p>
</div>
<div class="rounded-full bg-[#cfe7db] dark:bg-gray-800 overflow-hidden">
<div class="h-2 rounded-full bg-primary" style="width: 100%;"></div>
</div>
<p class="text-[#4c9a73] text-xs font-normal leading-normal">Verification Successful</p>
</div>
</div>
</div>
<!-- SELECTION SECTION -->
<div>
<h3 class="text-[#4c9a73] text-[11px] font-bold leading-tight tracking-widest uppercase mb-4">Primary Vehicle Use</h3>
<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
<label class="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer group">
<span class="text-sm font-medium dark:text-white">Personal &amp; Pleasure</span>
<div class="relative flex items-center">
<input class="peer h-5 w-5 appearance-none rounded-full border-2 border-gray-300 dark:border-gray-600 checked:border-primary transition-all cursor-pointer" name="vehicle-use" type="radio"/>
<div class="absolute h-2.5 w-2.5 rounded-full bg-primary left-1.25 opacity-0 peer-checked:opacity-100 left-1/2 -translate-x-1/2 transition-all"></div>
</div>
</label>
<label class="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 cursor-pointer">
<span class="text-sm font-medium dark:text-white">Commute to Work</span>
<div class="relative flex items-center">
<input checked="" class="peer h-5 w-5 appearance-none rounded-full border-2 border-gray-300 dark:border-gray-600 checked:border-primary transition-all cursor-pointer" name="vehicle-use" type="radio"/>
<div class="absolute h-2.5 w-2.5 rounded-full bg-primary left-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-100 transition-all"></div>
</div>
</label>
<label class="flex items-center justify-between p-4 cursor-pointer">
<span class="text-sm font-medium dark:text-white">Business/Rideshare</span>
<div class="relative flex items-center">
<input class="peer h-5 w-5 appearance-none rounded-full border-2 border-gray-300 dark:border-gray-600 checked:border-primary transition-all cursor-pointer" name="vehicle-use" type="radio"/>
<div class="absolute h-2.5 w-2.5 rounded-full bg-primary left-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-100 transition-all"></div>
</div>
</label>
</div>
</div>
<!-- SLIDER SECTION -->
<div>
<div class="flex justify-between items-center mb-4">
<h3 class="text-[#4c9a73] text-[11px] font-bold leading-tight tracking-widest uppercase">Deductible Amount</h3>
<span class="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-bold">$500</span>
</div>
<div class="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
<div class="relative w-full h-8 flex items-center">
<!-- Custom track background -->
<div class="absolute w-full h-1.5 bg-[#cfe7db] dark:bg-gray-800 rounded-full"></div>
<div class="absolute h-1.5 bg-primary rounded-full" style="width: 50%;"></div>
<!-- Range Input -->
<input class="slider-thumb absolute w-full appearance-none bg-transparent outline-none" max="100" min="0" step="50" type="range" value="50"/>
</div>
<div class="flex justify-between mt-4">
<div class="flex flex-col items-center">
<div class="h-1.5 w-0.5 bg-gray-300 dark:bg-gray-600 mb-1"></div>
<span class="text-[10px] font-semibold text-gray-500">$250</span>
</div>
<div class="flex flex-col items-center">
<div class="h-1.5 w-0.5 bg-primary mb-1"></div>
<span class="text-[10px] font-bold text-primary">$500</span>
</div>
<div class="flex flex-col items-center">
<div class="h-1.5 w-0.5 bg-gray-300 dark:bg-gray-600 mb-1"></div>
<span class="text-[10px] font-semibold text-gray-500">$1000</span>
</div>
</div>
</div>
</div>
<!-- ADDITIONAL CONTROLS SECTION -->
<div>
<h3 class="text-[#4c9a73] text-[11px] font-bold leading-tight tracking-widest uppercase mb-4">Additional Info</h3>
<div class="space-y-4">
<!-- Segmented Control -->
<div class="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg flex gap-1">
<button class="flex-1 bg-white dark:bg-gray-700 py-2 rounded-md shadow-sm text-xs font-semibold text-[#0d1b14] dark:text-white">Male</button>
<button class="flex-1 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400">Female</button>
<button class="flex-1 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400">Other</button>
</div>
<!-- Toggle Switch -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
<div>
<p class="text-sm font-medium dark:text-white">Paperless Billing</p>
<p class="text-xs text-gray-500">Save $5.00/month</p>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</div>
<div class="h-10 bg-background-light dark:bg-background-dark"></div>
<!-- Bottom Tab Indicator (iOS Style) -->
<div class="flex justify-center pb-2">
<div class="w-32 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
</div>
</div>
</body></html>


<!-- Home -->

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Modern Car Insurance Platform</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#13ec80",
                "background-light": "#f6f8f7",
                "background-dark": "#102219",
                "charcoal": "#1a1c1b",
                "neutral-tint": "#242c28",
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
            },
          },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        .gradient-mesh {
            background-color: #102219;
            background-image: 
                radial-gradient(at 0% 0%, rgba(19, 236, 128, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(19, 236, 128, 0.05) 0px, transparent 50%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-white antialiased">
<!-- Header / Navigation -->
<nav class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-primary/10">
<div class="flex items-center gap-2">
<div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span class="material-icons text-background-dark text-xl">shield</span>
</div>
<span class="font-bold text-xl tracking-tight">LUXE<span class="text-primary">DRIVE</span></span>
</div>
<button class="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm">
            Sign In
        </button>
</nav>
<!-- Hero Section -->
<section class="relative overflow-hidden pt-12 pb-20 px-6 gradient-mesh text-white">
<div class="max-w-md mx-auto">
<span class="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
                Premium Coverage
            </span>
<h1 class="text-5xl font-extrabold leading-tight mb-6">
                Insurance for the <span class="text-primary italic">Modern</span> Driver
            </h1>
<p class="text-white/70 text-lg mb-8 leading-relaxed">
                Experience a new standard of protection. High-end coverage tailored to your lifestyle, all managed from your phone.
            </p>
<div class="relative mb-10 group">
<div class="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<img alt="High-end luxury car in motion" class="relative rounded-xl w-full h-56 object-cover shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500" data-alt="Luxury sports car driving through a modern city" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2cAHbYlpIlMn0qJ_mIgc9gWjtCb0utreQqrFX8aXOfTXDD3NLSlPsA8ot6cxD10Pe0YEDxg6Smy3yC_KqG67gElRYZ46J0Z_piPn5jFqXMkFkkHuGjH04Rwt-VVEGpxSiApRxzxbduYKq8z1z4jejlIjcHdMRW8yu4T364vskSwFLMJHsMXFqca04Hs1osntVW_6vNYbqWC81CFaKo6pG6ri5OvBXenpHFeC-qVefX2XLlEiHBYFu381GApjTCseo9g9ZCoZ-vY3z"/>
</div>
<button class="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-5 rounded-xl text-lg shadow-[0_0_20px_rgba(19,236,128,0.3)] transition-all">
                Get a Quote
            </button>
</div>
</section>
<!-- Perks Section -->
<section class="py-16 px-6 bg-white dark:bg-neutral-tint/20">
<div class="max-w-md mx-auto">
<h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
<span class="w-8 h-1 bg-primary rounded-full"></span>
                Why Choose Us?
            </h2>
<div class="grid grid-cols-2 gap-4">
<!-- Perk 1 -->
<div class="bg-background-light dark:bg-neutral-tint p-5 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
<span class="material-icons text-primary">timer</span>
</div>
<h3 class="font-bold text-sm mb-1 uppercase tracking-wide">Instant Quotes</h3>
<p class="text-xs text-charcoal/60 dark:text-white/50">Price in under 2 minutes.</p>
</div>
<!-- Perk 2 -->
<div class="bg-background-light dark:bg-neutral-tint p-5 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
<span class="material-icons text-primary">support_agent</span>
</div>
<h3 class="font-bold text-sm mb-1 uppercase tracking-wide">24/7 Support</h3>
<p class="text-xs text-charcoal/60 dark:text-white/50">Human help anytime.</p>
</div>
<!-- Perk 3 -->
<div class="bg-background-light dark:bg-neutral-tint p-5 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
<span class="material-icons text-primary">contactless</span>
</div>
<h3 class="font-bold text-sm mb-1 uppercase tracking-wide">Digital ID</h3>
<p class="text-xs text-charcoal/60 dark:text-white/50">Instant proof on phone.</p>
</div>
<!-- Perk 4 -->
<div class="bg-background-light dark:bg-neutral-tint p-5 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
<span class="material-icons text-primary">analytics</span>
</div>
<h3 class="font-bold text-sm mb-1 uppercase tracking-wide">Fair Pricing</h3>
<p class="text-xs text-charcoal/60 dark:text-white/50">Based on how you drive.</p>
</div>
</div>
</div>
</section>
<!-- About Us Snippet -->
<section class="py-16 px-6">
<div class="max-w-md mx-auto">
<div class="space-y-6">
<h3 class="text-xs font-black tracking-widest text-primary uppercase">Our Vision</h3>
<p class="text-2xl font-light leading-relaxed dark:text-white/90">
                    We believe insurance should be <span class="font-semibold text-charcoal dark:text-white">transparent, efficient, and mobile-first.</span>
</p>
<p class="text-charcoal/60 dark:text-white/50 leading-loose">
                    By leveraging real-time data and sophisticated AI, we offer coverage that adapts to you, providing peace of mind without the legacy complexities of traditional firms. LuxeDrive is more than a policy; it's a commitment to the modern road.
                </p>
<a class="inline-flex items-center text-primary font-bold group" href="#">
                    Learn more about our mission
                    <span class="material-icons ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-charcoal text-white/70 py-16 px-6">
<div class="max-w-md mx-auto">
<div class="flex items-center gap-2 mb-10">
<div class="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
<span class="material-icons text-primary text-sm">shield</span>
</div>
<span class="font-bold text-lg tracking-tight text-white">LUXE<span class="text-primary">DRIVE</span></span>
</div>
<div class="grid grid-cols-2 gap-8 mb-12">
<div class="space-y-4">
<h4 class="text-white font-bold text-sm">Product</h4>
<ul class="space-y-2 text-sm">
<li><a class="hover:text-primary transition-colors" href="#">Pricing</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Claims</a></li>
<li><a class="hover:text-primary transition-colors" href="#">FAQ</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Support</a></li>
</ul>
</div>
<div class="space-y-4">
<h4 class="text-white font-bold text-sm">Legal</h4>
<ul class="space-y-2 text-sm">
<li><a class="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Licenses</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div class="flex items-center gap-6 mb-10">
<a class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all" href="#">
<svg class="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
</a>
<a class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all" href="#">
<svg class="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
</div>
<p class="text-xs text-white/30 border-t border-white/5 pt-8">
                © 2024 LuxeDrive Insurance Services LLC. All rights reserved. Managed under license #827364.
            </p>
</div>
</footer>
<!-- Bottom Action Bar (Floating) -->
<div class="fixed bottom-6 left-6 right-6 z-40 lg:hidden">
<div class="bg-charcoal/90 backdrop-blur-xl border border-white/10 rounded-full p-2 flex items-center justify-between shadow-2xl">
<div class="pl-4">
<span class="text-white/60 text-xs block font-medium">Starting at</span>
<span class="text-primary font-bold text-lg leading-none">$49/mo</span>
</div>
<button class="bg-primary text-background-dark font-bold px-8 py-3 rounded-full text-sm">
                Get Quote
            </button>
</div>
</div>
</body></html>

<!-- login -->

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>PolicyPilot - Sign In</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#39FF14", // Neon Green
                        "primary-dark": "#32e612",
                        "charcoal": "#1a1c1e", // Deep Gray
                        "charcoal-muted": "#334155",
                        "background-light": "#f8fafc",
                        "background-dark": "#0a0a0b",
                    },
                    fontFamily: {
                        "display": ["Plus Jakarta Sans", "Inter", "sans-serif"],
                        "sans": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "2xl": "1.5xl",
                        "3xl": "2.25rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        @layer base {
            body {
                @apply bg-background-light text-charcoal font-sans antialiased;
                -webkit-tap-highlight-color: transparent;
            }
            .dark body {
                @apply bg-background-dark text-slate-100;
            }
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        :root {
            --neon-glow: 0 0 15px rgba(57, 255, 20, 0.4);
            --glass-bg: rgba(255, 255, 255, 0.4);
            --glass-border: rgba(255, 255, 255, 0.5);
        }
        .dark {
            --glass-bg: rgba(30, 41, 59, 0.3);
            --glass-border: rgba(255, 255, 255, 0.05);
        }
    </style>
<style>
        body {
            min-height: 100dvh;
            background: 
                radial-gradient(circle at 50% -10%, rgba(57, 255, 20, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 0% 100%, rgba(57, 255, 20, 0.05) 0%, transparent 40%);
        }
        .dark body {
            background: 
                radial-gradient(circle at 50% -10%, rgba(57, 255, 20, 0.12) 0%, transparent 60%),
                radial-gradient(circle at 100% 100%, rgba(57, 255, 20, 0.05) 0%, transparent 40%),
                #0a0a0b;
        }
        .glass-social {
            background: var(--glass-bg);
            backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            transition: all 0.3s ease;
        }
        .otp-button-glow {
            box-shadow: var(--neon-glow);
        }
        .mesh-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 400px;
            background: linear-gradient(180deg, rgba(57, 255, 20, 0.03) 0%, transparent 100%);
            z-index: -1;
        }
        .safe-area-bottom {
            padding-bottom: env(safe-area-inset-bottom, 1.5rem);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="flex flex-col relative overflow-x-hidden">
<div class="mesh-bg"></div>
<header class="sticky top-0 z-50">
<div class="flex items-center p-6 justify-between max-w-md mx-auto w-full">
<button class="flex items-center justify-center rounded-2xl h-11 w-11 text-charcoal dark:text-slate-300 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 active:scale-95 transition-all shadow-sm">
<span class="material-symbols-outlined !text-xl">close</span>
</button>
<div class="h-8">
<div class="flex items-center gap-1.5">
<div class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
<span class="text-xs font-black uppercase tracking-[0.3em] text-charcoal/40 dark:text-white/40">PolicyPilot</span>
</div>
</div>
<div class="w-11"></div>
</div>
</header>
<main class="flex-1 max-w-md mx-auto w-full px-8 flex flex-col justify-center text-center">
<div class="mb-12">
<div class="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-charcoal dark:bg-white mb-8 shadow-2xl relative overflow-hidden group">
<span class="material-symbols-outlined !text-4xl text-primary">shield_person</span>
<div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h1 class="text-[34px] tracking-tight text-charcoal dark:text-white leading-tight font-display mb-3">
<span class="font-extrabold block">Welcome back</span>
</h1>
<p class="text-charcoal-muted dark:text-slate-400 text-base font-medium">Sign in to manage your coverage</p>
</div>
<div class="flex flex-col gap-8">
<div class="space-y-4">
<div class="relative group">
<div class="absolute inset-y-0 left-5 flex items-center pointer-events-none text-charcoal-muted/40 dark:text-slate-500 group-focus-within:text-primary transition-colors">
<span class="material-symbols-outlined !text-xl">alternate_email</span>
</div>
<input class="form-input w-full rounded-2xl border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 h-[68px] pl-14 pr-6 text-base font-semibold focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-display backdrop-blur-sm" id="identifier" placeholder="Email or mobile number" type="text"/>
</div>
<button class="w-full bg-primary text-charcoal h-[68px] rounded-2xl font-extrabold text-lg hover:bg-primary-dark transition-all otp-button-glow active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden group">
<span class="relative z-10">Send Secure Code</span>
<span class="material-symbols-outlined text-xl relative z-10">bolt</span>
</button>
</div>
<div class="flex items-center gap-4 py-2">
<div class="h-[1px] flex-1 bg-slate-200 dark:bg-white/5"></div>
<span class="text-[10px] font-black text-charcoal/30 dark:text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">Integrated login</span>
<div class="h-[1px] flex-1 bg-slate-200 dark:bg-white/5"></div>
</div>
<div class="grid grid-cols-2 gap-4">
<button class="glass-social h-16 rounded-2xl font-bold text-charcoal dark:text-white flex items-center justify-center gap-3 hover:bg-white/80 dark:hover:bg-white/10 active:scale-[0.96]">
<svg class="w-5 h-5" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<span class="text-sm">Google</span>
</button>
<button class="glass-social h-16 rounded-2xl font-bold text-charcoal dark:text-white flex items-center justify-center gap-3 hover:bg-white/80 dark:hover:bg-white/10 active:scale-[0.96]">
<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
<path d="M17.05 20.28c-.96 0-2.04-.6-3.23-.6-1.2 0-2.09.58-3.13.58-1.47 0-3.35-1.44-4.53-3.37-1.74-2.85-2.14-6.3-.96-8.24.73-1.22 2.1-1.98 3.55-1.98.98 0 1.8.44 2.53.44.64 0 1.4-.42 2.58-.42 1.25 0 2.37.58 3.1 1.55-2.48 1.22-2.08 4.3.4 5.3-.57 1.4-1.33 2.76-2.3 3.74-.63.63-1.07.96-1.97.96zm-1.87-16.15c.66-.82 1.1-1.95.98-3.08-1.04.04-2.3.7-3.05 1.58-.67.77-1.2 1.93-1.07 3.03 1.15.09 2.3-.55 3.14-1.53z"></path>
</svg>
<span class="text-sm">Apple</span>
</button>
</div>
</div>
</main>
<footer class="mt-auto p-8 safe-area-bottom">
<div class="max-w-md mx-auto text-center">
<p class="text-charcoal/40 dark:text-slate-500 font-semibold text-sm">
                New to PolicyPilot? 
                <a class="text-primary hover:text-primary-dark transition-colors ml-1 font-extrabold inline-flex items-center gap-0.5" href="#">
                    Join now
                </a>
</p>
<div class="mt-8 flex justify-center gap-6 text-[10px] font-bold text-charcoal/20 dark:text-slate-700 uppercase tracking-widest">
<a class="hover:text-charcoal dark:hover:text-slate-400 transition-colors" href="#">Privacy</a>
<a class="hover:text-charcoal dark:hover:text-slate-400 transition-colors" href="#">Security</a>
<a class="hover:text-charcoal dark:hover:text-slate-400 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

</body></html>


<!-- success -->

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Purchase Successful</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#39FF14", // Neon Green
                        "primary-dark": "#32CD32",
                        "deep-charcoal": "#121417",
                        "light-bg": "#F9FAFB",
                        "surface-white": "#FFFFFF",
                    },
                    fontFamily: {
                        "sans": ["Inter", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "1rem", "2xl": "1.5rem", "full": "9999px" },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        @layer base {
            body { 
                @apply bg-light-bg text-deep-charcoal;
            }
            .material-symbols-outlined {
                font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
        }
        .soft-shadow {
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 10px -2px rgba(0, 0, 0, 0.03);
        }
    </style>
<style>
        body {
            min-height: 100dvh;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="flex flex-col items-center">
<header class="w-full px-6 py-4 flex items-center justify-between bg-white border-b border-gray-100">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-deep-charcoal">shield</span>
<span class="font-extrabold tracking-tighter text-lg">PolicyPilot</span>
</div>
<div class="flex gap-1">
<div class="h-1 w-6 rounded-full bg-primary"></div>
<div class="h-1 w-6 rounded-full bg-primary"></div>
<div class="h-1 w-6 rounded-full bg-primary"></div>
</div>
</header>
<main class="w-full max-w-md flex flex-col items-center px-6 pt-12">
<div class="relative mb-8">
<div class="flex items-center justify-center size-28 rounded-full bg-primary/10">
<div class="flex items-center justify-center size-20 rounded-full bg-primary">
<span class="material-symbols-outlined text-white text-5xl">check</span>
</div>
</div>
</div>
<div class="text-center space-y-3 mb-10">
<h1 class="text-3xl font-extrabold tracking-tight text-deep-charcoal">Purchase Successful!</h1>
<p class="text-gray-500 text-base leading-relaxed px-4">
                We are reviewing your policy and will update you within 48 hours.
            </p>
</div>
<div class="w-full bg-white rounded-2xl p-6 soft-shadow border border-gray-100 mb-8">
<div class="flex flex-col gap-5">
<div class="flex justify-between items-start">
<div>
<p class="text-[11px] text-gray-400 uppercase font-bold tracking-wider mb-1">Policy Number</p>
<p class="text-lg font-bold text-deep-charcoal">PP-9902341-TX</p>
</div>
<span class="material-symbols-outlined text-primary">verified_user</span>
</div>
<div class="h-[1px] w-full bg-gray-50"></div>
<div class="flex items-center gap-4">
<div class="size-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
<span class="material-symbols-outlined text-deep-charcoal">directions_car</span>
</div>
<div>
<p class="text-[11px] text-gray-400 uppercase font-bold tracking-wider mb-1">Vehicle Covered</p>
<p class="text-md font-semibold text-deep-charcoal">Tesla Model 3</p>
</div>
</div>
</div>
</div>
<div class="w-full flex items-start gap-3 px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 mb-10">
<span class="material-symbols-outlined text-gray-400 text-xl mt-0.5">info</span>
<p class="text-sm text-gray-600 leading-tight">
                Your policies can always be viewed and managed in your <span class="text-deep-charcoal font-bold underline decoration-primary decoration-2 underline-offset-2">Profile</span> section.
            </p>
</div>
<div class="w-full space-y-4 mt-auto pb-10">
<button class="w-full bg-primary hover:bg-primary-dark text-deep-charcoal font-bold py-5 rounded-2xl uppercase tracking-wider text-sm transition-all active:scale-[0.98] soft-shadow">
                Go to My Policies
            </button>
<button class="w-full py-2 text-gray-400 hover:text-deep-charcoal font-bold text-sm transition-colors uppercase tracking-widest">
                Return to Home
            </button>
</div>
</main>
<div class="fixed top-20 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10"></div>

</body></html>


<!-- post login home -->

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>PolicyPilot | User Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#0df220",
                "background-light": "#f5f8f6",
                "background-dark": "#102211",
                "charcoal": "#1a1c1a",
                "surface": "#ffffff"
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }
        .safe-area-bottom {
            padding-bottom: env(safe-area-inset-bottom);
        }
        .custom-scrollbar::-webkit-scrollbar {
            display: none;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light text-charcoal font-display min-h-screen">
<!-- Header Section -->
<header class="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
<div class="flex items-center gap-2">
<div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span class="material-icons-round text-background-dark text-xl">auto_awesome</span>
</div>
<span class="text-xl font-bold tracking-tight">PolicyPilot</span>
</div>
<div class="flex items-center gap-3">
<button class="w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center relative">
<span class="material-icons-round text-charcoal">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
</button>
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
<img alt="Profile" class="w-full h-full object-cover" data-alt="User profile portrait of a smiling man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuADNDYJrbwqnkmY9r__4EiZcwilQBnj51fhL2vMO4OyJh0qLSpyyvrnRgcXAbwr8F8aWWcrNWr25U11-mtbU24r6iSXddii-kgauVNtqnV39PSmD68igow9NObpL2mOhGBxQwpl5IAT245bwrIq-AEp8n1InpnNIKVnMFfSPTD_j3tAtEqyzSlK0h14EEhRPGl5Oh0wsZQnSwu-hKNLK48EiyzUir3s10tqcKQFmYfOltWZRBdSxcvlxzW4aqldwthZB3N3YwJiBk"/>
</div>
</div>
</header>
<main class="px-6 pb-24">
<!-- Greeting -->
<div class="mt-4 mb-6">
<h1 class="text-2xl font-bold text-charcoal">Hello, John!</h1>
<p class="text-charcoal/60 text-sm">Everything looks good today.</p>
</div>
<!-- Active Policy Hero Card -->
<section class="mb-8">
<div class="bg-charcoal rounded-xl p-6 shadow-xl shadow-primary/10 relative overflow-hidden group">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-12 -mt-12 blur-3xl"></div>
<div class="flex justify-between items-start relative z-10">
<div>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-background-dark mb-3">
                            ACTIVE
                        </span>
<h2 class="text-white text-xl font-bold">Tesla Model 3</h2>
<p class="text-white/60 text-sm font-mono">ID: PP-992384-01</p>
</div>
<span class="material-icons-round text-white/20 text-4xl">electric_car</span>
</div>
<div class="mt-8 flex items-end justify-between relative z-10">
<div class="space-y-1">
<p class="text-white/40 text-xs uppercase tracking-wider">Next Payment</p>
<p class="text-white font-semibold">Oct 12, 2023</p>
</div>
<button class="bg-primary/20 border border-primary/30 text-primary px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                        View Details
                        <span class="material-icons-round text-sm">arrow_forward</span>
</button>
</div>
</div>
</section>
<!-- Quick Actions Grid -->
<section class="mb-8">
<h3 class="text-charcoal font-bold mb-4">Quick Actions</h3>
<div class="grid grid-cols-2 gap-4">
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary">badge</span>
</div>
<span class="font-semibold text-sm">Digital ID Card</span>
</button>
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary">add_moderator</span>
</div>
<span class="font-semibold text-sm">File a Claim</span>
</button>
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary">payments</span>
</div>
<span class="font-semibold text-sm">Payment History</span>
</button>
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary">minor_crash</span>
</div>
<span class="font-semibold text-sm">Roadside Help</span>
</button>
</div>
</section>
<!-- News & Tips Section -->
<section>
<div class="flex justify-between items-center mb-4">
<h3 class="text-charcoal font-bold">News &amp; Tips</h3>
<button class="text-primary text-sm font-semibold">See All</button>
</div>
<div class="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
<div class="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 snap-start">
<div class="h-32 w-full relative">
<img alt="EV Charging" class="w-full h-full object-cover" data-alt="Modern electric car charging at station" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs2mv_hwcbkSIN40WUszlbGpwSxXlM3oLbZ9-c7DeRYbWPTcklOA8FHwviAtU-qJAhfMlLDhobAR2RY2j6poz_r5BtouO9nqg3wdl_5jmbByB6QkpJNY1EfDDX4rQ8U0CoiVLq7nsOHLYzBS6fvRj39oWvMtkKaqObpMRIGzM9ZCOqry1NTOsXoggMO9bOjHBMfBL7DvCAl5lm_qCkllyLHJfcdqBPKiY5hdQQVDUL1xb0EOVNT87aBEHwWpTBFOP15GYkv1-mFdDV"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span class="absolute bottom-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded">MAINTENANCE</span>
</div>
<div class="p-4">
<h4 class="font-bold text-sm leading-tight mb-2">5 Tips for EV Battery Health during Winter</h4>
<p class="text-charcoal/50 text-xs">Learn how to maximize your range when temperatures drop.</p>
</div>
</div>
<div class="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 snap-start">
<div class="h-32 w-full relative">
<img alt="Safety" class="w-full h-full object-cover" data-alt="Close up of a luxury car steering wheel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7Iopusv5Hw5dWM6zDwYP3vW_sTFW2DvBHyFc_n-p9bpd8X0i909KCPySMhnGNufMSOk_qC2qv4G0RM_TEDS-mRj0GFHJbqLGATpIjBJVFO5qcRHEylSrPdcSUO2ud3c2W4sxtZUWJiKFUe0nv0h6V0ZgsAXTeigCt7L7fNEmHP8jziC-om_LBNUJ80PB8gNzbWD3BzWKOIELR9KWc7yBUd5rvHoOlu2oFTgXTnvXw_FoV-nDICNoIpSiLnpgSfy1Kt9QiKtH4tuZ"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span class="absolute bottom-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded">SAFETY</span>
</div>
<div class="p-4">
<h4 class="font-bold text-sm leading-tight mb-2">Advanced Safety Features Explained</h4>
<p class="text-charcoal/50 text-xs">Understanding how your collision avoidance system works.</p>
</div>
</div>
</div>
</section>
</main>
<!-- Bottom Navigation Bar -->

</body></html>


<!-- new dashboard -->

<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>PolicyPilot | User Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#0df220",
                "background-light": "#f5f8f6",
                "background-dark": "#102211",
                "charcoal": "#1a1c1a",
                "surface": "#ffffff"
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }
        .safe-area-bottom {
            padding-bottom: env(safe-area-inset-bottom);
        }
        .custom-scrollbar::-webkit-scrollbar {
            display: none;
        }
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light text-charcoal font-display min-h-screen">
<header class="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
<div class="flex items-center gap-2">
<div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span class="material-icons-round text-background-dark text-xl">auto_awesome</span>
</div>
<span class="text-xl font-bold tracking-tight text-charcoal">PolicyPilot</span>
</div>
<div class="flex items-center gap-3">
<button class="w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center relative">
<span class="material-icons-round text-charcoal">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
</button>
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
<img alt="Profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuADNDYJrbwqnkmY9r__4EiZcwilQBnj51fhL2vMO4OyJh0qLSpyyvrnRgcXAbwr8F8aWWcrNWr25U11-mtbU24r6iSXddii-kgauVNtqnV39PSmD68igow9NObpL2mOhGBxQwpl5IAT245bwrIq-AEp8n1InpnNIKVnMFfSPTD_j3tAtEqyzSlK0h14EEhRPGl5Oh0wsZQnSwu-hKNLK48EiyzUir3s10tqcKQFmYfOltWZRBdSxcvlxzW4aqldwthZB3N3YwJiBk"/>
</div>
</div>
</header>
<main class="px-6 pb-32">
<div class="mt-4 mb-6">
<h1 class="text-2xl font-bold text-charcoal">Hello, John!</h1>
<p class="text-charcoal/60 text-sm">Everything looks good today.</p>
</div>
<section class="mb-6">
<div class="bg-charcoal rounded-xl p-6 shadow-xl shadow-primary/10 relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-12 -mt-12 blur-3xl"></div>
<div class="flex justify-between items-start relative z-10">
<div>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-background-dark mb-3">
                            ACTIVE
                        </span>
<h2 class="text-white text-xl font-bold">Tesla Model 3</h2>
<p class="text-white/60 text-sm font-mono">ID: PP-992384-01</p>
</div>
<span class="material-icons-round text-white/20 text-4xl">electric_car</span>
</div>
<div class="mt-8 flex items-end justify-between relative z-10">
<div class="space-y-1">
<p class="text-white/40 text-xs uppercase tracking-wider">Next Payment</p>
<p class="text-white font-semibold">Oct 12, 2023</p>
</div>
<button class="bg-primary/20 border border-primary/30 text-primary px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                        View Details
                        <span class="material-icons-round text-sm">arrow_forward</span>
</button>
</div>
</div>
</section>
<section class="mb-8">
<button class="w-full bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-center justify-between group active:scale-[0.98] transition-all">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-background-dark font-bold">add_circle</span>
</div>
<div class="text-left">
<h3 class="font-bold text-charcoal">Get a New Quote</h3>
<p class="text-charcoal/60 text-xs">Add a vehicle to your policy in minutes</p>
</div>
</div>
<span class="material-icons-round text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</section>
<section class="mb-8">
<h3 class="text-charcoal font-bold mb-4">Quick Actions</h3>
<div class="grid grid-cols-2 gap-4">
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary text-xl">badge</span>
</div>
<span class="font-semibold text-sm">Digital ID Card</span>
</button>
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary text-xl">add_moderator</span>
</div>
<span class="font-semibold text-sm">File a Claim</span>
</button>
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary text-xl">payments</span>
</div>
<span class="font-semibold text-sm">Payment History</span>
</button>
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary text-xl">minor_crash</span>
</div>
<span class="font-semibold text-sm">Roadside Help</span>
</button>
</div>
</section>
<section>
<div class="flex justify-between items-center mb-4">
<h3 class="text-charcoal font-bold">News &amp; Tips</h3>
<button class="text-primary text-sm font-semibold">See All</button>
</div>
<div class="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
<div class="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 snap-start">
<div class="h-32 w-full relative">
<img alt="EV Charging" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs2mv_hwcbkSIN40WUszlbGpwSxXlM3oLbZ9-c7DeRYbWPTcklOA8FHwviAtU-qJAhfMlLDhobAR2RY2j6poz_r5BtouO9nqg3wdl_5jmbByB6QkpJNY1EfDDX4rQ8U0CoiVLq7nsOHLYzBS6fvRj39oWvMtkKaqObpMRIGzM9ZCOqry1NTOsXoggMO9bOjHBMfBL7DvCAl5lm_qCkllyLHJfcdqBPKiY5hdQQVDUL1xb0EOVNT87aBEHwWpTBFOP15GYkv1-mFdDV"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span class="absolute bottom-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded">MAINTENANCE</span>
</div>
<div class="p-4">
<h4 class="font-bold text-sm leading-tight mb-2">5 Tips for EV Battery Health during Winter</h4>
<p class="text-charcoal/50 text-xs">Learn how to maximize your range when temperatures drop.</p>
</div>
</div>
<div class="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 snap-start">
<div class="h-32 w-full relative">
<img alt="Safety" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7Iopusv5Hw5dWM6zDwYP3vW_sTFW2DvBHyFc_n-p9bpd8X0i909KCPySMhnGNufMSOk_qC2qv4G0RM_TEDS-mRj0GFHJbqLGATpIjBJVFO5qcRHEylSrPdcSUO2ud3c2W4sxtZUWJiKFUe0nv0h6V0ZgsAXTeigCt7L7fNEmHP8jziC-om_LBNUJ80PB8gNzbWD3BzWKOIELR9KWc7yBUd5rvHoOlu2oFTgXTnvXw_FoV-nDICNoIpSiLnpgSfy1Kt9QiKtH4tuZ"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span class="absolute bottom-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded">SAFETY</span>
</div>
<div class="p-4">
<h4 class="font-bold text-sm leading-tight mb-2">Advanced Safety Features Explained</h4>
<p class="text-charcoal/50 text-xs">Understanding how your collision avoidance system works.</p>
</div>
</div>
</div>
</section>
</main>
<button class="fixed bottom-24 right-6 w-14 h-14 bg-charcoal text-primary rounded-full shadow-2xl shadow-primary/30 flex items-center justify-center border border-primary/30 active:scale-90 transition-transform z-[60]">
<span class="material-symbols-outlined font-bold text-3xl">request_quote</span>
</button>


</body></html>


<!-- assets -->

<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>PolicyPilot | User Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#0df220",
                "background-light": "#f5f8f6",
                "background-dark": "#102211",
                "charcoal": "#1a1c1a",
                "surface": "#ffffff"
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
    </script>
<style>
        body {
            font-family: 'Inter', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }
        .safe-area-bottom {
            padding-bottom: env(safe-area-inset-bottom);
        }
        .custom-scrollbar::-webkit-scrollbar {
            display: none;
        }
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light text-charcoal font-display min-h-screen">
<header class="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
<div class="flex items-center gap-2">
<div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span class="material-icons-round text-background-dark text-xl">auto_awesome</span>
</div>
<span class="text-xl font-bold tracking-tight text-charcoal">PolicyPilot</span>
</div>
<div class="flex items-center gap-3">
<button class="w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center relative">
<span class="material-icons-round text-charcoal">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
</button>
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
<img alt="Profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuADNDYJrbwqnkmY9r__4EiZcwilQBnj51fhL2vMO4OyJh0qLSpyyvrnRgcXAbwr8F8aWWcrNWr25U11-mtbU24r6iSXddii-kgauVNtqnV39PSmD68igow9NObpL2mOhGBxQwpl5IAT245bwrIq-AEp8n1InpnNIKVnMFfSPTD_j3tAtEqyzSlK0h14EEhRPGl5Oh0wsZQnSwu-hKNLK48EiyzUir3s10tqcKQFmYfOltWZRBdSxcvlxzW4aqldwthZB3N3YwJiBk"/>
</div>
</div>
</header>
<main class="px-6 pb-32">
<div class="mt-4 mb-6">
<h1 class="text-2xl font-bold text-charcoal">Hello, John!</h1>
<p class="text-charcoal/60 text-sm">Everything looks good today.</p>
</div>
<section class="mb-6">
<div class="bg-charcoal rounded-xl p-6 shadow-xl shadow-primary/10 relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-12 -mt-12 blur-3xl"></div>
<div class="flex justify-between items-start relative z-10">
<div>
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-background-dark mb-3">
                            ACTIVE
                        </span>
<h2 class="text-white text-xl font-bold">Tesla Model 3</h2>
<p class="text-white/60 text-sm font-mono">ID: PP-992384-01</p>
</div>
<span class="material-icons-round text-white/20 text-4xl">electric_car</span>
</div>
<div class="mt-8 flex items-end justify-between relative z-10">
<div class="space-y-1">
<p class="text-white/40 text-xs uppercase tracking-wider">Next Payment</p>
<p class="text-white font-semibold">Oct 12, 2023</p>
</div>
<button class="bg-primary/20 border border-primary/30 text-primary px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                        View Details
                        <span class="material-icons-round text-sm">arrow_forward</span>
</button>
</div>
</div>
</section>
<section class="mb-8">
<button class="w-full bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-center justify-between group active:scale-[0.98] transition-all">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-background-dark font-bold">add_circle</span>
</div>
<div class="text-left">
<h3 class="font-bold text-charcoal">Get a New Quote</h3>
<p class="text-charcoal/60 text-xs">Add a vehicle to your policy in minutes</p>
</div>
</div>
<span class="material-icons-round text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</section>
<section class="mb-8">
<h3 class="text-charcoal font-bold mb-4">Quick Actions</h3>
<div class="grid grid-cols-2 gap-4">
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary text-xl">badge</span>
</div>
<span class="font-semibold text-sm">Digital ID Card</span>
</button>
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary text-xl">add_moderator</span>
</div>
<span class="font-semibold text-sm">File a Claim</span>
</button>
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary text-xl">payments</span>
</div>
<span class="font-semibold text-sm">Payment History</span>
</button>
<button class="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3 active:scale-95 transition-transform">
<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-icons-round text-primary text-xl">minor_crash</span>
</div>
<span class="font-semibold text-sm">Roadside Help</span>
</button>
</div>
</section>
<section>
<div class="flex justify-between items-center mb-4">
<h3 class="text-charcoal font-bold">News &amp; Tips</h3>
<button class="text-primary text-sm font-semibold">See All</button>
</div>
<div class="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
<div class="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 snap-start">
<div class="h-32 w-full relative">
<img alt="EV Charging" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs2mv_hwcbkSIN40WUszlbGpwSxXlM3oLbZ9-c7DeRYbWPTcklOA8FHwviAtU-qJAhfMlLDhobAR2RY2j6poz_r5BtouO9nqg3wdl_5jmbByB6QkpJNY1EfDDX4rQ8U0CoiVLq7nsOHLYzBS6fvRj39oWvMtkKaqObpMRIGzM9ZCOqry1NTOsXoggMO9bOjHBMfBL7DvCAl5lm_qCkllyLHJfcdqBPKiY5hdQQVDUL1xb0EOVNT87aBEHwWpTBFOP15GYkv1-mFdDV"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span class="absolute bottom-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded">MAINTENANCE</span>
</div>
<div class="p-4">
<h4 class="font-bold text-sm leading-tight mb-2">5 Tips for EV Battery Health during Winter</h4>
<p class="text-charcoal/50 text-xs">Learn how to maximize your range when temperatures drop.</p>
</div>
</div>
<div class="min-w-[260px] bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 snap-start">
<div class="h-32 w-full relative">
<img alt="Safety" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7Iopusv5Hw5dWM6zDwYP3vW_sTFW2DvBHyFc_n-p9bpd8X0i909KCPySMhnGNufMSOk_qC2qv4G0RM_TEDS-mRj0GFHJbqLGATpIjBJVFO5qcRHEylSrPdcSUO2ud3c2W4sxtZUWJiKFUe0nv0h6V0ZgsAXTeigCt7L7fNEmHP8jziC-om_LBNUJ80PB8gNzbWD3BzWKOIELR9KWc7yBUd5rvHoOlu2oFTgXTnvXw_FoV-nDICNoIpSiLnpgSfy1Kt9QiKtH4tuZ"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span class="absolute bottom-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded">SAFETY</span>
</div>
<div class="p-4">
<h4 class="font-bold text-sm leading-tight mb-2">Advanced Safety Features Explained</h4>
<p class="text-charcoal/50 text-xs">Understanding how your collision avoidance system works.</p>
</div>
</div>
</div>
</section>
</main>
<button class="fixed bottom-24 right-6 w-14 h-14 bg-charcoal text-primary rounded-full shadow-2xl shadow-primary/30 flex items-center justify-center border border-primary/30 active:scale-90 transition-transform z-[60]">
<span class="material-symbols-outlined font-bold text-3xl">request_quote</span>
</button>
<nav class="fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur-lg border-t border-black/5 px-8 py-3 flex justify-between items-center safe-area-bottom z-50">
<button class="flex flex-col items-center gap-1 text-primary">
<span class="material-icons-round">home</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Home</span>
</button>
<button class="flex flex-col items-center gap-1 text-charcoal/40">
<span class="material-icons-round">history</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Claims</span>
</button>
<div class="relative -top-8">
<button class="w-14 h-14 bg-primary text-background-dark rounded-full shadow-lg shadow-primary/40 flex items-center justify-center border-4 border-white">
<span class="material-icons-round text-3xl">sos</span>
</button>
</div>
<button class="flex flex-col items-center gap-1 text-charcoal/40">
<span class="material-icons-round">support_agent</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Support</span>
</button>
<button class="flex flex-col items-center gap-1 text-charcoal/40">
<span class="material-icons-round">person</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Profile</span>
</button>
</nav>

</body></html>


<!-- all policy -->

<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>PolicyPilot - My Policies</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#0df220",
                        "background-light": "#f5f8f6",
                        "background-dark": "#102211",
                        "charcoal": "#1a1a1a",
                        "status-amber": "#ffbf00",
                        "status-gray": "#9ca3af"
                    },
                    fontFamily: {
                        "display": ["Manrope"]
                    },
                    borderRadius: {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        @layer base {
            body { font-family: 'Manrope', sans-serif; }
        }
        .ios-blur { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .shadow-soft { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04); }
        .details-content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 300ms ease-out, opacity 250ms;
            opacity: 0;
        }
        .expanded .details-content {
            grid-template-rows: 1fr;
            opacity: 1;
            margin-top: 1.25rem;
        }
        .expanded .chevron-icon {
            transform: rotate(90deg);
        }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-charcoal min-h-screen pb-24">
<header class="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 ios-blur px-6 pt-12 pb-4">
<div class="flex justify-between items-end mb-6">
<h1 class="text-3xl font-extrabold tracking-tight dark:text-white">My Policies</h1>
<div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
<span class="material-icons text-primary text-xl">person</span>
</div>
</div>
<div class="relative">
<span class="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 dark:text-white/40">search</span>
<input class="w-full bg-white dark:bg-zinc-900 border-none rounded-full py-3 pl-12 pr-4 shadow-soft focus:ring-2 focus:ring-primary/50 dark:text-white placeholder-charcoal/30 dark:placeholder-white/30 transition-all" placeholder="Search your vehicles..." type="text"/>
</div>
</header>
<main class="px-6 mt-4 space-y-4">
<div class="bg-white dark:bg-zinc-900 p-5 rounded-lg shadow-soft border border-primary/20 expanded transition-all duration-300">
<div class="flex items-center justify-between cursor-pointer">
<div class="flex gap-4 items-center">
<div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
<img alt="Car Logo" class="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARQhwpdJzFqF6wHYAxiGAHpSKY5RcCv29EFsRJ1j0Dbrr_w-rfOYwRr1uE0w5o9KmzLYtuGOHdd2zyfYn1T2zpzNCB0nvKnwUTVusn7OkliERuCJKNlM0rRprrSPPLh3HxvT3Vb0zvaQiQNgBmDGaekDXAB2alNaV0JuNBNNNQi3xgVbP6v_JjgvYVjLZzNsq5LSBjfM_CvtEWUbR77D7m8PX26wq048hGMNDwnF_yMRsIqN-ItBaQirWHB7tkJK81_SM9WM2399e3"/>
</div>
<div>
<h3 class="font-bold text-lg dark:text-white">Tesla Model 3</h3>
<p class="text-charcoal/50 dark:text-white/50 text-sm font-medium">POL-882931-A</p>
</div>
</div>
<div class="flex items-center gap-3">
<span class="px-3 py-1 bg-primary text-charcoal text-xs font-bold rounded-full uppercase tracking-wider">Active</span>
<span class="material-icons text-charcoal/30 dark:text-white/30 chevron-icon transition-transform">chevron_right</span>
</div>
</div>
<div class="details-content">
<div class="overflow-hidden">
<div class="pt-5 border-t border-charcoal/5 dark:border-white/5 space-y-4">
<div class="grid grid-cols-2 gap-4">
<div>
<p class="text-xs font-bold text-charcoal/40 dark:text-white/40 uppercase tracking-widest mb-1">Coverage</p>
<p class="font-semibold dark:text-white">Comprehensive</p>
</div>
<div>
<p class="text-xs font-bold text-charcoal/40 dark:text-white/40 uppercase tracking-widest mb-1">Deductible</p>
<p class="font-semibold dark:text-white">$500</p>
</div>
</div>
<div class="h-px bg-charcoal/5 dark:bg-white/5"></div>
<div class="grid grid-cols-2 gap-4">
<div>
<p class="text-xs font-bold text-charcoal/40 dark:text-white/40 uppercase tracking-widest mb-1">Expiry Date</p>
<p class="font-semibold dark:text-white">Oct 12, 2024</p>
</div>
<div>
<p class="text-xs font-bold text-charcoal/40 dark:text-white/40 uppercase tracking-widest mb-1">Total Policy Cost</p>
<p class="font-semibold dark:text-white">$1,020/year</p>
</div>
</div>
<div class="h-px bg-charcoal/5 dark:bg-white/5"></div>
<div>
<p class="text-xs font-bold text-charcoal/40 dark:text-white/40 uppercase tracking-widest mb-2">Add-ons</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1.5 bg-background-light dark:bg-zinc-800 rounded-full text-xs font-medium dark:text-white flex items-center gap-1.5">
<span class="material-symbols-outlined text-primary text-[16px]">home_repair_service</span>
                                Roadside Assistance
                            </span>
<span class="px-3 py-1.5 bg-background-light dark:bg-zinc-800 rounded-full text-xs font-medium dark:text-white flex items-center gap-1.5">
<span class="material-symbols-outlined text-primary text-[16px]">directions_car</span>
                                Rental Reimbursement
                            </span>
</div>
</div>
<div class="flex gap-3 mt-6">
<button class="flex-1 bg-primary/10 text-charcoal dark:text-primary font-bold py-3 rounded-full text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[20px]">badge</span>
                            Download ID
                        </button>
<button class="flex-1 bg-primary text-charcoal font-bold py-3 rounded-full text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-[20px]">settings</span>
                            Manage Coverage
                        </button>
</div>
</div>
</div>
</div>
</div>
<div class="bg-white dark:bg-zinc-900 p-5 rounded-lg shadow-soft border border-transparent hover:border-primary/10 transition-all duration-300">
<div class="flex items-center justify-between cursor-pointer">
<div class="flex gap-4 items-center">
<div class="w-14 h-14 rounded-full bg-status-amber/10 flex items-center justify-center overflow-hidden">
<img alt="Truck Logo" class="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCBtTyw_jxsrym2YLL1TlpVha4M7kSZFOkV7bQKHbbzg13DKz0TAwZcO8qyENmwJTtie96tAzrxKMD45znEfAPkmTI7gJ3eencVBjYmupiNM1tff_gVXzIalwNQfkrYlXT_9zgGqX1sy_7hS1-D6R7LUM6qXRStHwKG8TI2ke0QnISyvHpGyg1FvcppZ_X8ji4XsJIk9jS25pC8yCXCJmPA13GzDwejMm_bt8R7Em7449n9XhB3jfMw0alr1tTJEOKv-7vJqh9HRp9"/>
</div>
<div>
<h3 class="font-bold text-lg dark:text-white">Ford F-150</h3>
<p class="text-charcoal/50 dark:text-white/50 text-sm font-medium">POL-119283-B</p>
</div>
</div>
<div class="flex items-center gap-3">
<span class="px-3 py-1 bg-status-amber text-charcoal text-xs font-bold rounded-full uppercase tracking-wider">Under Review</span>
<span class="material-icons text-charcoal/30 dark:text-white/30 chevron-icon transition-transform">chevron_right</span>
</div>
</div>
<div class="details-content">
<div class="overflow-hidden"></div>
</div>
</div>
<div class="bg-white dark:bg-zinc-900 p-5 rounded-lg shadow-soft opacity-80 border border-transparent transition-all duration-300">
<div class="flex items-center justify-between cursor-pointer">
<div class="flex gap-4 items-center">
<div class="w-14 h-14 rounded-full bg-status-gray/10 flex items-center justify-center overflow-hidden">
<img alt="Car Logo" class="w-8 h-8 object-contain grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4KpLlmkZEh1CmQJFkwLJBk69PjSGW6FewsH5b5CtCoD-l15FA15pTUU9bez2XdM0kgesUlSIdq9sHlBoMBiz1lo7ygIbs6dZ88k-wL8bBqwTqi8EAOBoPYkxt4FuDJtqE8YsG0yYSwvbAbH8fiq-9UoMfn4ZsL1E5ltE7U1w246aVD2iXLLDe6VgOz0J-3QqEAst9_9wzh6I0b0UYfGU3wcio-JSVpVOheux_0kxdiu6Gu-WDj5v_CfbL587GbFHfZj8O0nngBN5J"/>
</div>
<div>
<h3 class="font-bold text-lg dark:text-white">BMW M4 Competition</h3>
<p class="text-charcoal/50 dark:text-white/50 text-sm font-medium">POL-445562-C</p>
</div>
</div>
<div class="flex items-center gap-3">
<span class="px-3 py-1 bg-status-gray/20 text-charcoal/60 dark:text-white/60 text-xs font-bold rounded-full uppercase tracking-wider">Expired</span>
<span class="material-icons text-charcoal/30 dark:text-white/30 chevron-icon transition-transform">chevron_right</span>
</div>
</div>
<div class="details-content">
<div class="overflow-hidden"></div>
</div>
</div>
<div class="bg-white dark:bg-zinc-900 p-5 rounded-lg shadow-soft border border-transparent hover:border-primary/10 transition-all duration-300">
<div class="flex items-center justify-between cursor-pointer">
<div class="flex gap-4 items-center">
<div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
<img alt="Car Logo" class="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3XsH9HJcc3uuk9zS1-LCKGDXonCiR1f2hyaVTdsUe_GhlJwJyooXPeQvWNEb1Wf7AISRSvN1g7Wu156SMcQEHQ_zSgzuQVHQnMO6NGwt-LBP-GKCidsu-p9baOxYdugfNyn1KucV3dgYGC5si8k7TRtTgK8JlftOjWPQV-ifHT4_ptMDWroKRWyK4GuHVJUAvnLl0gXWKGGSFDCQyz9dPBG3dKojoWSaYPo7XSlA7-QGG4QtbeqYEB8teY2WCXk93QpHAK5QowaAH"/>
</div>
<div>
<h3 class="font-bold text-lg dark:text-white">Rivian R1S</h3>
<p class="text-charcoal/50 dark:text-white/50 text-sm font-medium">POL-771122-D</p>
</div>
</div>
<div class="flex items-center gap-3">
<span class="px-3 py-1 bg-primary text-charcoal text-xs font-bold rounded-full uppercase tracking-wider">Active</span>
<span class="material-icons text-charcoal/30 dark:text-white/30 chevron-icon transition-transform">chevron_right</span>
</div>
</div>
<div class="details-content">
<div class="overflow-hidden"></div>
</div>
</div>
</main>
<button class="fixed bottom-28 right-6 w-16 h-16 bg-primary text-charcoal rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transition-transform active:scale-90 z-50">
<span class="material-icons text-3xl font-bold">add</span>
</button>

<div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-charcoal/10 dark:bg-white/10 rounded-full mb-2 pointer-events-none"></div>

</body></html>