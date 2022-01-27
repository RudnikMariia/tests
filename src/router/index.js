import Vue from "vue";
import VueRouter from "vue-router";
import AllTests from "@/views/AllTests";
import MyTest from "@/views/MyTest";
import Test from "@/views/Test";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/all',
            name: 'AllTests',
            component: AllTests
        },
        {
            path: '/my_test',
            name: 'MyTest',
            component: MyTest
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/test/:id',
            name: 'TestPage',
            component: Test
        }
    ]
})

export default router
