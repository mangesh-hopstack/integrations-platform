import { defineConfig } from '@adonisjs/core/app';
export default defineConfig({
    commands: [() => import('@adonisjs/core/commands')],
    providers: [
        () => import('@adonisjs/core/providers/app_provider'),
        () => import('@adonisjs/core/providers/hash_provider'),
        {
            file: () => import('@adonisjs/core/providers/repl_provider'),
            environment: ['repl', 'test'],
        },
        () => import('@adonisjs/core/providers/vinejs_provider'),
        () => import('@adonisjs/cors/cors_provider'),
    ],
    preloads: [() => import('#start/routes'), () => import('#start/kernel')],
    tests: {
        suites: [
            {
                files: ['tests/unit/**/*.spec(.ts|.js)'],
                name: 'unit',
                timeout: 2000,
            },
            {
                files: ['tests/functional/**/*.spec(.ts|.js)'],
                name: 'functional',
                timeout: 30000,
            },
        ],
        forceExit: false,
    },
});
//# sourceMappingURL=adonisrc.js.map