
# React + Laravel

This repository is a SPA using Laravel 7 in backend and React.JS 16 in frontend.

![](project_react_laravel.gif)


## Features

### Backend
-   **[Laravel 7.x](https://laravel.com/docs/7.x/installation)**: Back-end server framework.
-   **[Eloquent](https://laravel.com/docs/7.x/eloquent)**: Object Relational Mapper
-   **[Passport](https://laravel.com/docs/7.x/passport)**: OAuth2 server and API authentication package

### Frontend

-   **[React](https://pt-br.reactjs.org/)**: Front-end framework.
-   **[Redux](https://redux.js.org/introduction/getting-started)**: React state management.
-   **[Redux-Form](https://redux-form.com/8.3.0/)**: A higher order component decorator for forms using Redux and React.
-   **[Babel](https://babeljs.io/)**: Support ES8 syntax.
-   **[Boostrap](https://getbootstrap.com/)**: Front-end UI kit.
-   **[Webpack](https://webpack.js.org/)**: Module bundler.
-   **[Casl](https://github.com/stalniy/casl)**: User permissions manager
-   **[AdminLte 3](https://adminlte.io/themes/v3/index.html)**: Responsive administration template


### How to deploy

Environment prerequisites

php >= 7.2  
Composer  
MySQL  

##### Cloning repository and install dependencies

Install php dependencies

```sh

$ git clone https://github.com/raduanoliveira/laravel-react-redux.git

$ cd laravel-react-redux

$ composer install
```

Check updates of npm packages.

```sh
$ npm install -g npm-check-updates
$ ncu -u
$ npm install
```

Create .env file
```sh
$  cp .env.example .env
```
Edit database connection in .env file

```sh
$  vim .env

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=react_laravel
DB_USERNAME=user
DB_PASSWORD=user
```
ps: the database should now be created. The chosen user must have permission to access the database.

Run migrate (to create tables on database)
```sh
php artisan migrate
```

Run passport (to create OAuth2 users and keys)

```sh
php artisan passport:install
```
Run seeders (to populate roles table)
```sh
php artisan db:seed
```

Run storage (to create a symbolic link in public folder to /storage/app)

```sh
php artisan storage:link
```

Deployment is ready to run

```sh
php artisan serve
```

The project is running on http://localhost:8000

##### Configuring admin permission

After the first user is created on the registration page, you must configure that user as administrator permission.

```sh
$ php artisan tinker
$ $role = \App\Role::where('name','admin')->first()
$ $user = \App\User::find(1)
$ $user->roles()->attach($role->id)
```
Your user can access the administrator mode in the project.

##### Running the development environment

To make updates to the frontend, you need to set up the React environment.

```sh
$ cd resources/assets/myapp/src/
$ ncu -u
$ npm install
$ npm run start
```

The development environment is running on the localhost:3002

After customizing, you need to run the following command to deploy to production

```sh
$ npm run build
```

ps. The webpack is configured to create files (.js and .css) for the internal laravel production environment (/public/). Running the production environment in localhost:8000
