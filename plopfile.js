const config = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'templates/component/component.module.scss.hbs',
      },
    ],
  });

  plop.setGenerator('ui-component', {
    description: 'Create a UI component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your UI component name?'
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/UI/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/UI/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'templates/component/component.module.scss.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'templates/component/component.module.scss.hbs',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?'
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.ts',
        templateFile: 'templates/hook/hook.ts.hbs',
      },
    ],
  });

  plop.setGenerator('base-router', {
    description: 'Create a base router',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: 'src/router/config.tsx',
        templateFile: 'templates/router/config.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/router/Router.tsx',
        templateFile: 'templates/router/Router.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('base-http', {
    description: 'Create a base http',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: 'src/http/config.ts',
        templateFile: 'templates/http/config.ts.hbs',
      },
    ],
  });
};

export default config;
