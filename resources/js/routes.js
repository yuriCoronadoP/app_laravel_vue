 const Home = () => import('./components/Home.vue');
 const Contacto = () => import('./components/Contacto.vue');

 // importamos los componentes para el blog
 const Mostar = () => import('./components/blog/Mostrar.vue');
 const Editar = () => import('./components/blog/Editar.vue');
 const Crear = () => import('./components/blog/Crear.vue');

 export const routers = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contacto',
        path: '/',
        component: Contacto
    },
    {
        name: 'mostrarBlogs',
        path: '/blogs',
        component: Mostrar
    },
    {
        name: 'editarBlog',
        path: '/editar/:id',
        component: Editar
    },
    {
        name: 'crearBlog',
        path: '/crear',
        component: Crear
    }
 ];