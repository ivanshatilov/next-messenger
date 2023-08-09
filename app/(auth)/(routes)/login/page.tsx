import AuthForm from "./components/AuthForm";

const LoginPage = () => {
    return ( 
        <div
            className="
            flex
            min-h-full
            flex-col
            justify-center
            py-12
            sm:px-6
            lg:px-8
            bg-slate-100
            ">
            <AuthForm />
        </div>
     );
}
 
export default LoginPage;